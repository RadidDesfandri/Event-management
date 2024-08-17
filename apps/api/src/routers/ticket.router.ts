import { TicketController } from "@/controllers/ticket.controller";
import { Router } from "express";

export class TicketRouter {
    private router: Router;
    private ticketController: TicketController

    constructor() {
        this.ticketController = new TicketController()
        this.router = Router()
        this.initializeRouter()
    }

    private initializeRouter(): void {
        this.router.get('/', this.ticketController.getTicket)
        this.router.post('/:id', this.ticketController.createTicket)
    }

    getRouter(): Router {
        return this.router;
    }
}