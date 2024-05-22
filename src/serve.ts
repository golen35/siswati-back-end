import express from "express";
import cors from "cors";
import { routes } from "./routes";
import dotenv from "dotenv";

dotenv.config()

const app = express();



app.use(express.json())
app.use(cors());

// Routers Middlewares
routes(app);

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server is Siswat running on port ${port}`);
});

