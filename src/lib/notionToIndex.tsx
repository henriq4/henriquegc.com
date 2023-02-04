import { paragraph } from './models/cms';
import { notionParagraph } from './models/cms/notion/block';

function notionParagraphToParagraph(P: notionParagraph) {
  const a = [];

  for (let i = 0; i < P.content.rich_text.length; i += 1) {
    a.push(P.content.rich_text[i].plain_text);
  }

  const text = a.join(' ');

  const p: paragraph = {
    id: P.id,
    text,
  };

  return p;
}

export { notionParagraphToParagraph };
