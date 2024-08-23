import { AuthControllerEo } from "@/controllers/authEo.controller";
import { Router } from "express";


export class AuthRouterEo {
    private router: Router
    private authController: AuthControllerEo

    constructor() {
        this.authController = new AuthControllerEo();
        this.router = Router();
        this.intializeRoutes()

    }
    private intializeRoutes():void{
        this.router.post('/create', this.authController.createEoData)
        this.router.post('/login', this.authController.loginEo)
        
    }
    getRouter(): Router{
        return this.router;
    }
}