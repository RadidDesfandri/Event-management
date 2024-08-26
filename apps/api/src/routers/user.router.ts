import { UserController } from "@/controllers/user.controller";
import { EoMiddleware } from "@/middleware/eo.middleware";
import { Router } from "express";

export class UserRouter {
    private router: Router;
    private userController: UserController;
    private userMiddleware: EoMiddleware;

    constructor() {
        this.userController = new UserController();
        this.userMiddleware = new EoMiddleware();
        this.router = Router()
        this.initializeRouter()
    }

    private initializeRouter(): void {
        this.router.get('/', this.userMiddleware.verifyToken, this.userController.getUser)
    }

    getRouter(): Router {
        return this.router;
    }
}