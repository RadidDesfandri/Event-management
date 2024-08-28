import { TransactionController } from '@/controllers/transaction.controller';
import { EoMiddleware } from '@/middleware/eo.middleware';
import { Router } from 'express';

export class TransactionRouter {
  private router: Router;
  private transactionRouter: TransactionController;
  private transactionMiddleware: EoMiddleware;

  constructor() {
    this.transactionRouter = new TransactionController();
    this.transactionMiddleware = new EoMiddleware();
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter(): void { 
    this.router.post('/status', this.transactionRouter.updateStatusTransaction)
    this.router.post(
      '/:id',
      this.transactionMiddleware.verifyToken,
      this.transactionRouter.createTransaction,
    );
    this.router.get('/get', this.transactionRouter.getTransaction);
    this.router.get(
      '/get/id',
      this.transactionMiddleware.verifyToken,
      this.transactionRouter.getTransactionByLog,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
