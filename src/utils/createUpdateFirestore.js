import {getFirestore, collection, addDoc, updateDoc,doc,getDoc} from "firebase/firestore";


export const createOrder =  async (items, users, total)=>{


    const order ={
        Buyer:[{name: users.name, phone:users.phone, email: users.email}],
        Items:items,
        Total: total
    };
    const db= getFirestore();
    const orderCollection =  collection (db, "Orders");

    const orderAdded=  await addDoc(orderCollection, order)
    
    return (orderAdded.id)
    
}

export const updateOrder = async (id, quantity) => {
    const db = getFirestore();
    const orderDoc = doc(db,"Items", id);
    const result = await getDoc(orderDoc)
    const stockDb = {...result.data()}
        if(stockDb.Stock >= quantity){
        updateDoc(orderDoc,{Stock: stockDb.Stock - quantity}).then((result)=>{
        console.log(result)
        })
    }
};