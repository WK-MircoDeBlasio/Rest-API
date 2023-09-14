import { NextFunction, Request, Response } from "express";
import { findOne } from "../models/product.model";

class ProductValidationMiddleware {
    async productExists(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const productExists = await findOne(req.params.id);

        if (!productExists) {
            return res.status(404).json({ error: `Prodotto con ID ${req.params.id} non trovato.` });
        }

        next();
    }
}

export default new ProductValidationMiddleware();