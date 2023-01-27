/* eslint-disable @typescript-eslint/ban-ts-comment */
import { notionClient } from 'lib/config/notion';
import { blockQueryObject } from 'lib/models/notion';

const fetchNotion = async () => {
  // const { results: databaseQueryResultsRaw } =
  //   await notionClient.databases.query({
  //     database_id: databaseId,
  //   });

  // const databasePages = await notionClient.pages.retrieve({
  //   page_id: pageId,
  // });

  const { results: blockQueryResultsRaw } =
    await notionClient.blocks.children.list({
      block_id: 'cad8309c-2e58-476a-8fa0-9203f8e106bd',
    });

  const blockQueryResultsParsed: blockQueryObject[] = blockQueryResultsRaw.map(
    blockContent => {
      // @ts-ignore
      const { type, id } = blockContent;
      const content = blockContent[type];

      return {
        id,
        type,
        content,
      };
    },
  );

  return blockQueryResultsParsed;
};

export default async function Page() {
  const data = await fetchNotion();

  return (
    <div className="h-screen flex justify-center items-center">
      {data.map(e => {
        return (
          <h1 key={e.id} className="block">
            {e.type}
          </h1>
        );
      })}
    </div>
  );
}
