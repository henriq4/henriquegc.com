export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function byDate<T extends { data: { date: Date } }>(a: T, b: T) {
  return b.data.date.valueOf() - a.data.date.valueOf();
}
