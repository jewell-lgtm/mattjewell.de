// pages/api/coffee-form.ts
import Airtable from "airtable";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  companySize: z.string(),
  discussion: z.string(),
});

const airtableApiKey = () =>
  z
    .object({
      AIRTABLE_API_KEY: z.string(),
    })
    .parse(process.env).AIRTABLE_API_KEY;

let _base: Airtable.Base;
function getBase() {
  if (!_base) {
    _base = new Airtable({ apiKey: airtableApiKey() }).base(
      "app1z8Nt6uySXUsju"
    );
  }
  return _base;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, companySize, discussion } = bodySchema.parse(req.body);

  if (req.method !== "POST") {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  try {
    const [createdRecord] = await getBase()("Coffee Responses").create([
      {
        fields: {
          Name: name,
          Email: email,
          "Company Size": companySize,
          Discussion: discussion,
        },
      },
    ]);

    await createdRecord.save();

    res.status(200).json({ status: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: getMessage(err) });
  }
}

const getMessage = (e: unknown) => {
  if (
    !!e &&
    typeof e === "object" &&
    "message" in e &&
    typeof e.message === "string"
  ) {
    return e.message;
  }
  if (typeof e === "string") {
    return e;
  }
  return "Unknown error";
};
