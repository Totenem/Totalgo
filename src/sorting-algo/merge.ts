export function Merge<T>(
  list: T[],
  compareFN: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0)
): T[] {
  let clone_List = structuredClone(list);
  let length_list = clone_List.length;

  if (length_list <= 1) {
    return clone_List;
  }

  const mid = Math.floor(length_list / 2);
  const left = clone_List.slice(0, mid);
  const right = clone_List.slice(mid);

  const sortedLeft = Merge(left, compareFN);
  const sortedRight = Merge(right, compareFN);

  return mergeHelper(sortedLeft, sortedRight, compareFN);
}

function mergeHelper<T>(
  left: T[],
  right: T[],
  compareFN: (a: T, b: T) => number
): T[] {
  let result: T[] = [];
  let i = 0,
    j = 0;

  // Compare and merge elements
  while (i < left.length && j < right.length) {
    if (compareFN(left[i], right[j]) <= 0) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Concatenate leftovers
  return result.concat(left.slice(i)).concat(right.slice(j));
}
