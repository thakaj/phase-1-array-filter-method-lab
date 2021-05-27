function findMatching(collection,name){
    return collection.filter((driver)=> name.toUpperCase()===driver.toUpperCase())
}




function fuzzyMatch(collection, name){
    return collection.filter((driver)=> driver.startsWith(name))
}

function matchName(collection, name){
    return collection.filter((driver)=> name===driver.name)
}