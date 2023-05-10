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
        - NEXTAUTH_SECRET= `openssl rand -base64 32`
        - NEXTAUTH_URL [doc](https://next-auth.js.org/configuration/options#nextauth_url) [warning](https://next-auth.js.org/warnings#nextauth_url)
    - `src\app\api\auth\[...nextauth\]\route.ts` - [credential auth](https://github.com/nextauthjs/next-auth-example/blob/main/pages/api/auth/%5B...nextauth%5D.ts): 
        - é importante notare l'esportazione dell'handler come descritto [qui](https://github.com/nextauthjs/next-auth-example/blob/main/pages/api/auth/%5B...nextauth%5D.ts)
        - ho deciso di usare questo approccio [qui](https://next-auth.js.org/configuration/initialization#advanced-initialization) cosi che si possa: "Do whatever you want here, before the request is passed down to NextAuth"
    - `src\lib\component.template.login.tsx` - semplice component di login / logout
    - `src\app\api\test\serverSideSession\route.ts` - test per verificare la session server side
    - `src\lib\component.template.NextAuthProvider.tsx` - aggiunge l'auth provider al layout

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
