export function DFS<T>( graph: Map<T, T[]>, start: T, target: T, compareFN: (a: T, b: T) => number = (a, b) => a < b ? -1 : a > b ? 1 : 0): T | null{
    let stack: T[] = []
    let visited = new Set<T>()

    stack.push(start)

    while( stack.length > 0 ){
        let current = stack.pop()!

        if( visited.has(current)){
            continue
        }

        visited.add(current)

        if ( compareFN(current, target) === 0){
            return current
        }

        let neighbors = graph.get(current) || []

        for( let neighbor of [...neighbors].reverse()){
            if(!visited.has(neighbor)){
                stack.push(neighbor)
            }
        }
    }

    return null
}