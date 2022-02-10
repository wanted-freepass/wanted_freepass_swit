export default function newLine(x) {
  return x.toString().replaceAll(/(\n|\r\n)/g, '\n');
}
