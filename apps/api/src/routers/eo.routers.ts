import { UserEOController } from "@/controllers/eo.controller";
import { Router } from "express";


export class UserEoRouter {
    private router: Router
    private UserEOController: UserEOController

    constructor() {
        this.UserEOController = new UserEOController();
        this.router = Router();
        this.intializeRoutes()

    }
    private intializeRoutes():void{
        this.router.post('/createeo', this.UserEOController.createUserEoData)
        this.router.post('/logineo', this.UserEOController.loginUserEO)
        
    }
    getRouter(): Router{
        return this.router;
    }
}