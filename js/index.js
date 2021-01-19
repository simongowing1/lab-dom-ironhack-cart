// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price > span').innerText
  let quantity = product.querySelector('.quantity > input[type=number]').value
  let subtotalPrice = price * quantity
  product.querySelector('.subtotal > span').innerText = subtotalPrice
  //subtotal.replace(sum)
  //printSubtotal = Number(subtotal += sum)
  //console.log(printSubtotal)
  return subtotalPrice
  
  //... your code goes here
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  
  // end of test

  // ITERATION 2
  //... your code goes here
  
    const productList = document.querySelectorAll('.product');
    
    let sum = 0;
    
    for (let product of productList) {
      //updateSubtotal(product);
      sum += updateSubtotal(product);
    }
    //... your code goes here
    //return sum
    document.querySelector('#total-value span').innerText = sum;
  return sum


  // ITERATION 3
  //... your code goes here
//return total

}

//console.log(calculateAll())

// ITERATION 4

function removeProduct(event) {
const target = (event.currentTarget).parentNode;
 let parentNode = document.querySelector('tbody')
 let newNode = parentNode.removeChild(target.parentNode)
//console.log('The target in remove is:', target);

//online syntax:
//event.target.parentNode.parentNode.remove() 

console.log (newNode)
 calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  //const target = (event.currentTarget).parentNode.parentNode
  const newProduct = document.querySelector('.create-product')
  console.log(newProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  //console.log(calculatePricesBtn)
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removePricesBtn = document.querySelectorAll('.btn-remove');
  //console.log (removePricesBtn)
  for (let button of removePricesBtn) {
    button.addEventListener('click', removeProduct)
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  //... your code goes here
});
