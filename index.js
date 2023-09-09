const catalogo = [
    {
        id: 1,
        marca: 'Nike',
        nome: 'Conjunto preto',
        preco: 300,
        imagem: 'produto1.avif',
        feminino: false,
    },
    {
        id: 2,
        marca: 'Nike',
        nome: 'Polo',
        preco: 80,
        imagem: 'produto2.avif',
        feminino: false,
    },
    {
        id: 3,
        marca: 'Nike',
        nome: 'Jaketa',
        preco: 280,
        imagem: 'produto3.avif',
        feminino: false,
    },
    {
        id: 4,
        marca: 'Nike',
        nome: 'Moleton',
        preco: 250,
        imagem: 'produto4.avif',
        feminino: false,
    },
    {
        id: 5,
        marca: 'Nike',
        nome: 'Calça',
        preco: 150,
        imagem: 'produto5.avif',
        feminino: false,
    },
    {
        id: 6,
        marca: 'Nike',
        nome: 'Conjunto Academia',
        preco: 450,
        imagem: 'produto6.avif',
        feminino: true,
    },

    {
        id: 7,
        marca: 'Nike',
        nome: 'Vestido',
        preco: 540,
        imagem: 'produto7.avif',
        feminino: true,
    },
    {
        id: 8,
        marca: 'Nike',
        nome: 'Saia academia',
        preco: 300,
        imagem: 'produto8.avif',
        feminino: true,
    },
    {
        id: 9,
        marca: 'Nike',
        nome: 'Shorte de time',
        preco: 250,
        imagem: 'produto9.avif',
        feminino:true ,
    },
    {
        id: 10,
        marca: 'Nike',
        nome: 'Top',
        preco: 180,
        imagem: 'produto10.avif',
        feminino: true,
    },
    
];

for (const produtoCatalogo of catalogo) {
    const cartaoProduto =  `<div id="produto-${produtoCatalogo.id}">
<img 
src="imagens/${produtoCatalogo.imagem}" alt="">

<p class= 'marca'>${produtoCatalogo.marca}<p/>
<p>${produtoCatalogo.nome}<p/>
<p>$${produtoCatalogo.preco}<p/>
<button id='ad'>Adicionar</button>
</div>`;

document.getElementById('produto').innerHTML += cartaoProduto

}



