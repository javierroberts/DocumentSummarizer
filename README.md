# DocumentSummarizer

Document summarizer web app by David Abadi and Javier Roberts

# To Run Web App Locally:

1. Install nodeJS 13
2. In backend directory use npm to install nodemon and body-parser:
   - npm install --save-dev nodemon
   - npm install --save body-parser
3. Start up backend server by running "npm start" in backend folder
4. Start up frontend server by going to frontend directory and running "npm start"

# Technologies used

## Frontend

The frontend was built using ReactJS to allow for single application interface, ensure faster rendering, and facilitate maintanence. We also used the bootsrap CSS library for easier styling/ppoitioning of components.

## Backend

Our backend server is written in NodeJs with the help of express. Currently, there is no database integrated, but we plan on using a MongoDB database once we set up authentication.

# To Do

1. Finish file upload input
2. Include language translation capabilities
3. Set up user accounts and authentication
4. Set up database for recent summaries
5. Integrate dataase with web app
