import { AuthController } from "@/controllers/auth.controller";
import { Router } from "express";


export class AuthRouter {
    private router: Router
    private authController: AuthController

    constructor() {
        this.authController = new AuthController();
        this.router = Router();
        this.intializeRoutes()

    }
    private intializeRoutes():void{
        this.router.post('/create', this.authController.createUserData)
    }
    getRouter(): Router{
        return this.router;
    }
}