import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { CONNECTION_URL, PORT } from "./config";
import usersRoutes from "./routes/users";
import identificationsRoutes from "./routes/identifications";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", usersRoutes);
app.use("/identifications", identificationsRoutes);

mongoose
  .connect(CONNECTION_URL, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
