import { createClient } from "contentful";

//Disse verdiene bør ikke ligge her, men fordi det er et test-prosjekt lar jeg de ligge
//Dersom jeg skulle brukt disse verdiene i en react app, ville jeg bruke process.env.ACCESS_TOKEN osc.. Dette er av sikkerhetsmessige årsaker.
const ACCESS_TOKEN = "nlYde6hGa_MS0B0Ip1pMMQFGs0icI_ntabFjMhrjaUw";

const SPACE = "q0fnx0gj00da";

const ENVIROMENT = "master";

export const contentfulClient = createClient({
  accessToken: ACCESS_TOKEN,
  space: SPACE,
});

export const BASE_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIROMENT}/?access_token=${ACCESS_TOKEN}`;
