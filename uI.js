
const buyBtns= [...document.querySelectorAll('[data-name]')];
const basketUl= document.querySelector('.basket-list');
const buyAllBtn= document.querySelector('.btn-buy-all');

//buyAllBtn.removeAttribute('disabled');

const basket= new Basket();

const removeItem= event =>{
    const id= Number(event.target.dataset.id);
    basket.remove(id);
    createBasketUi();
}

const createBasketUi = () => {
    basketUl.innerText= '';
    for (const oneProductInfo of basket.getBasketSummary()) {

    const newLi= document.createElement('li'); //creating <li>
    newLi.innerText= oneProductInfo;
    basketUl.appendChild(newLi);
    };

    const basketTotalValue= basket.getTotalValue();
    buyAllBtn.innerText= `Złóż zamówienie na kwotę: 
    ${basketTotalValue.toFixed(2)}zł.`

    if(basketTotalValue > 0) {
        buyAllBtn.disabled = false;
    } else {
        buyAllBtn.disabled = true;
    }
};

const addProductToBasket = event => {
    const name = event.target.dataset.name;
    const price = Number(event.target.dataset.price);

    const newProduct = new Product(name, price);
    basket.add(newProduct);
    createBasketUi();
};

const buyAllProducts = () => {
    alert(`Zakupiono produkty o wartości ${basket.getTotalValue().toFixed(2)}zł.`)
    basket.clear();
    createBasketUi();
};

for (const btn of buyBtns) {
    btn.addEventListener('click', addProductToBasket);
}

//                                   event=> {
//         const name= event.target.dataset.name;
//         const price=Number(event.target.dataset.price);
//
//         const newProduct= new Product(name,price);
//         console.log(newProduct);
//     });
// }
//    // albo inny sposób pętli:
// buyBtns.forEach(btn => {
//     btn.addEventListener('click', event=> {
// //         console.log('Kliknięty!', event.target.dataset.id);
// //       })
//
// });

buyAllBtn.addEventListener('click', buyAllProducts);

createBasketUi();