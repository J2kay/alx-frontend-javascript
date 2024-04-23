export default function appendToEachArrayValue(array, appendString) {
  const newArray = array;
  for (const x of array) {
    const idx = array.indexOf(x);
    newArray[idx] = appendString + x;
  }

  return newArray;
}
