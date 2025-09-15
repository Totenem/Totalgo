export function Dijktra<T>( graph: Map<T, { node: T, weight: number}[]>, start: T): Map<T, number>{
    let distances = new Map<T, number>()
    let visisted = new Set<T>()

    for(let node of graph.keys()){
        distances.set(node, Infinity)
    }

    distances.set(start, 0)

    while (visisted.size < graph.size){
        let current: T | null = null
        let min_distance = Infinity

        for(let [node, distance] of distances){
            if(!visisted.has(node) && distance < min_distance) {
                min_distance = distance
                current = node
            }
        }

        if (current === null){
            break
        }


        visisted.add(current)


        let neighbors = graph.get(current) || [];
        for (let { node: neighbor, weight } of neighbors) {
            if (!visisted.has(neighbor)) {
                let newDist = (distances.get(current) ?? Infinity) + weight;
                if (newDist < (distances.get(neighbor) ?? Infinity)) {
                    distances.set(neighbor, newDist);
                }
            }
        }
    }

    return distances
}