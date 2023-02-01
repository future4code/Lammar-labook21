import { app } from "./app";
import { postRouter } from "./routes/postRouter";
import { userRouter } from "./routes/useRouter";

app.use("/user", userRouter)
app.use("/post", postRouter)