import { Request, Response } from 'express';


class CategoriesController {
    index(request: Request, response: Response) {
        return response.json({"ABC": 123});
    }
}

export default new CategoriesController();