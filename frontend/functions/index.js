const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
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
})

const { SessionsClient } = require('dialogflow');

exports.dialogflowGateway = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        const { queryInput, sessionId } = request.body;

        const sessionClient = new SessionsClient({ credentials: serviceAccount });
        const session = sessionClient.sessionPath('fiicode-d41aa', sessionId);

        const responses = await sessionClient.detectIntent({ session, queryInput });

        const result = responses[0].queryResult;

        response.send(result);
    });
});