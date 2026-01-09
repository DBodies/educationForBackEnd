import { startServer } from "./server";
import{ initMongoDB } from './db/initMongoDB.ts'

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();