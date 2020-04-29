# DocumentSummarizer

Document summarizer web app by David Abadi and Javier Roberts

# To Run Web App Locally:

1. Install nodeJS 13
2. Add Google and Rapid API keys in the fields called "APIKEY"
3. In backend directory use npm to install dependencies:
   - npm install
4. Start up backend server by running "npm start" in backend folder
5. In frontend directory use npm to install dependencies:
   - npm install
6. Start up frontend server by going to frontend directory and running "npm start"

# Technologies used

## Frontend

The frontend was built using ReactJS to allow for single page application interface, ensure faster rendering, and facilitate maintanence. We also used the bootsrap CSS library for easier styling/positioning of components.

## Backend

Our backend server is written in NodeJs with the help of Express. Out database is a MongoDB database stored on AWS. We use rapidAPI summarization API for summarization and Google Translate API for translation.
