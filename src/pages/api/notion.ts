import { Client } from '@notionhq/client';
import { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({
  auth: 'secret_RIW5jEJ2zvhnaJrZQJpGrx6G1pBrqkNwNJELpNV0GdO',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const query = await notion.blocks.children.list({
    block_id: 'cad8309c-2e58-476a-8fa0-9203f8e106bd',
  });

  res.status(201).json(query.results);
}
