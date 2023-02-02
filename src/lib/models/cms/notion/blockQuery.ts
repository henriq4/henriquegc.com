import { z } from 'zod';

const notionBlockQueryEnum = z.enum([
  'paragraph',
  'heading_1',
  'heading_2',
  'heading_3',
  'quote',
  'code',
  'image',
  'video',
  'equation',
  'divider',
]);

type notionBlockQueryTypes = z.infer<typeof notionBlockQueryEnum>;

type richText = {
  type: string;
  plain_text: string;
  href: string;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
  };
};

type caption = richText;

export interface notionParagraph {
  id: string;
  type: notionBlockQueryTypes;
  content: {
    rich_text: richText[];
  };
}

export interface notionHeading_1 {
  id: string;
  type: notionBlockQueryTypes;
  content: {
    rich_text: richText[];
  };
}

export interface notionHeading_2 {
  id: string;
  type: notionBlockQueryTypes;
  content: {
    rich_text: richText[];
  };
}

export interface notionHeading_3 {
  id: string;
  type: notionBlockQueryTypes;
  content: {
    rich_text: richText[];
  };
}

export interface notionQuote {
  id: string;
  type: notionBlockQueryTypes;
  content: {
    rich_text: richText[];
  };
}

export interface notionCode {
  id: string;
  type: notionBlockQueryTypes;
  caption: caption[];
  content: {
    rich_text: richText[];
  };
  language: string;
}

export interface notionImage {
  id: string;
  type: notionBlockQueryTypes;
  content: {
    caption: caption[];
    rich_text: richText[];
    file: {
      url: string;
      expiry_time: Date;
    };
  };
}

export interface notionVideo {
  id: string;
  type: notionBlockQueryTypes;
  content: {
    rich_text: richText[];
  };
}

export interface notionEquation {
  id: string;
  type: notionBlockQueryTypes;
  content: {
    expression: string;
  };
}

export interface notionDivider {
  id: string;
  type: notionBlockQueryTypes;
}

type blockQueryObject =
  | notionParagraph
  | notionHeading_1
  | notionHeading_2
  | notionHeading_3
  | notionQuote
  | notionCode
  | notionImage
  | notionVideo
  | notionEquation
  | notionDivider;

export type { blockQueryObject, notionBlockQueryTypes };
