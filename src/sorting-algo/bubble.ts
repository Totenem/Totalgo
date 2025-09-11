export function BubbleSort<T>(list: T[], comapreFN:(a: T,b: T) => number = (a,b) => (a < b ? - 1: a > b? 1 : 0)):  T[]{
    let copy_list = structuredClone(list)
    let list_length = copy_list.length 

    for(let i = 0; i < list_length - 1; i++){ // starting pointer
        for (let j = 0; j < list_length - i - 1; j++){ // moving pointer
            if (comapreFN(copy_list[j],  copy_list[j+1]) > 0){ // if left element is greater than right element
                [copy_list[j], copy_list[j+1]] = [copy_list[j+1], copy_list[j]] // SWAPPED
            }
        }
    }

    return copy_list
}