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
  'code',
  'embed',
  'image',
  'video',
  'file',
  'bookmark',
  'equation',
  'divider',
  'table',
]);

type blockQueryTypes = z.infer<typeof blockQueryEnum>;

interface paragraph {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface heading_1 {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface heading_2 {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface heading_3 {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface callout {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface quote {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface bulleted_list_item {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface numbered_list_item {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface code {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface embed {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface image {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface video {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface file {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface bookmark {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface equation {
  id: string;
  type: blockQueryTypes;
  content: object;
}

interface divider {
  id: string;
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
  | code
  | embed
  | image
  | video
  | file
  | bookmark
  | equation
  | divider;

export type { blockQueryObject, blockQueryTypes };
