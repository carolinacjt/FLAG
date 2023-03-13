if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

function ready(){
    var removerCartButton = document.getElementsByClassName("remover");
    console.log(removerCartButton);
    for (var i=0; i< removerCartButton.length; i++){
        var button = removerCartButton[i];
        button.addEventListener('click', removeCartItem);  
    }

    var quantityInputs = document.getElementsByClassName('quantidade');
    for (var i=0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }
    document.getElementsByClassName('comprar_btn')[0].addEventListener('click', comprar);
}

function comprar(){
    alert("Obrigada! A sua compra  foi efetuada com sucesso");
    var itemsCarrinho = document.getElementsByClassName('itemsCarrinho')[0];
    while (itemsCarrinho.hasChildNodes()){
        itemsCarrinho.removeChild(itemsCarrinho.firstChild);
    }
    updateCartTotal();
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <=0){
        input.value=1;
    }
    updateCartTotal();
}

function search_prato(){
    let pesquisa = document.getElementById('searchbar').value;
    pesquisa=pesquisa.toLowerCase();
    let nome = document.getElementsByClassName('nome_prato_escondido');

    for(i=0; i<nome.length; i++){
        if(!nome[i].innerHTML.toLowerCase().includes(pesquisa)){
            nome[i].parentElement.style.display="none";

        }
        else{
            nome[i].parentElement.style.display="list-item";
        }
    }
}

let home = document.querySelector(".home");
let cart = document.querySelector(".cart");
let contact = document.querySelector(".contactos");
//let prato = document.querySelector(".prato_info");

//home
home.addEventListener("click", function(){
    console.log("Funciona");
    let pesquisa = document.querySelector(".search");
    let produtoIn = document.querySelector(".produto-secçao");
    let carrinhoIn = document.querySelector(".carrinho-secçao");
    let catalogoIn = document.querySelector(".catalogo-secçao");
    let contactoIn = document.querySelector(".contactos-secçao");
    carrinhoIn.classList.remove("visivel");
    carrinhoIn.classList.add("invisivel");
    produtoIn.classList.remove("visivel");
    produtoIn.classList.add("invisivel");
    catalogoIn.classList.add("visivel");
    catalogoIn.classList.remove("invisivel");
    contactoIn.classList.add("invisivel");
    contactoIn.classList.remove("visivel");
    pesquisa.classList.add("visivel");
    pesquisa.classList.remove("invisivel");
    home.classList.add("active");
    home.classList.remove("inactive");
    cart.classList.add("inactive");
    cart.classList.remove("activeCarrinho");
    contact.classList.add("inactive");
    contact.classList.remove("active");

});

contact.addEventListener("click", function(){
    let pesquisa = document.querySelector(".search");
    let produtoIn = document.querySelector(".produto-secçao");
    let carrinhoIn = document.querySelector(".carrinho-secçao");
    let catalogoIn = document.querySelector(".catalogo-secçao");
    let contactoIn = document.querySelector(".contactos-secçao");
    catalogoIn.classList.remove("visivel");
    catalogoIn.classList.add("invisivel");
    carrinhoIn.classList.remove("visivel");
    carrinhoIn.classList.add("invisivel");
    produtoIn.classList.remove("visivel");
    produtoIn.classList.add("invisivel");
    contactoIn.classList.add("visivel");
    contactoIn.classList.remove("invisivel");
    pesquisa.classList.remove("visivel");
    pesquisa.classList.add("invisivel");
    home.classList.add("inactive");
    home.classList.remove("active");
    cart.classList.add("inactive");
    cart.classList.remove("activeCarrinho");
    contact.classList.add("active");
    contact.classList.remove("inactive");
});

//carrinho
cart.addEventListener("click", function(){
    console.log("Tambem");
    let pesquisa = document.querySelector(".search");
    let produtoIn = document.querySelector(".produto-secçao");
    let carrinhoIn = document.querySelector(".carrinho-secçao");
    let catalogoIn = document.querySelector(".catalogo-secçao");
    let contactoIn = document.querySelector(".contactos-secçao");
    catalogoIn.classList.remove("visivel");
    catalogoIn.classList.add("invisivel");
    contactoIn.classList.add("invisivel");
    contactoIn.classList.remove("visivel");
    produtoIn.classList.remove("visivel");
    produtoIn.classList.add("invisivel");
    carrinhoIn.classList.add("visivel");
    carrinhoIn.classList.remove("invisvel");
    pesquisa.classList.remove("visivel");
    pesquisa.classList.add("invisivel");
    home.classList.add("inactive");
    home.classList.remove("active");
    cart.classList.add("activeCarrinho");
    cart.classList.remove("inactive");
    contact.classList.add("inactive");
    contact.classList.remove("active");
});

