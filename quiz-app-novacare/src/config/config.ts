import { createClient } from "contentful";

export const contentfulClient = createClient({
  accessToken: "nlYde6hGa_MS0B0Ip1pMMQFGs0icI_ntabFjMhrjaUw",
  space: "q0fnx0gj00da",
});

//Disse verdiene bør ikke ligge her, men fordi det er et test-prosjekt lar jeg de ligge
const ACCESS_TOKEN = "nlYde6hGa_MS0B0Ip1pMMQFGs0icI_ntabFjMhrjaUw";

const SPACE = "q0fnx0gj00da";

const ENVIROMENT = "master";

export const BASE_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIROMENT}/?access_token=${ACCESS_TOKEN}`;
