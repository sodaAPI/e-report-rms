import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";
import { Sequelize } from "sequelize";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ReportRoute from "./routes/ReportRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import MeetingRoute from "./routes/MeetingRoute.js";
import TaskRoute from "./routes/TaskRoute.js";
import bodyParser from "body-parser";
import corsOptions from "cors";
dotenv.config();

const app = express();
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db
});

// Sync Database

(async () => {
  await db.sync();
})();

// store.sync();

app.use(session({
  secret: "7cfbedb7-444e-4334-a3ea-2078468fd035",
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: {
      secure: 'auto'
  }
}));

try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/report", ReportRoute);
app.use("/meeting", MeetingRoute);
app.use("/task", TaskRoute);

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("Server up and running...");
});
