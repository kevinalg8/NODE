import express from "express"
import message from "./config/message";
import environment from "./config/enviroment"

const app = express();
app.set("PORT",process.env.PORT || 9090)


export default app;