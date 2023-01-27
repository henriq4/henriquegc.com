import { z } from 'zod';

export const notionSecret = z.string({
  required_error: 'notion secret is required',
  invalid_type_error: 'notion secret must be a string',
});

export const notionDatabaseId = z.string({
  required_error: 'notion database id is required',
  invalid_type_error: 'notion database id must be a string',
});
