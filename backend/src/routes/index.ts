import { Router } from "express";

import categoryRoutes from "../modules/category/category.routes";
import productRoutes from "../modules/product/product.routes";
import orderRoutes from "../modules/order/order.routes";


const routes = Router();

routes.use("/categories", categoryRoutes);
routes.use("/products", productRoutes);
routes.use("/orders", orderRoutes);

export default routes;
