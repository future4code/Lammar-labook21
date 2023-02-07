import express from 'express'
import cors from 'cors'

/**************************** CONFIG ******************************/


export const app = express()

app.use(express.json())
app.use(cors())

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})