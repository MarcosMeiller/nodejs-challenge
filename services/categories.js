import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const findAllCategories = async () => {
   
    const data = await prisma.categorie.findMany();
 
    return data;
 
 }

 export const createCategoryService = async (body) => {  
    const data = await prisma.categorie.create( {data: body });
   
    return data;
}

export const findCategoriesServiceById = async (id) => {
  const data = await prisma.categorie.findUnique({
    where: {
      id: Number(id),
    },}
    );
  return data;
}

export const updateCategorieService = async (id,body) =>{
  const data = await prisma.categorie.update({
    where: {
      id: Number(id),
    },
    data: body,
  })

  return data;
}

export const deleteCategoryService = async(id) =>{
  
  const data = await prisma.categorie.delete({
    where: { id: Number(id)}}
  );

  return data;
}