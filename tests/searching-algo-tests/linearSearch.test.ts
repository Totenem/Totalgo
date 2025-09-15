import { Linear } from "../../src/search-algo/linear";

describe("Linear Search", () => {
  // Numbers
  test("Empty array", () => {
    expect(Linear([], 5)).toBe(-1);
  });

  test("Single element found", () => {
    expect(Linear([5], 5)).toBe(0);
  });

  test("Single element not found", () => {
    expect(Linear([5], 10)).toBe(-1);
  });

  test("Find first occurrence in numbers", () => {
    expect(Linear([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test("Find element at start", () => {
    expect(Linear([10, 20, 30, 40], 10)).toBe(0);
  });

  test("Find element at end", () => {
    expect(Linear([10, 20, 30, 40], 40)).toBe(3);
  });

  test("Not found in numbers", () => {
    expect(Linear([1, 2, 3, 4, 5], 10)).toBe(-1);
  });

  test("With duplicates returns first index", () => {
    expect(Linear([2, 4, 4, 4, 5], 4)).toBe(1);
  });

  test("Negative numbers", () => {
    expect(Linear([-5, -3, -1, 0], -3)).toBe(1);
  });

  // Strings
  test("Find string", () => {
    expect(Linear(["apple", "banana", "cherry"], "banana")).toBe(1);
  });

  test("String not found", () => {
    expect(Linear(["apple", "banana", "cherry"], "grape")).toBe(-1);
  });

  test("Case-sensitive search", () => {
    expect(Linear(["apple", "Banana", "cherry"], "banana")).toBe(-1);
  });

  // Booleans
  test("Find boolean true", () => {
    expect(Linear([false, true, false], true)).toBe(1);
  });

  test("Find boolean false", () => {
    expect(Linear([true, false, true], false)).toBe(1);
  });

  // Objects
  it("should find object by numeric property", () => {
    const arr = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    const index = Linear(arr, { id: 2, name: "Bob" }, (a, b) => a.id - b.id);
    expect(index).toBe(1);
  });

  it("should find object by string property", () => {
    const arr = [
      { id: 1, name: "Charlie" },
      { id: 2, name: "Alice" },
      { id: 3, name: "Bob" },
    ];
    const index = Linear(arr, { id: 3, name: "Bob" }, (a, b) =>
      a.name.localeCompare(b.name)
    );
    expect(index).toBe(2);
  });

  // Mixed Types
  it("should find element in mixed array", () => {
    const arr: (number | string)[] = [1, "apple", 2, "banana"];
    const index = Linear(arr, "banana", (a, b) =>
      a.toString().localeCompare(b.toString())
    );
    expect(index).toBe(3);
  });
});
