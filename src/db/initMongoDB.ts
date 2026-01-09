import mongoose from "mongoose";
import { getEnvVar } from "../utils/getEnvVar";


export const initMongoDB = async (): Promise<void> => {
try {
    const user: string = encodeURIComponent(getEnvVar('MONGODB_USER'))
    const pwd: string = encodeURIComponent(getEnvVar("MONGODB_PASSWORD"))
    const url: string = getEnvVar("MONGODB_URL")
    const db: string = getEnvVar('MONGODB_DB')

    await mongoose.connect(`mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`)

    console.log('Mongo connection successfully established!');
} catch (error:unknown) {
    console.log('Error while setting up mongo connection', error);
    throw error;

}
}
