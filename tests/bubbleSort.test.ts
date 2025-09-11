import { BubbleSort } from "../src/sorting-algo/bubble";

describe("bubbleSort function", () => {
  it("should sort numbers in ascending order", () => {
    expect(BubbleSort([64, 34, 25, 12])).toEqual([12, 25, 34, 64]);
  });

  it("should handle an empty array", () => {
    expect(BubbleSort([])).toEqual([]);
  });

  it("should handle an already sorted array", () => {
    expect(BubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });
    it("should sort strings alphabetically", () => {
    expect(BubbleSort(["banana", "apple", "cherry"]))
    .toEqual(["apple", "banana", "cherry"]);
    });

    it("should sort booleans (false before true)", () => {
    expect(BubbleSort([true, false, true, false]))
        .toEqual([false, false, true, true]);
    });

    it("should handle duplicate values", () => {
    expect(BubbleSort([5, 1, 3, 3, 2]))
        .toEqual([1, 2, 3, 3, 5]);
    });
    it("should sort numbers in ascending order", () => {
    expect(BubbleSort([64, 34, 25, 12, 22, 11, 90])).toEqual([
      11, 12, 22, 25, 34, 64, 90,
    ]);
  });

  it("should sort strings alphabetically", () => {
    expect(BubbleSort(["dog", "apple", "cat"])).toEqual([
      "apple",
      "cat",
      "dog",
    ]);
  });

  it("should sort booleans (false before true)", () => {
    expect(BubbleSort([true, false, true, false])).toEqual([
      false,
      false,
      true,
      true,
    ]);
  });

  it("should sort objects by numeric property", () => {
    const arr = [
      { id: 5, name: "Eve" },
      { id: 2, name: "Bob" },
      { id: 9, name: "Ivy" },
    ];
    const sorted = BubbleSort(arr, (a, b) => a.id - b.id);
    expect(sorted.map((x) => x.id)).toEqual([2, 5, 9]);
  });

  it("should sort objects by string property", () => {
    const arr = [
      { id: 1, name: "Zara" },
      { id: 2, name: "Mike" },
      { id: 3, name: "Anna" },
    ];
    const sorted = BubbleSort(arr, (a, b) => a.name.localeCompare(b.name));
    expect(sorted.map((x) => x.name)).toEqual(["Anna", "Mike", "Zara"]);
  });

  it("should handle mixed-type array (numbers, strings)", () => {
    const arr: (number | string)[] = ["zebra", 3, "apple", 1];
    const sorted = BubbleSort(arr, (a, b) =>
      a.toString().localeCompare(b.toString())
    );
    expect(sorted).toEqual([1, 3, "apple", "zebra"]);
  });

});
