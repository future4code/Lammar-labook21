import { app } from "./app";
import { userRouter } from "./routes/useRouter";

app.use("/user", userRouter)