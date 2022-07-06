// To test out arbitrary code, start up a Node environment in the terminal ($ node). You can paste or type javascript there and it'll execute.
// Alternatively, run a whole file and see output with $ node week1-sandbox.js

function findItemByKeyValue(itemsArr, key, value){
  const theItem = itemsArr.find(element => element[key] === value)
  return theItem
}

function removeItemByKeyValue(itemsArr, key, value){
  const theIndex = itemsArr.findIndex(element => element[key] === value)
  const theItem = itemsArr.splice(theIndex, 1)
  return theItem
}

// Test
const thisArr = [{name: 'Gunter', id: '321'}, {name: 'Elias', id: '903'}]
findItemByKeyValue(thisArr, "name", "Elias")
removeItemByKeyValue(thisArr, "name", "Gunter")