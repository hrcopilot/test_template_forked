Questo é Il Template di un Progetto Next.js 13 (with app dir) con tutte le dipendenze necessarie per iniziare a lavorare.

# Stack

- [Next.js 13](https://nextjs.org/docs/getting-started/installation)
- [Mongo DB](https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/)
- [NextAuth.js](https://next-auth.js.org/)
- [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
# How To use

- Configure OAuth Provider TODO
- Setup environment variables (locals and Vercel)

First, run the development server:

yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tests

`src\app\test\page.tsx` - testing page:

- mongo connection test
- `src\lib\test.component.template.login.tsx` - simple login / logout example
- test getServerSession in page
- `src\app\api\test\serverSideSession\route.ts`, `src\components\test.template.clientFetchServerSideSession.tsx` - test getServerSession in API route

## Change Logs
- Added adapter to MongoDB (REF)[https://authjs.dev/reference/adapter/mongodb] dependencies: `@next-auth/mongodb-adapter`
- ADD fetch.py to update template
# How It's Made
## Initialize Project
run `yarn create-next-app@latest`
- chosen options:
    TypeScript, ESLint, Tailwind CSS, src/ directory, import alias with "@"

## Database
run `yarn add mongodb`

- create `src\lib\util.template.mongodb.ts` - [Connection file](https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/lib/mongodb.ts)
- env
    - login in [https://cloud.mongodb.com/](https://cloud.mongodb.com/)
    - create a cluster and at least a user, then connect -> drivers and here you can find your database URI, replace <USERNAME> and <PASSWORD> with your own new user
    - put your URI in MONGODB_URI enviroment variable

## Auth

run `yarn add next-auth`
- create `src\app\api\auth\[...nextauth]\route.ts` - [credential auth](https://github.com/nextauthjs/next-auth-example/blob/main/pages/api/auth/%5B...nextauth%5D.ts): 
        - [REF](https://github.com/nextauthjs/next-auth-example/blob/main/pages/api/auth/%5B...nextauth%5D.ts)
        - [REF](https://next-auth.js.org/configuration/initialization#advanced-initialization) I used a generic approc to be able to do whatever I want before the request is passed down to NextAuth
- create `src\lib\component.template.NextAuthProvider.tsx` - aggiunge l'auth provider al layout
- env
    - *GOOGLE CLOUD OAUTH*: login in [console.cloud.google.com](console.cloud.google.com) -> new project -> OAuth consent screen -> Create Credentials -> OAuth Client ID 
        - choose: Web Application for Application type and set a name
        - for Authorized JavaScript origins set:
            - http://localhost:3000 (development)
            - https://<your-vercel-domain>.vercel.app
        - for Authorized redirect URIs set:
            - http://localhost:3000/api/auth/callback/google
            - https://<your-vercel-domain>.vercel.app/api/auth/callback/google
        - you get GOOGLE_ID and GOOGLE_SECRET env vars  
    - NEXTAUTH_SECRET=(https://generate-secret.vercel.app/32)[https://generate-secret.vercel.app/32]
    - NEXTAUTH_URL=Your Exactly Authorized redirect URI (localhost for dev and vercel.app for production)


# Warnings & Bugs:

## [EXPERIMENTAL WARNING] Message: [next-auth][warn][EXPERIMENTAL_API] getServerSession is used in a React Server Component.
NextAuth - getServerSession call
- (REF)[https://next-auth.js.org/configuration/nextjs#getServerSession]
- (REF)[https://next-auth.js.org/warnings#EXPERIMENTAL_API]
- Solution: (REF)[https://stackoverflow.com/questions/75699349/getting-next-authwarnexperimental-api-when-call-await-getserversessionreq]
- TODO to solve: do you still see warning on getServerSession call?

## [EXPERIMENTAL WARNING] Message: Module parse failed: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)
on call connectMongo (src\lib\util.template.mongoose.ts)
- (REF)[https://github.com/tc39/proposal-top-level-await#solution-top-level-await]
- (REF)[https://github.com/vercel/next.js/issues/43382]
- Solution (REF)[https://stackoverflow.com/a/75860669]
- TODO to solve: can you remove extra configuration in `next.config.js`?

<!-- # Contributors

We warmly invite you to contribute to our Next.js 13 project template! This project aims to provide a robust and efficient setup for developers to kick-start their projects. By contributing, you will be part of a thriving community working together to improve the developer experience and make an impact on the open-source ecosystem.

How Can You Contribute?
There are various ways to contribute, such as:

Bug Reports: If you come across any issues or bugs, please open an issue in our GitHub repository, providing a clear description and steps to reproduce the problem.

Feature Requests: We are always looking to improve our project. If you have any ideas for new features or improvements, feel free to open an issue to discuss them with the community.

Code Contributions: If you'd like to contribute code directly, you can submit a pull request. Before doing so, make sure to discuss the changes in a relevant issue, or create a new one if needed.

Documentation: Keeping our documentation up-to-date and clear is essential. If you find any inconsistencies or areas for improvement, please help us by submitting an update.

Community Support: Engage with the community by answering questions, providing guidance, or sharing your own experiences and projects based on our template.

We welcome contributors of all skill levels, and we value your time and effort. Our community is built on collaboration, and we believe that your contributions will help us grow and improve together. -->
<!--     
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

    Attenzione! http://localhost é diverso da http://localhost


# TODO

fix tailwind DONE - tailwind ingora la cartella lib, non mettere componenti li -->

