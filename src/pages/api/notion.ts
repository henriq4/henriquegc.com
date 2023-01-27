/* eslint-disable @typescript-eslint/ban-ts-comment */
import { notionClient, notionDatabaseId } from 'lib/config/notion.ts';
import { blockQueryObject } from 'lib/models/notion';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { results: databaseQueryResultsRaw } =
    await notionClient.databases.query({
      database_id: notionDatabaseId,
    });

  const { results: blockQueryResultsRaw } =
    await notionClient.blocks.children.list({
      block_id: 'cad8309c-2e58-476a-8fa0-9203f8e106bd',
    });

  const blockQueryResultsParsed: blockQueryObject[] = blockQueryResultsRaw.map(
    blockContent => {
      // @ts-ignore
      const { type } = blockContent;
      const content = blockContent[type];

      return {
        type,
        content,
      };
    },
  );

  res.status(201).json(blockQueryResultsParsed);
}
