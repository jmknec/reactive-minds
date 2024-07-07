import express from "express";
import "dotenv/config";
import cors from "cors";
import tools from "./routes/tools.js";
import users from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 8181;

app.use(cors());
app.use(express.json());

app.use("/tools", tools);
app.use("/users", users);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("Press CTRL + C to stop the server");
});
