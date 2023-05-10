import { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "../../../lib/db.utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await connectDatabase();
  const db = client.db();

  const resBody = req.body;

  const { email, password } = resBody;

  if (req.method === "POST") {
    const result = await db.collection("users").insertOne({ email, password });
    res.status(201).json({ message: "success" });
  } else if (req.method === "GET") {
  }
};

export default handler;
