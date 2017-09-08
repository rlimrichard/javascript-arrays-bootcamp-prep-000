var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element)
{
    //const toto = array
    //toto.unshift(element)
    return [element, ...array];
}


function destructivelyAddElementToBeginningOfArray (array, element)
{
    array.push(element)
    return array
}

function accessElementInArray (array, index)
{
    return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array)
{
    return array.shift()
}

function removeElementFromBeginningOfArray (array)
{
    return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array)
{
    return arry.pop()
}

function removeElementFromEndOfArray (array)
{
    return array.slice (0, array.length-1)
}
