## Instalação

Clone o repositório:
```bash
git clone https://github.com/rafaelpalau/eco-shopping.git
```
Instale as dependências:
```
npm install
```

Configure as variáveis de ambiente: Crie um arquivo .env com as seguintes variáveis:

```
DATABASE_URL=  // URL d obanco de dados
NEXTAUTH_SECRET='eco-shopping-jwt'
GOOGLE_CLIENT_ID=  // ID Do Google para usar o Auth
GOOGLE_CLIENT_SECRET= // Secret do Google para usar o Auth
STRIPE_SECRET_KEY= // Chave Secreta do Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=  Chave Publica do Stripe
STRIPE_WEBHOOK_SECRET=  // Chave do Stripe Webhook
```

Execute o projeto:

```
npm run dev
```

Acesse o projeto em: http://localhost:3000


