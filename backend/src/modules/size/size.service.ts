import { PrismaClient, Talla } from '@prisma/client';
const prisma = new PrismaClient();


export const getSizes = async () => {
    const sizes = await prisma.talla.findMany();
    return sizes;
}

export const getSizeById = async (id: number) => {
    const size = await prisma.talla.findUnique({
        where: {
            id
        }
    });
    return size;
}

export const createSize = async (size: Talla) => {
    const newSize = await prisma.talla.create({
        data: {
            nombre: size.nombre
        }
    });
    return newSize;
}

export const updateSize = async (size: Talla) => {
    const updatedSize = await prisma.talla.update({
        where: {
            id: size.id
        },
        data: {
            nombre: size.nombre
        }
    });
    return updatedSize;
}

export const deleteSize = async (id: number) => {
    const deletedSize = await prisma.talla.delete({
        where: {
            id
        }
    });
    return deletedSize;
}