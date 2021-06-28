// Code your solution in this file!
function distanceFromHqInBlocks(streetLocation) {
    if (streetLocation < 42) {
        return (streetLocation - 42) * -1
    } else return (streetLocation - 42)
}

function distanceFromHqInFeet(streetLocation) {
    let blockNumber = distanceFromHqInBlocks(streetLocation)
    return blockNumber * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) 
    return (destination - start) * 264
    if (start > destination)
    return (start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400)
    return 0
    if (distanceTravelledInFeet(start, destination) < 2000)
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    if (distanceTravelledInFeet(start, destination) > 2500)
    return "cannot travel that far"
    if (distanceTravelledInFeet(start, destination) > 2000)
    return 25
}