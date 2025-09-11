export function Insertion<T>(list: T[], comapreFN:(a: T,b: T) => number = (a,b) => (a < b ? - 1: a > b? 1 : 0)):  T[]{
    let clone_list = structuredClone(list)

    //get list length
    let list_length = list.length

    for(let i = 1; i < list_length; i++){
        let key = clone_list[i]

        let j = i -1

        while (j >= 0 && comapreFN(clone_list[j], key)>0){
            clone_list[j + 1] = clone_list[j]
            j-= 1
        }
        
        clone_list[j + 1] = key
    }

    return clone_list

    
}