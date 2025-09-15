import { BFS } from '../../src/graph-algo/bfs'

describe("BFS - Breadth First Search", () => {
  it("should find a target in a simple graph", () => {
    const graph = new Map<string, string[]>([
      ["A", ["B", "C"]],
      ["B", ["D"]],
      ["C", []],
      ["D", []],
    ]);

    expect(BFS(graph, "A", "D")).toBe("D");
  });

  it("should return null if target not found", () => {
    const graph = new Map<string, string[]>([
      ["A", ["B"]],
      ["B", []],
    ]);

    expect(BFS(graph, "A", "Z")).toBeNull();
  });

  it("should handle graph with cycles", () => {
    const graph = new Map<string, string[]>([
      ["A", ["B"]],
      ["B", ["C"]],
      ["C", ["A"]], // cycle
    ]);

    expect(BFS(graph, "A", "C")).toBe("C");
  });

  it("should work with numbers as nodes", () => {
    const graph = new Map<number, number[]>([
      [1, [2, 3]],
      [2, [4]],
      [3, []],
      [4, []],
    ]);

    expect(BFS(graph, 1, 4)).toBe(4);
  });

  it("should respect custom compare function (case-insensitive strings)", () => {
    const graph = new Map<string, string[]>([
      ["a", ["b"]],
      ["b", ["c"]],
      ["c", []],
    ]);

    const caseInsensitiveCompare = (a: string, b: string) =>
      a.toLowerCase().localeCompare(b.toLowerCase());

    expect(BFS(graph, "a", "C", caseInsensitiveCompare)).toBe("c");
  });

  it("should return start if start equals target", () => {
    const graph = new Map<string, string[]>([
      ["X", ["Y"]],
      ["Y", []],
    ]);

    expect(BFS(graph, "X", "X")).toBe("X");
  });

  it("should explore breadth-first (BFS property)", () => {
    const graph = new Map<string, string[]>([
      ["A", ["B", "C"]],
      ["B", ["D"]],
      ["C", ["E"]],
      ["D", []],
      ["E", []],
    ]);

    // BFS explores level by level: A -> B, C -> D, E
    expect(BFS(graph, "A", "D")).toBe("D");
    expect(BFS(graph, "A", "E")).toBe("E");
  });

  it("should return null if target is in a disconnected component", () => {
    const graph = new Map<string, string[]>([
      ["A", ["B"]],
      ["B", []],
      ["X", ["Y"]],
      ["Y", []],
    ]);

    expect(BFS(graph, "A", "Y")).toBeNull();
  });
});