import { z } from 'zod';

const blockQueryEnum = z.enum([
  'paragraph',
  'heading_1',
  'heading_2',
  'heading_3',
  'callout',
  'quote',
  'bulleted_list_item',
  'numbered_list_item',
  'to_do',
  'toggle',
  'code',
  'embed',
  'image',
  'video',
  'file',
  'pdf',
  'bookmark',
  'equation',
  'divider',
  'table',
]);

type blockQueryTypes = z.infer<typeof blockQueryEnum>;

interface paragraph {
  type: blockQueryTypes;
  content: object;
}

interface heading_1 {
  type: blockQueryTypes;
  content: object;
}

interface heading_2 {
  type: blockQueryTypes;
  content: object;
}

interface heading_3 {
  type: blockQueryTypes;
  content: object;
}

interface callout {
  type: blockQueryTypes;
  content: object;
}

interface quote {
  type: blockQueryTypes;
  content: object;
}

interface bulleted_list_item {
  type: blockQueryTypes;
  content: object;
}

interface numbered_list_item {
  type: blockQueryTypes;
  content: object;
}

interface to_do {
  type: blockQueryTypes;
  content: object;
}

interface toggle {
  type: blockQueryTypes;
  content: object;
}

interface code {
  type: blockQueryTypes;
  content: object;
}

interface embed {
  type: blockQueryTypes;
  content: object;
}

interface image {
  type: blockQueryTypes;
  content: object;
}

interface video {
  type: blockQueryTypes;
  content: object;
}

interface file {
  type: blockQueryTypes;
  content: object;
}

interface pdf {
  type: blockQueryTypes;
  content: object;
}

interface bookmark {
  type: blockQueryTypes;
  content: object;
}

interface equation {
  type: blockQueryTypes;
  content: object;
}

interface divider {
  type: blockQueryTypes;
  content: object;
}

interface table {
  type: blockQueryTypes;
  content: object;
}

type blockQueryObject =
  | paragraph
  | heading_1
  | heading_2
  | heading_3
  | callout
  | quote
  | bulleted_list_item
  | numbered_list_item
  | to_do
  | toggle
  | code
  | embed
  | image
  | video
  | file
  | pdf
  | bookmark
  | equation
  | divider
  | table;

export type { blockQueryObject, blockQueryTypes };
