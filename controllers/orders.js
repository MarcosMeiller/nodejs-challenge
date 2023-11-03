import { matchedData } from "express-validator";

import { createOrderService , findAllOrders, findOrderServiceById, updateOrderService, deleteOrderService } from "../services/orders.js";


export const getOrders = async (req, res) => {
   
    const data = await findAllOrders(); 

    res.send({ data })

}

export const getOrderById = async (req, res) => {
    const { id } = req.params;
    try{ 
        const data = await findOrderServiceById(id);
        if (!data){
            return res.status(404).send('Order not found');
        }
        res.send({ data })
    }
    catch(msg){
        return res.status(400).send('Invalid id');
    
    }

}

export const createOrder = async (req, res) => {  
    if(req.body.userRole == 2){
    const body = matchedData(req);
    console.log(body);

    try{ 
        const data = await createOrderService(body);
        res.send({data});

    }
        catch(msg){
        console.log(msg);
        return res.status(400).send('Error');
    }
}
else{
    return res.status(403).send("no esta autorizado para crear ordenes");
}
}


export const updateOrder = async (req, res) => {
    const { id } = req.params;

    const body = matchedData(req);
    
    try{ 
        const data = await updateOrderService(id,body);
        if (!data){
            return res.status(404).send('User not found');
        }
        res.send("Actualizado Correctamente");

    }
    catch(msg){
        return res.status(400).send('Invalid id');
    }
   
}


export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    try{
        await deleteOrderService(id);
        res.send(" Ha sido Eliminado Correctamente");

    }
    catch(msg){
        console.log(msg);
        return res.status(400).send('Invalid id');
    
    }
}