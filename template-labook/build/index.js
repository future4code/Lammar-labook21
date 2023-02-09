"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const postRouter_1 = require("./routes/postRouter");
const useRouter_1 = require("./routes/useRouter");
app_1.app.use("/user", useRouter_1.userRouter);
app_1.app.use("/post", postRouter_1.postRouter);
