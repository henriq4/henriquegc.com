import { heading3 } from 'lib/models/cms/';

export function Heading3({ text, id }: heading3) {
  return (
    <div>
      <h3 id={id}>{text}</h3>
    </div>
  );
}
