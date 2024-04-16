/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  spentsByCategory = [];
  categoriesDone = [];
  for (let i = 0; i < transactions.length; i++) {
    const indexOfCategory = categoriesDone.indexOf(transactions[i].category);
    if (indexOfCategory !== -1)
      spentsByCategory[indexOfCategory].totalSpent += transactions[i].price;
    else {
      categoriesDone.push(transactions[i].category);
      const spentObj = {
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      };
      spentsByCategory.push(spentObj);
    }
  }
  console.log("spentsByCategory:", spentsByCategory);
  return spentsByCategory;
}

let result = calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
]);

console.log("result:", result);

module.exports = calculateTotalSpentByCategory;
