import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const findAllOrderDetails = async () => {
   
    const data = await prisma.order_Detail.findMany();
 
    return data;
 
 }

 export const createOrderDetailService = async (body) => {  
    const data = await prisma.order_Detail.create( {data: body });
   
    return data;
}

export const findOrderDetailsServiceById = async (id) => {
  const data = await prisma.order_Detail.findUnique({
    where: {
      id: Number(id),
    },}
    );
  return data;
}

export const updateOrderDetailService = async (id,body) =>{
  const data = await prisma.order_Detail.update({
    where: {
      id: Number(id),
    },
    data: body,
  })

  return data;
}

export const deleteOrderDetailService = async(id) =>{
  const data = await prisma.order_Detail.delete({
    where: { id: Number(id)}}
  );

  return data;
}