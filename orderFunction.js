// Order 1
const size1 = 14
const crust1 = "THIN"
const topping1One = "C"
const topping1OneStrength = 1
const topping1Two = "P"
const topping1TwoStrength = 1.5
const topping1Three = "H"
const topping1ThreeStrength = 1

// Order 2
const size2 = 12
const crust2 = "SCREEN"
const topping2One = "C"
const topping2OneStrength = 1.5
const topping2Two = "O"
const topping2TwoStrength = 0.5
const topping2Three = "N"
const topping2ThreeStrength = 1

const products = []


export function productFunction (size, crust, top1, top2) {
    const object = {}
    object['Code'] = `${size}${crust}`
    object['Qty'] = 1
    object['ID'] = 1
    object['isNew'] = 'true'
    object['Qty'] = 1
    object['Options'] = {}
    object['Options']['X'] = {}
    object['Options']['C'] = {}

    if (!top1 && !top2) {
        object['Options']['X']['1/1'] = 1
        object['Options']['C']['1/1'] = 1
    }
    else if (!top2) {
        object['Options']['X']['1/1'] = 1
        object['Options']['C']['1/1'] = 1
        object['Options'][`${top1}`] = {}
        object['Options'][`${top1}`]['1/1'] = 1
    }
    else {
        object['Options']['X']['1/1'] = 1
        object['Options']['C']['1/1'] = 1
        object['Options'][`${top1}`] = {}
        object['Options'][`${top1}`]['1/1'] = 1
        object['Options'][`${top2}`] = {}
        object['Options'][`${top2}`]['1/1'] = 1
    }

    return object
};

const expObject = productFunction(size1, crust1, topping1Three, topping1Two)
console.log(expObject)
// const newObject = JSON.stringify(productFunction(size1, crust1, topping1Three, topping1Two))
// console.log(newObject)



"Products\":[{\"Code\":\"14THIN\",\"Qty\":1,\"ID\":1,\"isNew\":true,\"Options\":{\"X\":{\"1/1\":\"1\"},\"C\":{\"1/1\":\"1\"},\"P\":{\"1/1\":\"1\"}}}]"