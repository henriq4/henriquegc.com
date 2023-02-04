/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Paragraph } from 'lib/components/cms/Paragraph';
import { notionClient, notionDatabaseId } from 'lib/config/cms/notion';
import { notionBlockObject } from 'lib/models/cms/notion';
import { notionParagraphToParagraph } from 'lib/notionToIndex';

const fetchNotion = async () => {
  const { results: blockQueryResultsRaw } =
    await notionClient.blocks.children.list({
      block_id: 'cad8309c-2e58-476a-8fa0-9203f8e106bd',
    });

  const blockQueryResultsParsed: notionBlockObject[] = blockQueryResultsRaw.map(
    blockContent => {
      const { type, id } = blockContent;
      const content = blockContent[type];

      return {
        id,
        type,
        content,
      };
    },
  );

  const test = (blockQueryResObj: blockQueryObject[]) => {
    const indents = [];

    for (let i = 0; i < blockQueryResObj.length; i += 1) {
      if (blockQueryResObj[i].type === 'paragraph') {
        const aaa = notionParagraphToParagraph(blockQueryResObj[i]);

        indents.push(<Paragraph id={aaa.id} text={aaa.text} key={aaa.id} />);
      }
    }

    return <div>{indents}</div>;
  };

  return test(blockQueryResultsParsed);
};

export default async function Page() {
  const data = await fetchNotion();

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-12">
      {data}
    </div>
  );
}
