import { Client } from '@notionhq/client';
import { authentication } from 'lib/models/notion';

const notionSecret = authentication.notionSecret.parse(
  process.env.NOTION_SECRET,
);

const notionDatabaseId = authentication.notionDatabaseId.parse(
  process.env.NOTION_DATABASE_ID,
);

const notionClient = new Client({
  auth: notionSecret,
});

export { notionSecret, notionDatabaseId, notionClient };
