import { paragraph } from 'lib/models/cms/';

export function Paragraph({ text, id }: paragraph) {
  return (
    <div>
      <p id={id}>{text}</p>
    </div>
  );
}
