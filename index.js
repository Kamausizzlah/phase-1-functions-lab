// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const hqLocation = 42;
    
    let blocks;
    if (pickupLocation >= hqLocation){
        blocks = pickupLocation - hqLocation;
    } else {
        blocks = hqLocation - pickupLocation
    }
    return blocks    
}

function distanceFromHqInFeet(pickupLocation){
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination){
    let blocksTravelled;
    
    if (start >= destination){
        blocksTravelled = start - destination;
    } else {
        blocksTravelled = destination - start;
    }
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else {
        return 'cannot travel that far'
    }
}
