import { Request, Response } from 'express'

import * as service from "./animal.service";


export const getAnimals = async (req: Request, res: Response) => {
    const animals = await service.getAnimals();
    res.status(200).send({ data: animals })
}

export const getAnimalsByType = async (req: Request, res: Response) => {

    // Hay 2 maneras de obtener parametros del request
    // La primera es del req.params (que son los parametros que vienen en la URL como por ejemplo 
    // localhost:3000/animal/X) La X seria el valor que estas esperando y eso lo define como creas tu ruta
    // router.get('/byType/:type', getAnimalsByType); entonces yo ya se que voy a tener un parametro type -> con ese nombre

    //y la segunda es del req.body (que son los metodos que vienen en el body que lo veremos en el create/update

    const typeId = parseInt(req.params.type)
    const animals = await service.getAnimalsByType(typeId);
    res.status(200).send({ data: animals })
}

export const getAnimalById = async (req: Request, res: Response) => {

    //Que pasa si mandan letras? u otras cosas? como podemos validar? 

    // Siempre tratemos de envolver el codigo con un try catch mayormente en el controlador
    // Ya que si en el servicio algo saliera mal, este controlador lo va a poder capturar

    try {
        const id = parseInt(req.params.id)
        const animal = await service.getAnimalById(id);

        // usamos el return para finalizar con el codigo de la funcion donde lo querramos

        if (animal) {
            return res.status(200).send({ data: animal })
        }

        return res.status(200).send({ data: "Animal no encontrado" })

    } catch (error: any) {
        console.log(error.message)
        return res.status(400).send({ error: "Verifica la informacion enviada." })
    }
}

export const createAnimal = async (req: Request, res: Response) => {
    try {
        const animal = await service.createAnimal(req.body);
        return res.status(200).send({ data: animal })
    } catch (error: any) {
        console.log(error.message)
        return res.status(400).send({ error: "Verifica la informacion enviada." })
    }
}

export const updateAnimal = async (req: Request, res: Response) => {
    try {
        const animal = await service.updateAnimal(req.body);
        return res.status(200).send({ data: animal })
    } catch (error: any) {
        console.log(error.message)
        return res.status(400).send({ error: "Verifica la informacion enviada, el animal no existe." })
    }
}

export const deleteAnimal = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const deletedAnimal = await service.deleteAnimal(id);
        return res.status(200).send({ data: `Animal ${deletedAnimal.nombre} eliminado exitosamente` })
    } catch (error: any) {
        console.log(error.message)
        return res.status(400).send({ error: "Verifica la informacion enviada, el animal no existe." })
    }
}