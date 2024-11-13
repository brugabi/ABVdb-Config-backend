import mysql2 from "mysql2/promise"

const connectToDb = async () => {
    try{
        return await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'data',
    })
    }
    catch(err){
        console.log(err)
    }
}
connectToDb()

