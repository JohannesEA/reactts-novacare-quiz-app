# Project: Contentful Data Fetching Application

### This project involves developing an application that fetches data from the Contentful API and displays it in a user interface.

## Running and Testing the Application

Clone: **git clone https://github.com/JohannesEA/reactts-novacare-quiz-app.git**
Build: **npm install** or **npm install --legacy-peer-deps** (the --legacy-peer-deps becaues the testing-lib does not support react 18 yet..)
Run locally: **npm start**
Run tests: **npm test src/test/accordion.test.ts**

## How i created the project, step by step

### Step 1: Project Setup

Start by setting up the basic structure of your project. At this point, your application should display a "Hello World" message.

### Step 2: Understand the Data Structure

You need to understand the structure of the data you're fetching. In this project, we use the function provided in the project description to fetch data from Contentful:

javascript
Copy code
const response = await contentfulClient.getEntries({
content_type: "accordion",
include: 2,
});

### Step 3: Construct Query to Fetch Desired Data

With a clear understanding of the data structure, you can now construct a query to fetch the specific data you need. Here's how:

Visit the GraphQL test page at: https://graphql.contentful.com/content/v1/spaces/<...>/environments/<...>/explore?access_token=<...>.
Examine the data types and define corresponding types in your project. For this project, the relevant types are AccordionItem and AccordionItemCollection.

### Step 4: Update Frontend

Adjust your frontend to ensure it's visually appealing and effectively displays the fetched data. Remember to handle both loading and error states.

### Step 5: Write Tests for Your Hook

Create tests for your hook using this library: https://github.com/testing-library/react-hooks-testing-library
