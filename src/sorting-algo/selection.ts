export function Selection<T>(list: T[], comapreFN:(a: T,b: T) => number = (a,b) => (a < b ? - 1: a > b? 1 : 0)):  T[]{
    let clone_List = structuredClone(list)

    //get list length
    let list_length = list.length

    for(let i = 0; i < list_length-1; i++){
        // current pos hold  minum element
        let minimum = i

        //go through the list to find the new minum
        for(let j = i + 1; j < list_length; j++){
            if(comapreFN(clone_List[j], clone_List[minimum]) < 0){
                minimum = j // update teh current minum
            }
        }

        // move new minum element to the correct position
        let starting_pos = clone_List[i]
        clone_List[i] = clone_List[minimum]
        clone_List[minimum] = starting_pos


    }

    return clone_List
}