import { matchedData } from "express-validator";

import { createCategoryService, findAllCategories, findCategoriesServiceById, updateCategorieService, deleteCategoryService } from "../services/categories.js";


export const getCategories = async (req, res) => {
   
    const data = await findAllCategories(); 

    res.send({ data })

}

export const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try{ 
        const data = await findCategoriesServiceById(id);
        if (!data){
            return res.status(404).send('Category not found');
        }
        res.send({ data })
    }
    catch(msg){
        return res.status(400).send('Invalid id');
    
    }

}

export const createCategory = async (req, res) => {  
    if(req.body.userRole == 1){
    const body = matchedData(req);
    try{ 
        const data = await createCategoryService(body);
        res.status(202).send({data});

    }
        catch(msg){
        console.log(msg);
        return res.status(400).send('Error');
    }}
    else{ 
        return res.status(403).send("no esta autorizado para crear categorias");
    }
}


export const updateCategory = async (req, res) => {
    if(req.body.userRole == 1){

        const { id } = req.params;

        const body = matchedData(req);
        
        try{ 
            const data = await updateCategorieService(id,body);
            if (!data){
                return res.status(404).send('Category not found');
            }
            res.send("Actualizado Correctamente");

        }
        catch(msg){
            return res.status(400).send('Invalid id');
        }
    }
    else{
        return res.status(403).send("no esta autorizado para editar categorias");
    }
   
}


export const deleteCategory = async (req, res) => {
    if(req.body.userRole == 1){

        const { id } = req.params;

        try{
            await deleteCategoryService(id);
            res.send(" Ha sido Eliminado Correctamente");

        }
        catch(msg){
            console.log(msg);
            return res.status(400).send('Invalid id');
        
        }
    }
    else{
        return res.status(403).send("no esta autorizado para eliminar categorias");
    }
}