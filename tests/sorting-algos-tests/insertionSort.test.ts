import { Insertion } from "../../src/sorting-algo/inerstion";

describe("Insertion Sort", () => {
  // Numbers
  test("Empty array", () => {
    expect(Insertion([])).toEqual([]);
  });

  test("Single element", () => {
    expect(Insertion([5])).toEqual([5]);
  });

  test("Already sorted numbers", () => {
    expect(Insertion([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Reverse sorted numbers", () => {
    expect(Insertion([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Random order numbers", () => {
    expect(Insertion([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64]);
  });

  test("Numbers with duplicates", () => {
    expect(Insertion([3, 5, 3, 2, 2, 1])).toEqual([1, 2, 2, 3, 3, 5]);
  });

  test("All identical numbers", () => {
    expect(Insertion([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
  });

  test("Negative numbers", () => {
    expect(Insertion([-3, -1, -7, -4, -5])).toEqual([-7, -5, -4, -3, -1]);
  });

  test("Mixed positive and negative numbers", () => {
    expect(Insertion([3, -2, -5, 0, 7, -1])).toEqual([-5, -2, -1, 0, 3, 7]);
  });

  test("Large numbers", () => {
    expect(Insertion([1000, 500, 100000, 250, 750])).toEqual([250, 500, 750, 1000, 100000]);
  });

  // Floats
  test("Floating point numbers", () => {
    expect(Insertion([3.2, 1.5, 4.8, 2.1])).toEqual([1.5, 2.1, 3.2, 4.8]);
  });

  test("Mixed integers and floats", () => {
    expect(Insertion([3, 1.2, 4.5, 2, 0.8])).toEqual([0.8, 1.2, 2, 3, 4.5]);
  });

  // Strings
  test("Strings alphabetical order", () => {
    expect(Insertion(["banana", "apple", "cherry"])).toEqual(["apple", "banana", "cherry"]);
  });

  test("Already sorted strings", () => {
    expect(Insertion(["a", "b", "c", "d"])).toEqual(["a", "b", "c", "d"]);
  });

  test("Strings with upper & lower case", () => {
    expect(Insertion(["apple", "Banana", "cherry"])).toEqual(["Banana", "apple", "cherry"]);
  });

  // Booleans
  test("Booleans only", () => {
    expect(Insertion([true, false, true, false])).toEqual([false, false, true, true]);
  });

  it("should sort numbers in ascending order", () => {
    expect(Insertion([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
  });

  it("should sort strings alphabetically", () => {
    expect(Insertion(["banana", "apple", "cherry"])).toEqual([
      "apple",
      "banana",
      "cherry",
    ]);
  });

  it("should sort booleans (false before true)", () => {
    expect(Insertion([true, false, true, false])).toEqual([
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
    const sorted = Insertion(arr, (a, b) => a.id - b.id);
    expect(sorted.map((x) => x.id)).toEqual([1, 2, 3]);
  });

  it("should sort objects by string property", () => {
    const arr = [
      { id: 1, name: "Charlie" },
      { id: 2, name: "Alice" },
      { id: 3, name: "Bob" },
    ];
    const sorted = Insertion(arr, (a, b) => a.name.localeCompare(b.name));
    expect(sorted.map((x) => x.name)).toEqual(["Alice", "Bob", "Charlie"]);
  });

  it("should handle mixed-type array (numbers, strings)", () => {
    const arr: (number | string)[] = [5, "apple", 2, "banana"];
    const sorted = Insertion(arr, (a, b) =>
      a.toString().localeCompare(b.toString())
    );
    expect(sorted).toEqual([2, 5, "apple", "banana"]);
  });
});
