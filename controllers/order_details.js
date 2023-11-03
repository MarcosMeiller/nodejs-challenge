import { matchedData } from "express-validator";

import { createOrderDetailService , findAllOrderDetails, findOrderDetailsServiceById, updateOrderDetailService, deleteOrderDetailService } from "../services/order_details.js";


export const getOrderDetails = async (req, res) => {
   
    const data = await findAllOrderDetails(); 

    res.send({ data })

}

export const getOrderDetailById = async (req, res) => {
    const { id } = req.params;
    try{ 
        const data = await findOrderDetailsServiceById(id);
        if (!data){
            return res.status(404).send('Order Detail not found');
        }
        res.send({ data })
    }
    catch(msg){
        return res.status(400).send('Invalid id');
    
    }

}

export const createOrderDetail = async (req, res) => {  
      
    const body = matchedData(req);
    try{ 
        const data = await createOrderDetailService(body);
        res.send({data});

    }
        catch(msg){
        console.log(msg);
        return res.status(400).send('Error');
    }
}


export const updateOrderDetail = async (req, res) => {
    const { id } = req.params;

    const body = matchedData(req);
    
    try{ 
        const data = await updateOrderDetailService(id,body);
        if (!data){
            return res.status(404).send('User not found');
        }
        res.send("Actualizado Correctamente");

    }
    catch(msg){
        return res.status(400).send('Invalid id');
    }
   
}


export const deleteOrderDetail = async (req, res) => {
    const { id } = req.params;

    try{
        await deleteOrderDetailService(id);
        res.send(" Ha sido Eliminado Correctamente");

    }
    catch(msg){
        console.log(msg);
        return res.status(400).send('Invalid id');
    
    }
}