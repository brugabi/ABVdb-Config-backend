import express  from "express"
import morgan from "morgan"
import { Request, Response} from "express"
const app = express();

app.use(morgan('dev'));
app.listen(3000, () => {
    console.log("Server running on port 3000");
})

app.get("/", (req ,res ) => {
    res.json({msg: "Servidor iniciado"})
})
