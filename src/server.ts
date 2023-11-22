import "reflect-metadata"
import express from "express" 
import "./database"

const app = express();

app.use(express.json())

app.listen(5000, () => console.log("Server is running"));