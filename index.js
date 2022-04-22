// run in cmd: npm run start-dev
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { use } = require("express/lib/router");
const objectId = require("mongodb").objectId;
const app = express();
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());

// username: TrafffordUser1
// password: 9ZvJFNL7OspxdKI6

const uri =
  "mongodb+srv://TrafffordUser1:9ZvJFNL7OspxdKI6@cluster0.goghj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");

    //get users
    app.get("/user", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    //POST user: add a new user
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("adding new user", newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    //delete a user
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: objectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("running my node CRUD Server");
});

app.listen(port, () => {
  console.log("CRUD server is running");
});
