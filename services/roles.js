import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const findAllRoles = async () => {
   
    const data = await prisma.rol.findMany();
 
    return data;
 
 }

 export const createRoleService = async (body) => {  
    const data = await prisma.rol.create( {data: body });
   
    return data;
}

export const findRolesServiceById = async (id) => {
  const data = await prisma.rol.findUnique({
    where: {
      id: Number(id),
    },}
    );
  return data;
}

export const updateRoleService = async (id,body) =>{
  const data = await prisma.rol.update({
    where: {
      id: Number(id),
    },
    data: body,
  })

  return data;
}

export const deleteRoleService = async(id) =>{
  const data = await prisma.rol.delete({
    where: { id: Number(id)}}
  );

  return data;
}