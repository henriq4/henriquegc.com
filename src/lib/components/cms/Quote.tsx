import { quote } from 'lib/models/cms/';

export function Quote({ text, id }: quote) {
  return (
    <div>
      <blockquote id={id}>{text}</blockquote>
    </div>
  );
}
