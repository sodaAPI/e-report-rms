import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ReportRoute from "./routes/ReportRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import MeetingRoute from "./routes/MeetingRoute.js";
import TaskRoute from "./routes/TaskRoute.js";
import MessageRoute from "./routes/MessageRoute.js";
import NotificationRoute from "./routes/NotificationRoute.js";
import bodyParser from "body-parser";
import corsOptions from "cors";
import { Server } from "socket.io";
dotenv.config();

const app = express();
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
  expiration: 2 * 60 * 60 * 1000,
});

// Sync Database
// (async () => {
//   await db.sync();
// })();
// store.sync();

app.use(
  session({
    secret: "7cfbedb7-444e-4334-a3ea-2078468fd035",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
      maxAge: 2 * 60 * 60 * 1000,
    },
  })
);

try {
  await db.authenticate();
  console.log("Database has been connected...");
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
app.use("/message", MessageRoute);
app.use("/notification", NotificationRoute);

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Socket.io
const APP_PORT = 5000;
const server = app.listen(APP_PORT, () =>
  console.log(`Server started on PORT ${APP_PORT}`)
);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);
  socket.on("disconnect", () => {
    console.log(`User disconnected ${socket.id}`);
  });
});
