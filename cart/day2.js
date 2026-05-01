//cart
let cart = [];

let products = [
  { id: 1, name: "laptop", price: 10000 },
  { id: 2, name: "charger", price: 500},
  { id: 3, name: "earpods", price: 2000},
  { id: 4, name: "apple watch", price: 25000 },
  { id: 5, name: "phone", price: 40000 },
];

function addToCart(prodid) {
  let product = products.find((p) => p.id === prodid);
  if (!product) {
    console.log(" item doesnt exists to add ");
  } else {
    alreadyincart = cart.find((p) => p.id === prodid);
    console.log(alreadyincart)
    if (!alreadyincart) {
      cart.push({...product,count:1});
      document.getElementById("itemsincart").innerHTML = "";
      cart.forEach((prod) => {
        document.getElementById("itemsincart").innerHTML +=
          `<div class="oneitem">${prod.name} = ${prod.count}</div>`;
      });
      // document.getElementById("itemsincart").innerHTML=JSON.stringify(cart)
    }
    else{
       alreadyincart.count+=1
       document.getElementById("itemsincart").innerHTML = "";
      cart.forEach((prod) => {
        document.getElementById("itemsincart").innerHTML +=
          `<div class="oneitem">${prod.name} = ${prod.count}</div>`;
      })
       
    }
  }
}

function displayTotalPrice() {
    let totalprice=0
  document.getElementById("total price").innerHTML=""
  cart.forEach(item=>{
    let price=item.price*item.count
    
    document.getElementById("total price").innerHTML+=`<div>${item.name} x ${item.count} = ${price}</div>`
    totalprice+=price
    document.getElementById("price").innerHTML=`<div>total price is: ${totalprice}</div.`
  })
}

