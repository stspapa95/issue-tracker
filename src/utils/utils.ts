var pluralize = require("pluralize");

export function timeAgo(date: Date) {
  const now = new Date();
  const givenDate = new Date(date);
  // @ts-ignore
  const diffMilliseconds = now - givenDate;
  const diffMinutes = diffMilliseconds / (1000 * 60);

  if (diffMinutes < 60)
    return `${Math.floor(diffMinutes)} ${pluralize(
      "minutes",
      Math.floor(diffMinutes),
    )} ago`;
  else
    return `${Math.floor(diffMinutes / 60)} ${pluralize(
      "hours",
      Math.floor(diffMinutes / 60),
    )} ago`;
}
