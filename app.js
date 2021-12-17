let product = document.querySelector('#product');
let qty = document.querySelector('input#quantity');
let price = document.getElementById('price');
let fullName = document.querySelector('input#fullName');
let orderForm = document.querySelector('form.orderForm');


orderForm.addEventListener('submit', (evt) => {
    alert(`M/Mme ${fullName.value.toUpperCase()} vous etes sur le point de commander.\nProduit: ${product.value}\nPrix Unitaire: ${price.value} FCFA\nQuantité: ${qty.value}\nPrix Total: ${qty.value * price.value}\n\nMerci bien.`)
    //evt.preventDefault();
})


product.addEventListener('change', function displayPrice() {
    switch (this.value) {
        case 'Parfum':
            price.value = '25000';
            break;
        case 'Kit de maquillage':
            price.value = '15000';
            break;
        case 'Lait de toilette':
            price.value = '5900'
            break;
        case 'Deodorant pour hommes':
            price.value = '7500'
            break;
        case 'Gamme de vernis a ongles':
            price.value = '10000'
            break;
        case 'Pate de dentifrice':
            price.value = '2800'
            break;
        default:
            break;
    }
})