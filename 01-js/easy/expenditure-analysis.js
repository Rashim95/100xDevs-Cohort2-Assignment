/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  return transactions.reduce((result,transaction)=>{
    let {category, price} = transaction;
    const existingCategory = result.find(entry => entry.category === category);
    if(existingCategory){
      existingCategory.totalSpent += price;
    }else{
       result.push({category, totalSpent: price});
    }
    return result;
  },[])
}



module.exports = calculateTotalSpentByCategory;
