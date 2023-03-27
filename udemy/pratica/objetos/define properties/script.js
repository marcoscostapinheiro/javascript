let product = {}

Object.defineProperties(product, {
    name: { value: 'Smartphone',
    writable: true
    },
    price: { value: 1500,
    writable: true
    },
    tax: { value: 0.1 },
    netPrice: { get: function(){
        return this.price * (1 + this.tax)
    }}
})

product.name = 'Computer'
product.price = 3500

console.log(`O valor do ${product.name} é ${product.netPrice.toFixed(2)}`)

