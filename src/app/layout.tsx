import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/footer/Footer";
import CartProvider from "../../providers/CartProvider";
import { Toaster } from "react-hot-toast";
import { getCurrentUser } from "../../actions/getCurrentUser";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "Eco Shopping",
  description: "Eco Shopping, a website for buying eco friendly products",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentUser = await getCurrentUser();
  
  
  return (
    <html lang="en">
      <body className={`${raleway.className}text-slate-600`}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
