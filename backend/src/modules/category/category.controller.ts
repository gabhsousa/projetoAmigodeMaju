import { Request, Response } from "express";
import { CategoryService } from "./category.service";

export class CategoryController {
  private service = new CategoryService();

  async list(req: Request, res: Response) {
    const categories = await this.service.list();
    return res.json(categories);
  }

  async show(req: Request, res: Response) {
    const id = Number(req.params.id);
    const category = await this.service.show(id);
    return res.json(category);
  }

  async create(req: Request, res: Response) {
    const { nome, descricao } = req.body;
    const category = await this.service.create({ nome, descricao });
    return res.status(201).json(category);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { nome, descricao } = req.body;
    const category = await this.service.update(id, { nome, descricao });
    return res.json(category);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await this.service.delete(id);
    return res.status(204).send();
  }
}
