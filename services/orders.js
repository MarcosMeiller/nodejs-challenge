import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const findAllOrders = async () => {
   
    const data = await prisma.order.findMany();
 
    return data;
 
 }

 export const createOrderService = async (body) => {  
    
    const data = await prisma.order.create( {data: body });
   
    return data;
}

export const findOrderServiceById = async (id) => {
  const data = await prisma.order.findUnique({
    where: {
      id: Number(id),
    },}
    );
  return data;
}

export const updateOrderService = async (id,body) =>{
  const data = await prisma.order.update({
    where: {
      id: Number(id),
    },
    data: body,
  })

  return data;
}

export const deleteOrderService = async(id) =>{
  const data = await prisma.order.delete({
    where: { id: Number(id)}}
  );

  return data;
}