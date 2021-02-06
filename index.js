// Code your solution here
function findMatching(drivers, string){
    let match = drivers.filter(d =>  d.toLowerCase() === string.toLowerCase())
    return !!match ? match : []
}

function fuzzyMatch(drivers, string){
    return drivers.filter(match => match.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

function matchName(drivers, string){
    return drivers.filter(match => match.name.toLowerCase() === string.toLowerCase())
}