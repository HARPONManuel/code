var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nxworkspace-83435-default-rtdb.europe-west1.firebasedatabase.app"
});