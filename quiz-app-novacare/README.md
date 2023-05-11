# Project: Contentful Data Fetching Application

### This project involves developing an application that fetches data from the Contentful API and displays it in a user interface.

## Running and Testing the Application

Clone: **git clone https://github.com/JohannesEA/reactts-novacare-quiz-app.git**
Build: **npm install** or **npm install --legacy-peer-deps** (the --legacy-peer-deps becaues the testing-lib does not support react 18 yet..)
Run locally: **npm start**
Run tests: **npm test src/test/accordion.test.ts**

## How i created the project, step by step

### Step 1: Project Setup

Started by setting up the basic structure of the project. At this point, the application should display a "Hello World" message.

### Step 2: Understand the Data Structure

I needed to understand the structure of the data to fetch. I used the function provided in the task at the beginning.

const response = await contentfulClient.getEntries({
content_type: "accordion",
include: 2,
});

### Step 3: Construct Query to Fetch Desired Data

I visited Graphql to test page at: https://graphql.contentful.com/content/v1/spaces/<...>/environments/<...>/explore?access_token=<...>.
I found that the relevant types are AccordionItem and AccordionItemCollection.

Then i created the query for fetching the relevant data

### Step 4: Update Frontend

I adjusted the frontend to ensure it's visually appealing and effectively displays the fetched data. Handling both fetched, loading and error- states.

### Step 5: Write Tests for Your Hook

Created tests for my custom hook using: https://github.com/testing-library/react-hooks-testing-library
Run tests: **npm test src/test/accordion.test.ts**
