import { heading2 } from 'lib/models/cms/';

export function Heading2({ text, id }: heading2) {
  return (
    <div>
      <h2 id={id}>{text}</h2>
    </div>
  );
}
