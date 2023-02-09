import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import knex from 'knex'

/**************************** CONFIG ******************************/

/* dotenv.config()

export const connection= knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: 3306,
      multipleStatements: true
   }
}) */
export const app = express()

app.use(express.json())
app.use(cors())

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})