import { DBService } from "../db/dbService";
import { registeredUsers } from "../db/users";

class UserController {
    userService: DBService;

    constructor(dbService: DBService) {
        this.userService = dbService;
    }

    validateUser = (username: string, password: string) => {
        const user = this.userService.getUser(username);
        if (!user) {
            return { success: false, message: "Usuario no encontrado", user: null };
        }
        return { success: user.password === password, message: user.password === password ? "Success" : "Contraseña incorrecta", user: user };
    }
}

export default UserController;