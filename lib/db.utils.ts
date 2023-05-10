import { MongoClient } from "mongodb";

const URL = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.oewnp2h.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(URL);
  return client;
};
