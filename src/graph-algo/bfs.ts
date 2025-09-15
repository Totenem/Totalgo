export function BFS<T>( graph: Map<T, T[]>, start: T, target: T, compareFN: (a: T, b: T) => number = (a, b) => a < b ? -1 : a > b ? 1 : 0): T | null {
    let queue: T[]= []
    let visited = new Set<T>()

    queue.push(start)
    visited.add(start)

    while (queue.length > 0){
        let current = queue.shift()! 

        if (compareFN(current, target) === 0){
            return current
        }


        let neighbors = graph.get(current) || []

        for(let neighbor of neighbors){
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }

    return null
}