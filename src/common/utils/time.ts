const HOUR_SECONDS = 3600;
export const MINUTES_SECONDS = 60;

export function timeToSeconds(time: string) {

  const [hours = '0', minutes = '0', seconds = '0'] = time.split(':');

  const hoursInSeconds = Number(hours) * HOUR_SECONDS;
  const minutesInSeconds = Number(minutes) * MINUTES_SECONDS;

  return hoursInSeconds + minutesInSeconds + Number(seconds);
}