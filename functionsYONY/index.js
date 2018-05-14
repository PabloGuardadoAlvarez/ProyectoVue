const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
response.send("Hello from Firebase!");
});

exports.addMessage = functions.https.onRequest((req, res) => {
    const var1 = req.query.var1;
    const var2 = req.query.var2;

    return admin.firestore().collection('MensajesWeb').add({Cuerpo:var1,Titulo:var2}).then((writeResult) => {
        // Send back a message that we've succesfully written the message
        return res.json({result: `Message with ID: ${writeResult.id} added.`});
    });
});
