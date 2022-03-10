class Basket {
    constructor() {
        this.items= [];
    }

    add(item){
        this.items.push(item);
    }

    getTotalValue(){
        return this.items.reduce((prev, curr)=> prev + curr.price,0);
    }
    // // inaczej:
    // getTotalValue(){
    //     let sum= 0;
    //     for ( const product of this.items){
    //         sum += product.price;
    //     }
    //     return sum;
    // }

    showBasket(){
        this.items
            .map((product,i)=> `${i+1} - ${product.name} - ${product.price.toFixed(2)}zł`)
            .forEach(text=> console.log(text));
    }

    remove(no){
        this.items.splice(no - 1, 1);
    }
}

class Product{
    constructor(productName, productPrice) {
        this.name= productName;
        this.price= productPrice;
    }
    setNewPrice(newPrice){
      this.price= newPrice;
    }
}

const shopBasket= new Basket();

const oranges= new Product('Pomarańcze LUZ', 7.55);

const cucumbers= new Product('Ogórek duży', 8.20);

shopBasket.add(cucumbers);
shopBasket.add(cucumbers);
shopBasket.add(oranges);

console.log(shopBasket);
console.log(shopBasket.getTotalValue());
shopBasket.showBasket();
shopBasket.remove(2);
console.log(shopBasket.getTotalValue());
shopBasket.showBasket();
