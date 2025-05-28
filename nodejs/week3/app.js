import "dotenv/config";
import express from "express";
import knex from "knex";

const knexInstance = knex({
  client: process.env.DB_CLIENT || "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

//   if ("sort" in req.query) {
//     const orderBy = req.query.sort.toString();
//     if (orderBy.length > 0) {
//       query = query.orderByRaw(orderBy);
//     }
//   }

// This code protects against SQL injection by only allowing sorting on specific, safe column names and directions.
// This keeps SQL query safe and controlled.

if ("sort" in req.query) {
  const sortValue = req.query.sort.toString();

  const [col, dir] = sortValue.split(" ");
  const validCols = ["id", "first_name","last_name", "email", "phone"];
  const validDirs = ["asc", "desc"];

  if (
    validCols.includes(col.toLowerCase()) &&
    (!dir || validDirs.includes(dir.toLowerCase()))
  ) {
    query = query.orderBy(col, dir?.toLowerCase() || "asc");
  } else {
    return res.status(400).json({ error: "Invalid sort parameter" });
  }
}

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
