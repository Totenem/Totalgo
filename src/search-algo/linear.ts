export function Linear<T>(list: T[], target: T, comapreFN:(a: T,b: T) => number = (a,b) => (a < b ? - 1: a > b? 1 : 0)):  number{
    const c_list = structuredClone(list)
    const list_length = c_list.length

    for(let i = 0; i < list_length; i++){
        if( comapreFN(c_list[i], target)=== 0){
            return i
        }
    }

    return -1
}