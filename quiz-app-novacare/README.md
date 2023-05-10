# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Oppgave: Oppgaven er som følger:

Lag en side med spørsmål og svar (QA) som bruker et trekkspill (accordion) for å vise og skjule svarene. Data skal hentes fra et Contentful API. Du kan fritt velge hvilke teknologier du vil bruke så lenge løsningen er basert på JavaScript, CSS og HTML.

Du kan benytte REST API eller GraphQL API for å hente ut data fra Contentful. Vi har inkludert eksempler på oppsett med Contentful-klienten i JavaScript, og lenker til dokumentasjon og testgrensesnitt for GraphQL.

Contentful-klient:  
npm install contentful

import { createClient } from "contentful"

const client = createClient({

                accessToken: <access_token>

                space: <space_id>,

           })

const response = await client.getEntries({

                content_type: "accordion",

include: 2,

            })

Dokumentasjon: https://contentful.github.io/contentful.js/contentful/10.1.4/

GraphQL:

GraphQL Apiet er tilgjengelig her: https://graphql.contentful.com/content/v1/spaces/{SPACE}/environments/{ENVIRONMENT}

Bytt ut space og environment med riktig verdi (lagt ved lenger ned i oppgaven).
Access_token kan enten sendes med som authentication header, eller som query parameter «access_token».

Testgrensesnitt for graphQL finner du her:

https://graphql.contentful.com/content/v1/spaces/{SPACE}/environments/{ENVIRONMENT} /explore?access_token={access_token}

Dokumentasjon: https://www.contentful.com/developers/docs/references/graphql/#/introduction/basic-api-information

Tilleggsinformasjon:
For å benytte APIet mot Contentful, har du behov for space, environment og access_token. Disse kommer under her:

Access_token: nlYde6hGa_MS0B0Ip1pMMQFGs0icI_ntabFjMhrjaUw

Space: q0fnx0gj00da

Environment: master

Vi legger vekt på;

kodekvalitet,
organisering av prosjektet,
visuell profil,
struktur og
enkel forvaltning/videreutvikling.

Det er også mulig å få «ekstrapoeng» ved å skrive tester og inkludere dem i besvarelsen.
