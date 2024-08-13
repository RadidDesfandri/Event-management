import { UserController } from "@/controllers/user.controller";
import { Router } from "express";

export class UserRouter {
    private router: Router;
    private userController: UserController;

    constructor() {
        this.userController = new UserController();
        this.router = Router()
        this.initializeRouter()
    }

    private initializeRouter(): void {
        this.router.get('/', this.userController.getUser)
    }

    getRouter(): Router {
        return this.router;
    }
}