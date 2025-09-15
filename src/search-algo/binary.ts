export function Binary<T>(list: T[], target: T, comapreFN:(a: T,b: T) => number = (a,b) => (a < b ? - 1: a > b? 1 : 0)):  number{
    const c_list = structuredClone(list)

    let left = 0
    let right = c_list.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        let comparison = comapreFN(c_list[mid], target)

        if (comparison === 0){
            return mid
        } else if(comparison < 0){
            left = mid + 1
        } else{
            right = mid - 1
        }
    }

    return -1

}