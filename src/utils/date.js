export default function date() {
  const date = new Date();
  date.setHours(date.getHours() + 9);
  return date.toISOString().replace('T', ' ').substring(0, 19);
}
