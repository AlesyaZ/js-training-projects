export default function getDateWeek(date = new Date()) {
  return new Date(date).getDay();
}
