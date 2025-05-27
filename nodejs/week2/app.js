import express from "express";
import fs from "node:fs";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  try {
    const data = fs.readFileSync("./documents.json", "utf8");

    const searchTerm = req.query.q;
    if (!searchTerm) {
      res.json(data);
      return;
    }

    const jsonData = JSON.parse(data);

    const filteredData = jsonData.filter((item) => {
      for (const property in item) {
        if (String(item[property]).includes(searchTerm)) {
          return true;
        }
      }
      return false;
    });

    res.json(filteredData);
  } catch (err) {
    console.error(err);
  }
});

app.get("/documents/:id", (req, res) => {
  try {
    const data = fs.readFileSync("./documents.json", "utf8");
    const id = req.params.id;
    const jsonData = JSON.parse(data);

    const filteredData = jsonData.filter((item) => {
      if (item.id == id) {
        return true;
      } else {
        return false;
      }
    });

    if (filteredData.length == 0) {
      res.status(404);
      res.send("Document not found.");
    } else {
      res.json(filteredData);
    }
  } catch (err) {
    console.error(err);
  }
});

app.post("/search", (req, res) => {
  try {
    const data = fs.readFileSync("./documents.json", "utf8");
    const jsonData = JSON.parse(data);

    // Both "q" and "fields" can not be provided at the same time
    const searchQuery = req.query.q;
    let searchFields;

    if (req.body != undefined) {
      searchFields = req.body.fields;
    }

    if (searchQuery != undefined && searchFields != undefined) {
      res.status(400);
      res.send("Both 'q' and request body can not be sent at the same time");
      return;
    }

    //  Find documents matching "q" or "fields"
    let results = jsonData;
    if (searchQuery != undefined) {
      results = jsonData.filter((item) => {
        //  iterate over all properties of `item` and fiilter only those that their value contains `searchTerm`
        for (const property in item) {
          if (String(item[property]).includes(searchQuery)) {
            return true;
          }
        }
        return false;
      });
    } else if (searchFields != undefined) {
      results = jsonData.filter((item) => {
        for (const property in searchFields) {
          if (item[property] != searchFields[property]) {
            return false;
          }
        }
        return true;
      });
    }
    res.json(results);
    //  Send response back
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
