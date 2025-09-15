import { Binary } from '../../src/search-algo/binary'

describe("Binary Search - Generalized", () => {
  it("should find element in sorted number array", () => {
    expect(Binary([1, 2, 3, 4, 5, 6, 7], 4)).toBe(3); // index of 4
  });

  it("should return -1 when number not found", () => {
    expect(Binary([1, 2, 3, 4, 5], 10)).toBe(-1);
  });

  it("should find string in sorted string array", () => {
    expect(Binary(["apple", "banana", "cherry", "date"], "cherry")).toBe(2);
  });

  it("should return -1 when string not found", () => {
    expect(Binary(["apple", "banana", "cherry"], "zebra")).toBe(-1);
  });

  it("should find boolean in sorted boolean array", () => {
    expect(Binary([false, false, true, true], true)).toBe(2); // first `true`
  });

  it("should find object by numeric property", () => {
    const arr = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    const compareById = (a: typeof arr[0], b: typeof arr[0]) => a.id - b.id;
    const target = { id: 2, name: "?" };

    expect(Binary(arr, target, compareById)).toBe(1);
  });

  it("should find object by string property", () => {
    const arr = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    const compareByName = (a: typeof arr[0], b: typeof arr[0]) =>
      a.name.localeCompare(b.name);
    const target = { id: -1, name: "Charlie" };

    expect(Binary(arr, target, compareByName)).toBe(2);
  });

  it("should work with mixed-type array (numbers + strings)", () => {
    const arr: (number | string)[] = [1, 2, "apple", "banana"];
    const compareMixed = (a: number | string, b: number | string) =>
      a.toString().localeCompare(b.toString());

    expect(Binary(arr, "banana", compareMixed)).toBe(3);
    expect(Binary(arr, 2, compareMixed)).toBe(1);
  });
});