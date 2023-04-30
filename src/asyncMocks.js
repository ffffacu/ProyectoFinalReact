const products= [
    {id:"1", name: "Taza ceramica blanca", description:"", category:"tazas",img:"./assets/img/taza blanca.jpg",stock:"5",precio:"1200"},
    {id:"2", name: "Taza ceramica blanca asa de corazon", description:"", category:"",img:"./assets/img/taza asa corazon.jpg",stock:"10",precio:"1200"},
    {id:"3", name: "Taza ceramica MAGICA", description:"", category:"tazas",img:"./assets/img/tazaMagica.png",stock:"8",precio:"1500"},
    {id:"4", name: "Taza ceramica MAGICA con gliter", description:"", category:"tazas",img:"./assets/img/taza magica gliter.jpg",stock:"7",precio:"1500"}
];

const category=[
    {id:"01", name:"Tazas", img:""},
    {id:"02", name:"Remeras", img:""},
    {id:"03", name:"Bolsitas de tela", img:""},
    {id:"03", name:"Llaveros", img:""}
]


export const getProducts = ()=>{
    return new Promise ((resolve, reject) =>{
        setTimeout (() => {resolve(products)}, 2000)
})};