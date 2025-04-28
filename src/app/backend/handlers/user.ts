import UserController from "../controllers/user";
import { NextResponse } from "next/server";

class UserHandler {
    userController: UserController;

    constructor(userController: UserController) {
        this.userController = userController;
    }

    validateUser = async (username: string, password: string) => {
        try {
            const result = await this.userController.validateUser(username, password);
            return NextResponse.json({ success: result.success, message: result.message, user: result.user }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error: "Server error" }, { status: 500 });
        }
    }
}

export default UserHandler;