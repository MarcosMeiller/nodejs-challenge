import { Router } from "express";
import { createRole,getRoles, getRoleById,  updateRole, deleteRole } from "../controllers/roles.js";
import { createRolValidator, updateRolValidator } from "../validators/roles.js";

const router = Router();

router.get('/', getRoles);

router.get('/:id', getRoleById);

router.post('/', createRolValidator, createRole);

router.put('/:id', updateRolValidator, updateRole);

router.delete('/:id', deleteRole);

export { router };