import { matchedData } from "express-validator";

import { createRoleService, findAllRoles, findRolesServiceById, updateRoleService, deleteRoleService } from "../services/roles.js";


export const getRoles = async (req, res) => {
   
    const data = await findAllRoles(); 

    res.send({ data })

}

export const getRoleById = async (req, res) => {
    const { id } = req.params;
    try{ 
        const data = await findRolesServiceById(id);
        if (!data){
            return res.status(404).send('Role not found');
        }
        res.send({ data })
    }
    catch(msg){
        return res.status(400).send('Invalid id');
    
    }

}

export const createRole = async (req, res) => {  
      
    const body = matchedData(req);
    try{ 
        const data = await createRoleService(body);
        res.send({data});

    }
        catch(msg){
        console.log(msg);
        return res.status(400).send('Error');
    }
}


export const updateRole = async (req, res) => {
    const { id } = req.params;

    const body = matchedData(req);
    
    try{ 
        const data = await updateRoleService(id,body);
        if (!data){
            return res.status(404).send('User not found');
        }
        res.send("Actualizado Correctamente");

    }
    catch(msg){
        return res.status(400).send('Invalid id');
    }
   
}


export const deleteRole = async (req, res) => {
    const { id } = req.params;

    try{
        await deleteRoleService(id);
        res.send(" Ha sido Eliminado Correctamente");

    }
    catch(msg){
        console.log(msg);
        return res.status(400).send('Invalid id');
    
    }
}