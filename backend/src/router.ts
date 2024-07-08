import { Router } from "express";
import animalRoutes from './modules/animal/animal.routes'
import sizeRoutes from './modules/size/size.routes'
import typeRoutes from './modules/type/type.routes'

const router = Router()

// Aqui llamaremos a cada ruta de la aplicacion dentro de los modulos
// el primer parametro en el use es la extension de la ruta
router.use('/animal', animalRoutes)
router.use('/size', sizeRoutes)
router.use('/type', typeRoutes)

export { router } 