import mongoose, {mongo} from "mongoose";

async function conn(){
    mongoose.connect(String(process.env.DB_CONNECTION_STRING));

    return mongoose.connection;
}

export default conn;
