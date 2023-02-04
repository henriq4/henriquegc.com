'use client';

import { code } from 'lib/models/cms/';
import Highlight, { defaultProps } from 'prism-react-renderer';

export function Code({ text }: code) {
  return (
    <Highlight {...defaultProps} code={text} language="markup">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, backgroundColor: 'transparent' }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
