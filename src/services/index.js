import fakeProducts from './fakeProducts'
const TIMEOUT = 100
const MAX_CHECKOUT = 2 // max different items

export const api = {
    async getBooks() {
        let books = await fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
          response.json()
        );
        // Fake price
        return books.map(book => ({ ...book, price: Math.floor(Math.random() * 100) + 1, src: 'https://picsum.photos/200/300?random=1'  }))
    },


    // back up fake api calls if we have more time
    getFakeProducts() {
        return new Promise(resolve => {
            setTimeout(() => resolve(fakeProducts), TIMEOUT)
        })
    },
    // Mock a fake max quantity
    buyProducts(cart) {
        return new Promise((resolve, reject) =>
          setTimeout(() => {
            if (Object.keys(cart.quantityById).length <= MAX_CHECKOUT) resolve(cart)
            else reject(`You can buy ${MAX_CHECKOUT} items at maximum in a checkout`)
          }, TIMEOUT),
        )
    },
}