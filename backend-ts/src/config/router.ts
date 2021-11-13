import {Router} from 'express';
import CategoriesController from '../Controllers/CategoriesController'

const router = Router();


router.get('/categories', CategoriesController.index);
// routes.get('/points', pointsController.index);
// routes.get('/points/:id', pointsController.show);


// routes.post('/points', pointsController.create);


export default router;