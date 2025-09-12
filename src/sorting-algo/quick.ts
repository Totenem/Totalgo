export function Quick<T>(list: T[], comapreFN:(a: T,b: T) => number = (a,b) => (a < b ? - 1: a > b? 1 : 0), low: number = 0, high: number = list.length - 1):  T[]{
    function Helper<T>(list: T[], comapreFN:(a: T,b: T) => number = (a,b) => (a < b ? - 1: a > b? 1 : 0), low: number, high: number):  number{
        let pivot = list[high]

        let i = low - 1

        for (let j = low; j < high; j++){
            if (comapreFN(list[j], pivot) <= 0){
                i = i + 1

                // how to swap properly two indexes
                let temp = list[i]
                list[i] = list[j]
                list[j]= temp
            }
        }

        let temp = list[i + 1]
        list[i + 1] = list[high]
        list[high] = temp
        return i + 1
    }

    if(low < high){
        let pivotIndex = Helper(list, comapreFN, low, high)

        Quick(list, comapreFN, low, pivotIndex -1)
        Quick(list, comapreFN, pivotIndex + 1, high)
    }

    return list

}