const products= [
    {id:1, name: "Taza ceramica blanca", description:"", category:"tazas",img:"./assets/img/taza blanca.jpg",stock:"5",precio:"1200"},
    {id:2, name: "Taza ceramica blanca asa de corazon", description:"", category:"",img:"./assets/img/taza asa corazon.jpg",stock:"10",precio:"1200"},
    {id:3, name: "Taza ceramica MAGICA", description:"", category:"tazas",img:"./assets/img/tazaMagica.png",stock:"8",precio:"1500"},
    {id:4, name: "Taza ceramica MAGICA con gliter", description:"", category:"tazas",img:"./assets/img/taza magica gliter.jpg",stock:"7",precio:"1500"},
    {id:5 ,name:"Bolsita Sonic" ,description:"Bolsita de tela 15x20, se realizan pedidos personalizados del diseño deseado" ,category:"bolsitasDeTela" ,img:"" ,stock:"30" ,precio:"135"},
    {id: 6 ,name:"Bolsitas Bluey" ,description:"Bolsita de tela 15x20, se realizan pedidos personalizados del diseño deseado" ,category:"bolsitasDeTela" ,img:"" ,stock:"30" ,precio:"135" },
    {id:7 ,name:"Bolsita Resaca" ,description:"Bolsita de tela 15x20, se realizan pedidos personalizados del diseño deseado" ,category:"bolsitasDeTela" ,img:"" ,stock:"30" ,precio:"135" },
    {id:8 ,name:"Bolsita buzz lightyear" ,description:"Bolsita de tela 15x20, se realizan pedidos personalizados del diseño deseado" ,category:"bolsitasDeTela" ,img:"" ,stock:"30" ,precio:"135" },,
    {id:9 ,name:"Llavero destapador Boca Juniors" ,description:"Llavero destapador ideal para souvenir, se realizan pedidos personalizados del diseño deseado, se realizan pedidos personalizados del diseño deseado" ,category:"llaveros" ,img:"" ,stock:"15" ,precio:"220" },
    {id:10 ,name:"Llavero destapador Corona" ,description:"Llavero destapador ideal para souvenir, se realizan pedidos personalizados del diseño deseado, se realizan pedidos personalizados del diseño deseado" ,category:"llaveros" ,img:"" ,stock:"15" ,precio:"220" },
    {id:11 ,name:"Llavero Cumpleaños" ,description:"llavero rectangular ideal para souvenir, se realizan pedidos personalizados del diseño deseado, se realizan pedidos personalizados del diseño deseado" ,category:"llavero" ,img: "",stock:"15" ,precio:"150" },
    {id:12 ,name:"Llavero Cumpleaños" ,description:"llavero ideal para souvenir, se realizan pedidos personalizados del diseño deseado, se realizan pedidos personalizados del diseño deseado" ,category:"llaveros" ,img:"" ,stock:"15" ,precio:"150" },
    {id:13 ,name:"Remera Defensa y justicia" ,description:"Remeras sublimadas deportiva, se realizan pedidos personalizados del diseño deseado, se realizan pedidos personalizados del diseño deseado" ,category:"remeras" ,img:"" ,stock:"5" ,precio:"1700" },
    {id:14 ,name:"Remera de spun sublimadas" ,description:"Remeras sublimadas de spun 100% poliester, se realizan pedidos personalizados del diseño deseado, se realizan pedidos personalizados del diseño deseado" ,category:"remeras" ,img:"" ,stock:"5" ,precio:"1700" },
    {id:15 ,name:"Remera de algodon" ,description:"Remeras de algodon, se realizan pedidos personalizados del diseño deseado, se realizan pedidos personalizados del diseño deseado" ,category:"remeras" ,img:"" ,stock:"5" ,precio:"2700" },
];


export const getProducts = ()=>{
    return new Promise ((resolve, reject) =>{
        setTimeout (() => {resolve(products)}, 1000)
})};

export const getProductsByCategory =(productsCategory) =>{
    return new Promise((resolve, reject) =>{
        setTimeout (() =>{
        resolve (products.filter(e => e.category === productsCategory))
        },500)
    })
}
export const getPorductsById = (productsId)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve (products.find(e => e.id === productsId));
        }, 500)
    })
}