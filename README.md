<div align="center">

  <img src="./Totalgo.jpeg" alt="Totalgo" width="640" />

  <h2>Totalgo</h2>

  <p>TypeScript/JavaScript algorithms library: graph, searching, and sorting, with a clean, generic API.</p>

  
  <a href="https://www.npmjs.com/package/totalgo"><img alt="npm" src="https://img.shields.io/npm/v/totalgo?color=%2300b894&label=npm&logo=npm"></a>
  <a href="#license"><img alt="License" src="https://img.shields.io/badge/License-ISC-blue.svg"></a>
  <a href="#contributing"><img alt="PRs welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
  <img alt="Type Definitions" src="https://img.shields.io/badge/TypeScript-types-informational?logo=typescript">
  <img alt="CI" src="https://img.shields.io/badge/CI-GitHub%20Actions-grey?logo=github">

</div>

---

### What is Totalgo?

Totalgo is a small, pragmatic algorithms toolkit written in TypeScript. It provides battle‑tested implementations of:

- Graph algorithms: `BFS`, `DFS`, `Dijkstra`
- Searching algorithms: `Linear`, `Binary`
- Sorting algorithms: `Bubble`, `Insertion`, `Merge`, `Quick`, `Selection`

Every algorithm is generic over type `T` and accepts an optional comparator, so you can use them for numbers, strings, objects, and mixed types when a comparison function is provided.

Note: The package name is `totalgo`.

### Features

- TypeScript first: full `.d.ts` types generated on build
- Generic APIs with optional custom comparators
- Tree-shakeable ESM and CJS builds
- Zero runtime dependencies

---

### Installation

```bash
npm install totalgo
# or
yarn add totalgo
# or
pnpm add totalgo
```

---

### Quick start

You can import the algorithms individually or via the grouped namespaces.

```ts
// ESM
import { BFS, DFS, Dijkstra, Binary, Linear, Bubble, Insertion, Merge, Quick, Selection, Totalgo } from "totalgo";

// Example: BFS over a string graph
const graph = new Map<string, string[]>([
  ["A", ["B", "C"]],
  ["B", ["D"]],
  ["C", []],
  ["D", []],
]);

const found = BFS(graph, "A", "D"); // => "D"

// Namespaced usage
const result = Totalgo.Search.Binary([1, 2, 3, 4, 5], 4); // => 3
```

For CommonJS:

```js
const { BFS, Totalgo } = require("totalgo");
```

---

### API overview

All algorithms are generic over `T` and accept an optional comparator `(a: T, b: T) => number`. Default comparator uses natural ordering where applicable.

- Graph
  - `BFS<T>(graph: Map<T, T[]>, start: T, target: T, compareFN?) => T | null`
  - `DFS<T>(graph: Map<T, T[]>, start: T, target: T, compareFN?) => T | null`
  - `Dijktra<T>(graph: Map<T, { node: T; weight: number }[]>, start: T) => Map<T, number>`

- Searching
  - `Linear<T>(list: T[], target: T, compareFN?) => number` (index or `-1`)
  - `Binary<T>(list: T[], target: T, compareFN?) => number` (index or `-1`)

- Sorting
  - `Bubble<T>(list: T[], compareFN?) => T[]`
  - `Insertion<T>(list: T[], compareFN?) => T[]`
  - `Merge<T>(list: T[], compareFN?) => T[]`
  - `Quick<T>(list: T[], compareFN?, low?, high?) => T[]`
  - `Selection<T>(list: T[], compareFN?) => T[]`

Grouped namespaces also exported:

```ts
import { Totalgo, Graph, Search, Sorting } from "totalgo";
// Graph.BFS, Search.Binary, Sorting.Merge, etc.
```

---

### Project structure

```text
src/
  graph-algo/
    bfs.ts, dfs.ts, dijkstra.ts
  search-algo/
    linear.ts, binary.ts
  sorting-algo/
    bubble.ts, inerstion.ts, merge.ts, quick.ts, selection.ts
  index.ts  // public exports
tests/
  ...jest test suites for each algorithm
```

Build and config:

- `typescript`: source is in `src/`
- `tsup`: bundles to CJS + ESM and emits types
- `jest`: unit tests

---

### Development

Prerequisites: Node 18+ recommended.

Common scripts:

```bash
# run tests
npm test

# build CJS/ESM + types to dist/
npm run build
```

Entry points defined in `package.json`:

- `main`: `dist/index.cjs`
- `module`: `dist/index.js`
- `types`: `dist/index.d.ts`

Ensure `src/index.ts` re-exports your public API (already configured).

---

### Usage examples

```ts
// Binary search with custom comparator on objects
type User = { id: number; name: string };
const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const byId = (a: User, b: User) => a.id - b.id;
const idx = Binary(users, { id: 2, name: "?" }, byId); // => 1
```

```ts
// Dijkstra distances from start
const g = new Map<string, { node: string; weight: number }[]>([
  ["A", [{ node: "B", weight: 1 }, { node: "C", weight: 4 }]],
  ["B", [{ node: "C", weight: 2 }, { node: "D", weight: 5 }]],
  ["C", [{ node: "D", weight: 1 }]],
  ["D", []],
]);

const dists = Dijkstra(g, "A");
// dists.get("D") === 4
```

---

### Contributing

We welcome contributions of all sizes: new algorithms, docs, tests, and improvements.

1. Fork the repository and create a feature branch
   - Branch naming: `feat/algorithm-name`, `fix/bug-topic`, or `docs/section`
2. Add your algorithm or change
   - Place code under the appropriate folder in `src/`
   - Export it from `src/index.ts`
   - Add tests in `tests/` mirroring existing structure
3. Ensure quality
   - `npm test` must pass
   - Add or update JSDoc where the API is non-trivial
4. Update documentation
   - If you add a new public export, update this README's API overview
5. Commit and open a Pull Request
   - Use clear, conventional commit messages when possible
   - Describe the change, rationale, and any tradeoffs

Code style guidelines:

- Keep functions small and easy to read
- Prefer early returns and minimal nesting
- Add concise comments for non-obvious logic

Security and performance:

- Avoid mutating input collections unless clearly documented
- Prefer `structuredClone` or shallow copies where needed

---

### Roadmap ideas

- More graph algorithms: A*, Bellman–Ford, Floyd–Warshall
- Additional data structures: Heap, PriorityQueue, Union-Find
- String algorithms: KMP, Rabin–Karp, Trie utilities

If you want to take any of these, please open an issue to discuss.

---

### FAQ

- Does Binary search require a sorted array?
  - Yes. Ensure the input is sorted according to the comparator semantics.

---

### License

ISC © Contributors. See the [LICENSE](#) or `package.json`.


