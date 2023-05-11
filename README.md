Questo é Il Template di un Progetto Next.js 13 (with app dir) con tutte le dipendenze necessarie per iniziare a lavorare.

# Stack

- [Next.js 13](https://nextjs.org/docs/getting-started/installation)
- [Mongo DB](https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/)
- [NextAuth.js](https://next-auth.js.org/)

# How It's Made

1. init Next.js:
    - `yarn create-next-app@latest`
        What is your project named?  Template
        Would you like to add TypeScript with this project?  Y
        Would you like to use ESLint with this project?  Y
        Would you like to use Tailwind CSS with this project? Y
        Would you like to use the src/ directory with this project? Y
        What import alias would you like configured? @
2. MongoDB
    - `yarn add mongodb`
    - `src\lib\util.template.mongodb.ts` - [file di connessione al database](https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/lib/mongodb.ts)
3. Auth
    - `yarn add next-auth`
    - env var:
        - console.cloud.google.com -> new project -> schermata di consenso OAuth -> nuovo ID client UI -> client secret, id, // TODO URI
        - NEXTAUTH_SECRET= `openssl rand -base64 32` or https://generate-secret.vercel.app/32
        - NEXTAUTH_URL [doc](https://next-auth.js.org/configuration/options#nextauth_url) [warning](https://next-auth.js.org/warnings#nextauth_url)
    - `src\app\api\auth\[...nextauth\]\route.ts` - [credential auth](https://github.com/nextauthjs/next-auth-example/blob/main/pages/api/auth/%5B...nextauth%5D.ts): 
        - é importante notare l'esportazione dell'handler come descritto [qui](https://github.com/nextauthjs/next-auth-example/blob/main/pages/api/auth/%5B...nextauth%5D.ts)
        - ho deciso di usare questo approccio [qui](https://next-auth.js.org/configuration/initialization#advanced-initialization) cosi che si possa: "Do whatever you want here, before the request is passed down to NextAuth"
    - `src\lib\component.template.login.tsx` - semplice component di login / logout
    - `src\app\api\test\serverSideSession\route.ts` - test per verificare la session server side
    - `src\lib\component.template.NextAuthProvider.tsx` - aggiunge l'auth provider al layout

## Auth

    How to use it:
    Behind the scenes, this creates all the relevant OAuth API routes within /api/auth/* so that auth API requests to:

    GET /api/auth/signin
    POST /api/auth/signin/:provider
    GET/POST /api/auth/callback/:provider
    GET /api/auth/signout
    POST /api/auth/signout
    GET /api/auth/session
    GET /api/auth/csrf
    GET /api/auth/providers

    Quando configuri l'autenticazione con Google tramite l'API Console di Google Cloud (https://console.cloud.google.com/), devi specificare un'URI di reindirizzamento autorizzata. Questa URI viene utilizzata da Google per reindirizzare l'utente alla tua applicazione dopo che l'utente ha concesso l'autorizzazione. Assicurati che l'URI di reindirizzamento autorizzata nel tuo progetto Google Cloud corrisponda a NEXTAUTH_URL seguito da /api/auth/callback/google. Ad esempio, se il tuo NEXTAUTH_URL è "https://www.esempio.com", l'URI di reindirizzamento autorizzata dovrebbe essere "https://www.esempio.com/api/auth/callback/google".

    Attenzione! http://127.0.0.1 é diverso da http://localhost


# TODO

fix tailwind DONE - tailwind ingora la cartella lib, non mettere componenti li

# Warnings:

- NextAuth - getServerSession
[next-auth][warn][EXPERIMENTAL_API] 
`getServerSession` is used in a React Server Component.
https://next-auth.js.org/configuration/nextjs#getServerSession
https://next-auth.js.org/warnings#EXPERIMENTAL_API

https://stackoverflow.com/questions/75699349/getting-next-authwarnexperimental-api-when-call-await-getserversessionreq

# Tests

`src\app\test\page.tsx` - test delle dipendenze:
    - connessione a mongo
    - login/logout

<!-- ## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
