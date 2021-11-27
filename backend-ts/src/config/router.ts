import { Router } from 'express'
import FilmesController from '../Controllers/FilmesController'

const router = Router()

router.get('/Filmes', FilmesController.index)
// routes.get('/points', pointsController.index);
// routes.get('/points/:id', pointsController.show);

// routes.post('/points', pointsController.create);

export default router
