import { buffer } from "micro";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import prisma from "../../libs/prismadb";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const buf = await buffer(request);
  const sig = request.headers["stripe-signature"];

  if (!sig) {
    return response.status(400).json({ error: "No signature provided" });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    return response.status(400).send("webhook error" + error);
  }

  switch (event.type) {
    case "charge.succeeded":
      const charge: any = event.data.object as Stripe.Charge;

      if (typeof charge.payment_intent === "string") {
        await prisma.order.update({
          where: { paymentIntentId: charge.payment_intent },
          data: {
            status: "complete",
            address: {
              city: charge.shipping?.address?.city,
              country: charge.shipping?.address?.country,
              line1: charge.shipping?.address?.line1,
              line2: charge.shipping?.address?.line2 || undefined,
              zipCode: charge.shipping?.address?.postal_code,
              state: charge.shipping?.address?.state,
            },
          },
        });
      }

      break;
    default:
      console.log("Unhandled event type", event.type);
  }

  response.json({ received: true });
}
