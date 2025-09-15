import { BFS } from "./graph-algo/bfs";
import { DFS } from "./graph-algo/dfs";
import { Dijkstra } from "./graph-algo/dijkstra";

import { Binary } from "./search-algo/binary";
import { Linear } from "./search-algo/linear";

import { Bubble } from "./sorting-algo/bubble";
import { Insertion } from "./sorting-algo/inerstion";
import { Merge } from "./sorting-algo/merge";
import { Quick } from "./sorting-algo/quick";
import { Selection } from "./sorting-algo/selection";

// Backward-compat: provide correctly spelled alias

// Re-export named APIs
export { BFS, DFS, Dijkstra, Binary, Linear, Bubble, Insertion, Merge, Quick, Selection };

// Aggregate default-like namespace if consumers prefer `Totalgo.Sorting.Bubble` style
export const Graph = { BFS, DFS, Dijkstra };
export const Search = { Binary, Linear };
export const Sorting = { Bubble, Insertion, Merge, Quick, Selection };

// Composite namespace export for convenience imports
export const Totalgo = { Graph, Search, Sorting };

