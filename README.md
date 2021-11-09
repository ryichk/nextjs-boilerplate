# Next.js Boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- 🎉 [Next.js](https://nextjs.org/) for Static Site Generator

- 🔧 Type checking [TypeScript](https://www.typescriptlang.org/)

- 💚 Integrate with [TailwindCSS](https://tailwindcss.com/)

- ✨ Code Formatter with [Prettier](https://prettier.io/)

- 🚨 Linter with [ESLint](https://eslint.org/)

- ✅ Testing with [Jest](https://jestjs.io/)

- 🎨 Build a design system with [Storybook](https://storybook.js.org/)

- 🚀 Deploy with [AWS Amplify](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/)

## Requirements

- [Docker Desktop](https://www.docker.com/get-started)

## Getting Started

Run the development server:

```sh
docker-compose up
```

- Next.js App: [http://localhost:8000](http://localhost:8000)

- Storybook: [http://localhost:6006](http://localhost:6006)

## Development

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:8000/api/hello](http://localhost:8000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Format the code

```sh
docker-compose run --rm app yarn format
```

### Linting

```sh
docker-compose run --rm app yarn lint
```

### Testing

```sh
docker-compose run --rm app yarn test
```

## Deploy to AWS Amplify

### Prerequisites

```sh
npm install -g @aws-amplify/cli
```

```sh
amplify configure
```

### Deploy and host a hybrid app (SSG and SSR)

Initialize a new Amplify project.

```sh
$ amplify init

? Enter a name for the project: # <your app name>
? Enter a name for the environment: # dev
? Choose your default editor: # Visual Studio Code (or your preferred editor)
? Choose the type of app that youre building: # javascript
? What javascript framework are you using: # react
? Source Directory Path: # src
? Distribution Directory Path: # .next
? Build Command: # npm run-script build
? Start Command: # npm run-script start
? Select the authentication method you want to use: # AWS profile
? Please choose the profile you want to use: # <your profile>
```

Add hosting with Amplify `add` command:

```sh
$ amplify add hosting

? Select the plugin module to execute: # Hosting with Amplify Console
? Choose a type: # Manual deployment
```

The Amplify Console opens and displays your deployed backend environment.

Choose the Frontend environments tab, select your Git provider, then choose Connect Branch.

Follow the steps in the Amplify console to choose the branch to connect, and deploy your app.

After your site is successfully deployed, you'll see green checkmarks.

To view the live site, click on the automatically generated URL.

### Deleting the App

To delete the app and the deployment, run the `delete` command:

```sh
amplify delete
```

[Deploy and host a hybrid app (SSG and SSR)](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/#deploy-and-host-a-hybrid-app-ssg-and-ssr)

## License

Licensed under the MIT License, Copyright © 2021-present ryichk
