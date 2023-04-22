const functions = require('firebase-functions');
const cors = require('cors')({ origin: true});
const admin = require('firebase-admin');
const serviceAccount = {
  apiKey: "AIzaSyBTIBvajWg5o_gwJzHxfKMayROBD8Xb2q0",
  authDomain: "fiicode-d41aa.firebaseapp.com",
  databaseURL: "https://fiicode-d41aa-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "fiicode-d41aa",
  storageBucket: "fiicode-d41aa.appspot.com",
  messagingSenderId: "173874772657",
  appId: "1:173874772657:web:38de94d08c41e535dfc090"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fiicode-d41aa-default-rtdb.europe-west1.firebasedatabase.app/"
});

const { SessionsClient } = require('dialogflow');


exports.dialogflowGateway = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const { queryInput, sessionId } = request.body;


    const sessionClient = new SessionsClient({ credentials: serviceAccount });
    const session = sessionClient.sessionPath('fireship-lessons', sessionId);


    const responses = await sessionClient.detectIntent({ session, queryInput});

    const result = responses[0].queryResult;

    response.send(result);
  });
});


const { WebhookClient } = require('dialogflow-fulfillment');

exports.dialogflowWebhook = functions.https.onRequest(async (request, response) => {
    const agent = new WebhookClient({ request, response });

    console.log(JSON.stringify(request.body));

    const result = request.body.queryResult;
   
    function welcome(agent) {
      agent.add(`Welcome to my agent!`);
    }
   
    function fallback(agent) {
      agent.add(`Sorry, can you try again?`);
    }

    async function userOnboardingHandler(agent) {

     const db = admin.firestore();
     const profile = db.collection('users').doc('jeffd23');

     const { name, color } = result.parameters;

      await profile.set({ name, color })
      agent.add(`Welcome aboard my friend!`);
    }


    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('UserOnboarding', userOnboardingHandler);
    agent.handleRequest(intentMap);
});
