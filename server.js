const { request } = require("express");
const exp = require("express");
const bcryptjs = require("bcryptjs");

const expressAsyncHandler = require("express-async-handler");

const mongoDBClient = require("mongodb").MongoClient;

const path= require("path"); 

require('dotenv').config()

const app = exp();
app.use(exp.static(path.join(__dirname,"./build")));
app.use(exp.json());

const dbURL =process.env.DATABASE_URL;

mongoDBClient
  .connect(dbURL)
  .then((client) => {
    let onlineVotingSystem = client.db("onlineVotingSystem");
    let voterCollection = onlineVotingSystem.collection("voterCollection");
    let candidateCollection = onlineVotingSystem.collection(
      "candidateCollection"
    );

    app.set("voterCollection", voterCollection);
    app.set("candidateCollection", candidateCollection);

    console.log("connextion established successfully");
  })
  .catch((err) => console.log("error connecting db", err.message));
app.post(
  "/voter-login",
  expressAsyncHandler(async (req, res) => {
    let voterObj = req.body;

    let voterCollection = req.app.get("voterCollection");

    let user = await voterCollection.findOne({ voterId: voterObj.voterId });
    if (user == null) {
      res.send({ message: "invalid user" });
    } else {
      let status = await bcryptjs.compare(userObj.username, user.password);

      if (status == false) {
        res.send({ message: "incorrect password" });
      } else {
        let token = jwt.sign({ username: userObj.username }, process.env.SECRET_KEY, {
          expiresIn: 60,
        });
        res.send({
          message: "login successful",
          payload: token,
          userObj: userObj,
        });
      }
    }
  })
);

app.post(
  "/admin-login",
  expressAsyncHandler(async (req, res) => {
    let voterObj = req.body;

    let voterCollection = req.app.get("voterCollection");

    let user = await voterCollection.findOne({ voterId: voterObj.voterId });
    if (user == null) {
      res.send({ message: "invalid user" });
    } else {
      let status = await bcryptjs.compare(userObj.username, user.password);

      if (status == false) {
        res.send({ message: "incorrect password" });
      } else {
        let token = jwt.sign({ username: userObj.username }, process.env.SECRET_KEY, {
          expiresIn: 60,
        });
        res.send({
          message: "login successful",
          payload: token,
          userObj: userObj,
        });
      }
    }
  })
);

// to get user
app.get(
  "/voters/:voterId",
  expressAsyncHandler(async (request, response) => {
    let voterId = request.params.voterId;

    let voterCollection = app.get("voterCollection");

    let userObj = await voterCollection.findOne({ voterId: voterId });

    if (userObj == null) {
      response.send({ message: "User not found" });
    } else {
      response.send({ message: userObj });
    }
  })
);

// to create voter
app.post(
  "/create-voter",
  expressAsyncHandler(async (request, response) => {
    let newUser = request.body;

    let voterCollection = app.get("voterCollection");

    let voterObj = await voterCollection.findOne({ voterId: newUser.voterId });

    if (voterObj != null) {
      response.send({ message: "User already exists" });
    } else {
      //hashing function
      let hashPassword = await bcryptjs.hash(newUser.voterPassword, 2);

      newUser.voterPassword = hashPassword;

      await voterCollection.insertOne(newUser);

      response.send({
        message: "Successfully created user",
        payloaad: newUser,
      });
    }
  })
);

// candidate get all
app.get(
  "/candidates",
  expressAsyncHandler(async (request, response) => {
    let candidateCollection = app.get("candidateCollection");

    let candidates = await candidateCollection.find().toArray();

    response.send({ message: candidates });
  })
);

// candidate creat

app.post(
  "/create-candidate",
  expressAsyncHandler(async (request, response) => {
    let newCandidate = request.body;

    let candidateCollection = app.get("candidateCollection");

    let candidateObj = await candidateCollection.findOne({
      candidateId: newCandidate.candidateId,
    });

    if (candidateObj != null) {
      response.send({ message: " candidate already exists" });
    } else {
      await candidateCollection.insertOne(newCandidate);
      response.send({ message: " candidate added successfully" });
    }
  })
);

// candidate delete

app.delete(
  "/delete-candidate/:candidateId",
  expressAsyncHandler(async (request, response) => {
    let candidateId = +request.params.candidateId;

    let candidateCollection = app.get("candidateCollection");

    let candidateObj = await candidateCollection.findOne({
      candidateId: candidateId,
    });

    if (candidateObj == null) {
      response.send({ message: " candidate does not exists" });
    } else {
      await candidateCollection.deleteOne({ candidateId: candidateId });
      response.send({ message: " candidate dleted successfully" });
    }
  })
);

// for in valid patha

app.use((request, response, next) => {
  response.send({ message: "invalid request path " });
});

// for error handling
app.use((error, request, response, next) => {
  response.send({ message: `Error occured ${error.message}` });
});


const port = process.env.PORT

app.listen(port, () => console.log(`listening to port ${port}`));
