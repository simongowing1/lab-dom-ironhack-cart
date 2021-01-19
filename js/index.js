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

//one line syntax:
//event.target.parentNode.parentNode.remove() 

//console.log (newNode)
 calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  
  //const newProduct = document.querySelector('.create-product')
  const newProductName = document.querySelector('.create-product > td > input[type=text]').placeholder;
  const newProductPrice = document.querySelector('#cart > tfoot > tr.create-product > td:nth-child(2) > input[type=number]').value;
  let parentNode = document.getElementById('cart')
  let newProduct = parentNode.insertRow(parentNode.length)
  let cell1 = newProduct.insertCell(0);
  let cell2 = newProduct.insertCell(1);
  let cell3 = newProduct.insertCell(2);
  let cell4 = newProduct.insertCell(3);
  let cell5 = newProduct.insertCell(4)
  cell1.innerHTML = `${newProductName}`;
  cell2.innerHTML = `$${newProductPrice}.00`;
  cell3.innerHTML = `<td class="quantity">
      <input type="number" value="1" min="0" placeholder="Quantity" />
    </td>`
  cell4.innerHTML = `<td class="subtotal">$<span>${newProductPrice}.00</span></td>`
  cell5.innerHTML = `<td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`

  //let oldProduct = document.querySelector('.product')
  //let newProduct = ``
  //parentNode.appendChild(oldProduct)
  

  //const target = (event.currentTarget).parentNode.parentNode
  
  //document.querySelector('.create-product > td > input').value = ''
  //const productName = document.querySelector('.create-product > td > input[type=text]').value;
  //document.getElementById("mytext").value = "My value"
  
  console.log(parentNode)

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
