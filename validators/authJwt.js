import jwt from "jsonwebtoken";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const verifyToken = (req, res, next) => {
    if (req.headers && req.headers.authorization) {
      jwt.verify(req.headers.authorization.split(' ')[0], process.env.JWT_SECRET, async (err, decode) => {
        if (err) req.user = undefined;
        try{ 
        const data = await prisma.user.findUnique({
          where: {
            id: Number(decode.id),
          },}
          )
        req.body.userRole = data.role_Id
        next();
        }
        catch(err){
          res.status(403).send("Token invalid")
        }
      });
    } else {
      res.status(403).send("Token invalid")

    }
  };
