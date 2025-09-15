import { Quick } from "../../src/sorting-algo/quick";

describe("Quick Sort", () => {
  // Numbers
  test("Empty array", () => {
    expect(Quick([])).toEqual([]);
  });

  test("Single element", () => {
    expect(Quick([5])).toEqual([5]);
  });

  test("Already sorted numbers", () => {
    expect(Quick([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Reverse sorted numbers", () => {
    expect(Quick([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Random order numbers", () => {
    expect(Quick([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64]);
  });

  test("Numbers with duplicates", () => {
    expect(Quick([3, 5, 3, 2, 2, 1])).toEqual([1, 2, 2, 3, 3, 5]);
  });

  test("All identical numbers", () => {
    expect(Quick([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
  });

  test("Negative numbers", () => {
    expect(Quick([-3, -1, -7, -4, -5])).toEqual([-7, -5, -4, -3, -1]);
  });

  test("Mixed positive and negative numbers", () => {
    expect(Quick([3, -2, -5, 0, 7, -1])).toEqual([-5, -2, -1, 0, 3, 7]);
  });

  test("Large numbers", () => {
    expect(Quick([1000, 500, 100000, 250, 750])).toEqual([250, 500, 750, 1000, 100000]);
  });

  // Floats
  test("Floating point numbers", () => {
    expect(Quick([3.2, 1.5, 4.8, 2.1])).toEqual([1.5, 2.1, 3.2, 4.8]);
  });

  test("Mixed integers and floats", () => {
    expect(Quick([3, 1.2, 4.5, 2, 0.8])).toEqual([0.8, 1.2, 2, 3, 4.5]);
  });

  // Strings
  test("Strings alphabetical order", () => {
    expect(Quick(["banana", "apple", "cherry"])).toEqual(["apple", "banana", "cherry"]);
  });

  test("Already sorted strings", () => {
    expect(Quick(["a", "b", "c", "d"])).toEqual(["a", "b", "c", "d"]);
  });

  test("Strings with upper & lower case", () => {
    expect(Quick(["apple", "Banana", "cherry"])).toEqual(["Banana", "apple", "cherry"]);
  });

  // Booleans
  test("Booleans only", () => {
    expect(Quick([true, false, true, false])).toEqual([false, false, true, true]);
  });

  it("should sort numbers in ascending order", () => {
    expect(Quick([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
  });

  it("should sort strings alphabetically", () => {
    expect(Quick(["banana", "apple", "cherry"])).toEqual([
      "apple",
      "banana",
      "cherry",
    ]);
  });

  it("should sort booleans (false before true)", () => {
    expect(Quick([true, false, true, false])).toEqual([
      false,
      false,
      true,
      true,
    ]);
  });

  it("should sort objects by numeric property", () => {
    const arr = [
      { id: 3, name: "Charlie" },
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const sorted = Quick(arr, (a, b) => a.id - b.id);
    expect(sorted.map((x) => x.id)).toEqual([1, 2, 3]);
  });

  it("should sort objects by string property", () => {
    const arr = [
      { id: 1, name: "Charlie" },
      { id: 2, name: "Alice" },
      { id: 3, name: "Bob" },
    ];
    const sorted = Quick(arr, (a, b) => a.name.localeCompare(b.name));
    expect(sorted.map((x) => x.name)).toEqual(["Alice", "Bob", "Charlie"]);
  });

  it("should handle mixed-type array (numbers, strings)", () => {
    const arr: (number | string)[] = [5, "apple", 2, "banana"];
    const sorted = Quick(arr, (a, b) =>
      a.toString().localeCompare(b.toString())
    );
    expect(sorted).toEqual([2, 5, "apple", "banana"]);
  });
});
