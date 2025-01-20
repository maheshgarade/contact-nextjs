import express from "express";
import cors from "cors";
import { connectDB } from "./config/dbConfig";
import contactRoutes from "./routes/contactRoutes";
import net from "net";

const app = express();
const DEFAULT_PORT = 5000;

// connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoutes);

// Function to check if the port is available
const checkPortAvailability = (port: any) =>
  new Promise((resolve, reject) => {
    const tester = net
      .createServer()
      .once("error", (err: any) =>
        err.code === "EADDRINUSE" ? resolve(false) : reject(err)
      )
      .once("listening", () =>
        tester.once("close", () => resolve(true)).close()
      )
      .listen(port);
  });

// Start the server
const startServer = async () => {
  let port = DEFAULT_PORT;
  while (!(await checkPortAvailability(port))) {
    console.log(`Port ${port} is in use. Trying ${port + 1}...`);
    port++;
  }

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

startServer();
