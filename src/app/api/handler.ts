import UserController from "../backend/controllers/user";
import { DBService } from "../backend/db/dbService";
import UserHandler from "../backend/handlers/user";

// Este handler se debería usar en cada ruta
const dbService = new DBService();
const controller = new UserController(dbService);
export const userHandler = new UserHandler(controller);
