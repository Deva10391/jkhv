const express = require('express');
const cors = require('cors');
const app = express();
const reqRoute = require('./routes/api/req');

app.use(cors());
app.use(express.json());
app.use('/api/req', reqRoute);

app.get('/', (req, res) => {
  res.end("From server");
});

const mongoose = require('mongoose');
const config = require('./config/default.json');
db = config.mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('connected to the database'))
  .catch(err => console.log(`${err}`));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Started listening to port: ${port}`);
});
/*
server.js creation
npm i express
npm i --s concurrently

npm i mongoose
npm i cors
npx create-react-app client
npm i

cd client
npm i axios
npm i bootstrap
npm i reactstrap react redux redux-thunk react-redux
npm i
cd ..

npm init

make a file actions/<action types>.js
make a file reducers/index.js , requestReducer.js

in the main folder update the script object in main package.json with this scrtip object

  "proxy": "http://localhost:3000",
  "clientinstall": "npm install --prefix client",
  "scripts": {
    "client-install": "npm install --prefix client",
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },

//in cmd, [0] represents the server script, and [1] represents the client script.
*/