let prato2 = document.getElementsByClassName("nome_prato");


var quantityInputs = document.getElementsByClassName('quantidade');
    for (var i=0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }




//produto
for (var i=0; i < prato2.length; i++){
    prato2[i].addEventListener("click", function(){
        console.log("Outro");
        let pesquisa = document.querySelector(".search");
        let catalogoIn = document.querySelector(".catalogo-secçao");
        let produtoIn = document.querySelector(".produto-secçao");
        let nomeProduto =  document.querySelector(".nome_produto");
        catalogoIn.classList.remove("visivel");
        catalogoIn.classList.add("invisivel");
        pesquisa.classList.remove("visivel");
        pesquisa.classList.add("invisivel");
        home.classList.add("inactive");
        home.classList.remove("active");
        //if(prato2[i].innerText == nomeProduto[0].innerText){
       // if(prato2[i].innerText == nomeProduto[0].innerText){
            produtoIn.classList.remove("invisivel");
            produtoIn.classList.add("visivel");
            //console.log(prato2[i].innerText, i);
       // }
    });
}  



function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('itemsCarrinho')[0];
    var cartRows = cartItemContainer.getElementsByClassName('linhaCarrinho');
    var total = 0;
    for (var i=0; i< cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('preco')[0];
        var quantityElement = cartRow.getElementsByClassName('quantidade')[0];
        var price = parseFloat(priceElement.innerText.replace('€', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName('total')[0].innerText = 'Total: ' + total + '€';
}
////////////

/* CORRETO
var addToCartButtons = document.querySelector('#agreed');
addToCartButtons.addEventListener('click', addToCartClicked)

function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('nome_produto')[0].innerText;
    var price = shopItem.getElementsByClassName('preço_produto')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('product_info_img')[0].src;
    console.log(title, price, imageSrc);
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}
*/

function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div');
    cartRow.classList.add('grelha');
    var cartItems = document.getElementsByClassName('itemsCarrinho')[0];
    var cartItemNames = cartItems.getElementsByClassName('nome_prato_carrinho');
    for(var i=0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
            console.log('Erro');
            alert('Este produto já foi adicionado ao carrinho!');
            return;
        }
    }
    var cartRowContents = 
        `<div class="linhaCarrinho grelha">
        <img src="${imageSrc}" alt="" width="200px">
        <h3 class="nome_prato_carrinho">${title}</h3>
        <h3 class="preco">${price}</h3>
        <input class="quantidade" type="number" value="1">
        <button class="remover" type="button">REMOVER</button>
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('remover')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('quantidade')[0].addEventListener('change', quantityChanged);
}

var checkbox_agreed = document.getElementsByClassName("form_check")[0];
checkbox_agreed.getElementsByClassName("checkGrande")[0].addEventListener('click', validate);

function validate(){
    console.log("funciona");
    let primeira_checkbox = document.getElementById("picante");
    let segunda_checkbox = document.getElementById("nao_picante");
    let primeira_checkbox2 = checkbox_agreed.getElementsByClassName("picante")[0];
    let segunda_checkbox2 = checkbox_agreed.getElementsByClassName("nao_picante")[0];
    let text = document.getElementById("confirm");
    var addToCartButtons = document.querySelectorAll('#agreed');
    var addToCartButtons = document.querySelectorAll('#agreed');

    for(var i=0; i<addToCartButtons.length; i++){
        if((primeira_checkbox2.checked && !segunda_checkbox2.checked) || (segunda_checkbox2.checked && !primeira_checkbox2.checked)){
          
            addToCartButtons[i].addEventListener('click', addToCartClicked);
            }
        

        else if(primeira_checkbox2.checked && segunda_checkbox2.checked){
            text.innerHTML="Escolha apenas 1 opção"
        }
        else if(!primeira_checkbox2.checked && !segunda_checkbox2.checked){
            text.innerHTML="Por favor selecione 1 das opções"
        }
    
}
}

function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('nome_produto')[0].innerText;
    var price = shopItem.getElementsByClassName('preço_produto')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('product_info_img')[0].src;
    console.log(title, price, imageSrc);
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}