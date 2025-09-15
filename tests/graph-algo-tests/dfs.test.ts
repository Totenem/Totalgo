import { DFS } from '../../src/graph-algo/dfs'

describe("DFS - Depth First Search", () => {
  it("should find a target in a simple graph", () => {
    const graph = new Map<string, string[]>([
      ["A", ["B", "C"]],
      ["B", ["D"]],
      ["C", []],
      ["D", []],
    ]);

    expect(DFS(graph, "A", "D")).toBe("D");
  });

  it("should return null if target not found", () => {
    const graph = new Map<string, string[]>([
      ["A", ["B"]],
      ["B", []],
    ]);

    expect(DFS(graph, "A", "Z")).toBeNull();
  });

  it("should handle graph with cycles", () => {
    const graph = new Map<string, string[]>([
      ["A", ["B"]],
      ["B", ["C"]],
      ["C", ["A"]], // cycle
    ]);

    expect(DFS(graph, "A", "C")).toBe("C");
  });

  it("should work with numbers as nodes", () => {
    const graph = new Map<number, number[]>([
      [1, [2, 3]],
      [2, [4]],
      [3, []],
      [4, []],
    ]);

    expect(DFS(graph, 1, 4)).toBe(4);
  });

  it("should respect custom compare function (case-insensitive strings)", () => {
    const graph = new Map<string, string[]>([
      ["a", ["b"]],
      ["b", ["c"]],
      ["c", []],
    ]);

    const caseInsensitiveCompare = (a: string, b: string) =>
      a.toLowerCase().localeCompare(b.toLowerCase());

    expect(DFS(graph, "a", "C", caseInsensitiveCompare)).toBe("c");
  });

  it("should return start if start equals target", () => {
    const graph = new Map<string, string[]>([
      ["X", ["Y"]],
      ["Y", []],
    ]);

    expect(DFS(graph, "X", "X")).toBe("X");
  });

  it("should explore deeply before breadth (DFS property)", () => {
    const graph = new Map<string, string[]>([
      ["A", ["B", "C"]],
      ["B", ["D"]],
      ["C", ["E"]],
      ["D", []],
      ["E", []],
    ]);

    // DFS order (with stack and reversed neighbors): A -> B -> D
    expect(DFS(graph, "A", "D")).toBe("D");
    // If looking for "E", DFS explores A->B->D before C->E
    expect(DFS(graph, "A", "E")).toBe("E");
  });
});