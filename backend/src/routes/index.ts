import { Router } from "express";

import categoryRoutes from "../modules/category/category.routes";
import productRoutes from "../modules/product/product.routes";


const routes = Router();

routes.use("/categories", categoryRoutes);
routes.use("/products", productRoutes);

export default routes;
