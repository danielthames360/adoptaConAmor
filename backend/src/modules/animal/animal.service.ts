import { Animal, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAnimals = async () => {
    const animals = await prisma.animal.findMany();
    return animals;
}

export const getAnimalById = async (id: number) => {
    const animal = await prisma.animal.findUnique({
        where: {
            id
        }
    });
    return animal;
}

export const getAnimalsByType = async (tipoId: number) => {
    const animals = await prisma.animal.findMany({
        where: {
            tipoId
        },
        include: {
            tipo: true
        }
    });
    return animals;
}

export const createAnimal = async (animal: Animal) => {
    const newAnimal = await prisma.animal.create({
        data: {
            nombre: animal.nombre,
            sexo: animal.sexo,
            fechaNacimiento: new Date(animal.fechaNacimiento),
            descripcion: animal.descripcion,
            raza: animal.raza,
            tallaId: animal.tallaId,
            tipoId: animal.tipoId
        }
    });
    return newAnimal;
}

export const updateAnimal = async (animal: Animal) => {
    const updatedAnimal = await prisma.animal.update({
        where: {
            id: animal.id
        },
        data: {
            nombre: animal.nombre,
            sexo: animal.sexo,
            fechaNacimiento: new Date(animal.fechaNacimiento),
            descripcion: animal.descripcion,
            raza: animal.raza,
            tallaId: animal.tallaId,
            tipoId: animal.tipoId
        }
    });
    return updatedAnimal;
}


export const deleteAnimal = async (id: number) => {
    const deletedAnimal = await prisma.animal.delete({
        where: {
            id
        }
    });
    return deletedAnimal;
}