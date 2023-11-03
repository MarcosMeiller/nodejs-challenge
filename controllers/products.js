import { matchedData } from "express-validator";
import { createProductService, findAllProducts, findProductsServiceById, updateProductService, deleteProductService } from "../services/products.js";
import { uploadImage } from '../utils/cloudinary.js';


export const getProducts = async (req, res) => {
   
    const data = await findAllProducts(); 

    res.send({ data })

}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    try{ 
        const data = await findProductsServiceById(id);
        if (!data){
            return res.status(404).send('Product not found');
        }
        res.send({ data })
    }
    catch(msg){
        return res.status(400).send('Invalid id');
    
    }

}

export const createProduct = async (req, res) => {  
    if(req.body.userRole == 1){

        const body = matchedData(req);
        try{ 
            if (req.files?.image){
                const result = await uploadImage(req.files.image.tempFilePath);
                console.log(result);
                body.url_image = result.url;
            }
            const data = await createProductService(body);
            res.send({data});

        }
            catch(msg){
            console.log(msg);
            return res.status(400).send('Error');
        }
    }
    else{
        return res.status(403).send("no esta autorizado para crear productos");
    }
}


export const updateProduct = async (req, res) => {
    if(req.body.userRole == 1){

        const { id } = req.params;
        const body = matchedData(req);
        
        try{ 
            if (req.files?.image){
                const result = await uploadImage(req.files.image.tempFilePath);
                console.log(result);
                body.url_image = result.url;
            }
            const data = await updateProductService(id,body);
            if (!data){
                return res.status(404).send('User not found');
            }
            res.send("Actualizado Correctamente");

        }
        catch(msg){
            return res.status(400).send('Invalid id');
        }
    }
    else{
        return res.status(403).send("no esta autorizado para editar productos");
    }
   
}


export const deleteProduct = async (req, res) => {
    if(req.body.userRole == 1){
        const { id } = req.params;

        try{
            await deleteProductService(id);
            res.send(" Ha sido Eliminado Correctamente");

        }
        catch(msg){
            console.log(msg);
            return res.status(400).send('Invalid id');
        
        }
    }
    else{
        return res.status(403).send("no esta autorizado para eliminar productos");
    }
}