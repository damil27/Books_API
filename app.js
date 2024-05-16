import express from "express";
const app = express();

const port = 3200;

app.use(express.json());
let collection = [];
let collectionIndex = 1;

app.post("/create", (req, res) => {
  const { title, author } = req.body;
  const newCollection = { id: collectionIndex++, title, author };
  collection.push(newCollection);
  return res.status(201).send({ msg: "success", data: newCollection });
});
// get all the collections
app.get("/all_books", (req, res) => {
  return res.status(200).send({ msg: "success", data: collection });
});

// get a single collection
app.get("/collection/:id", (req, res) => {
  const paramID = parseInt(req.params.id);
  const book = collection.find((t) => t.id === paramID);
  if (!book) {
    return res.status(404).send(" The book can not be found");
  }
  return res.status(200).send({ msg: "success", data: book });
});
//update 

app.delete("/delete/:id", (req, res) => {
    const paramID = parseInt(req.params.id);
    const book = collection.find(b => b.id === paramID)
    if (!book) {
        return res.status(404).send("Book Id can not be found!")
    }
    
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
