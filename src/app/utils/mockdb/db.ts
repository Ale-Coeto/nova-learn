import { registeredUsers } from "./users";

export const getUser = (username: string) => {
    return registeredUsers.find(user => user.username === username);
}

export const validateUser = (username: string, password: string) => {
    const user = getUser(username);
    if (!user) {
        return { success: false, message: "Usuario no encontrado", user: null };
    }
    return { success: user.password === password, message: user.password === password ? "Success" : "Contraseña incorrecta", user: user };
}