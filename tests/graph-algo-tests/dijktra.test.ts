import { Dijkstra } from "../../src/graph-algo/dijkstra";

describe("Dijkstra's Algorithm", () => {
  it("should calculate shortest paths in a simple graph", () => {
    const graph = new Map<string, { node: string; weight: number }[]>([
      ["A", [{ node: "B", weight: 1 }, { node: "C", weight: 4 }]],
      ["B", [{ node: "C", weight: 2 }, { node: "D", weight: 5 }]],
      ["C", [{ node: "D", weight: 1 }]],
      ["D", []],
    ]);

    const distances = Dijkstra(graph, "A");

    expect(distances.get("A")).toBe(0);
    expect(distances.get("B")).toBe(1);
    expect(distances.get("C")).toBe(3);
    expect(distances.get("D")).toBe(4);
  });

  it("should return Infinity for unreachable nodes", () => {
    const graph = new Map<string, { node: string; weight: number }[]>([
      ["A", [{ node: "B", weight: 2 }]],
      ["B", []],
      ["C", []], // disconnected
    ]);

    const distances = Dijkstra(graph, "A");

    expect(distances.get("A")).toBe(0);
    expect(distances.get("B")).toBe(2);
    expect(distances.get("C")).toBe(Infinity); // unreachable
  });

  it("should handle graph with a single node", () => {
    const graph = new Map<string, { node: string; weight: number }[]>([
      ["X", []],
    ]);

    const distances = Dijkstra(graph, "X");

    expect(distances.get("X")).toBe(0);
  });

  it("should work with numbers as nodes", () => {
    const graph = new Map<number, { node: number; weight: number }[]>([
      [1, [{ node: 2, weight: 7 }, { node: 3, weight: 9 }]],
      [2, [{ node: 4, weight: 15 }]],
      [3, [{ node: 4, weight: 10 }]],
      [4, []],
    ]);

    const distances = Dijkstra(graph, 1);

    expect(distances.get(1)).toBe(0);
    expect(distances.get(2)).toBe(7);
    expect(distances.get(3)).toBe(9);
    expect(distances.get(4)).toBe(19); // 1 -> 3 -> 4
  });

  it("should prefer shorter path over direct longer path", () => {
    const graph = new Map<string, { node: string; weight: number }[]>([
      ["A", [{ node: "B", weight: 10 }, { node: "C", weight: 1 }]],
      ["B", [{ node: "D", weight: 1 }]],
      ["C", [{ node: "B", weight: 1 }]],
      ["D", []],
    ]);

    const distances = Dijkstra(graph, "A");

    expect(distances.get("A")).toBe(0);
    expect(distances.get("C")).toBe(1);
    expect(distances.get("B")).toBe(2); // via C instead of direct A->B
    expect(distances.get("D")).toBe(3);
  });
});
