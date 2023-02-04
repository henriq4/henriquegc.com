import { heading1 } from 'lib/models/cms/';

export function Heading1({ text, id }: heading1) {
  return (
    <div>
      <h1 id={id}>{text}</h1>
    </div>
  );
}
