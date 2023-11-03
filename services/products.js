import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const findAllProducts = async () => {
   
    const data = await prisma.product.findMany();
 
    return data;
 
 }

 export const createProductService = async (body) => {  
    body.categorie_Id = Number(body.categorie_Id)
    body.stock = Number(body.stock)
    body.price = Number(body.price)
    const data = await prisma.product.create( {data: body });
   
    return data;
}

export const findProductsServiceById = async (id) => {
  const data = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },}
    );
  return data;
}

export const updateProductService = async (id,body) =>{
  body.categorie_Id = Number(body.categorie_Id)
  body.stock = Number(body.stock)
  body.price = Number(body.price)
  const data = await prisma.product.update({
    where: {
      id: Number(id),
    },
    data: body,
  })

  return data;
}

export const deleteProductService = async(id) =>{
  const data = await prisma.product.delete({
    where: { id: Number(id)}}
  );

  return data;
}