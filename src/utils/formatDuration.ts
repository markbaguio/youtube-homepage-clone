/**
 * LEADING_ZERO_FORMATTER will ensure that the duration will always have 2 digits
 * ex. if duration is 9 seconds it will display 0:09 instead of just 9.
 */

const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});

export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 60 / 60);
  const minutes = Math.floor((duration - hours * 60 * 60) / 60);
  const seconds = duration % 60;

  if (hours > 0) {
    return `${hours}:${LEADING_ZERO_FORMATTER.format(
      minutes
    )}:${LEADING_ZERO_FORMATTER.format(seconds)}`;
  }

  return `${minutes}:${LEADING_ZERO_FORMATTER.format(seconds)}`;
}
