const { json } = require('express')
const fs = require('fs')

//const leer = async (archivo) => {
//    try {
//        let resultado = await fs.promises.readFile(archivo, 'utf-8')
//        let obj = JSON.parse(resultado)
//        let id = obj.id
//    } catch (error) {
//        console.log(`Error: ${error}`)
//    }
//}

class Contenedor {
    constructor(nombrearchivo){
        this.archivo = nombrearchivo
    }

    async save(objeto){  
        try {
            let getall = await this.getAll()
            let newid
            if(getall.length == 0) {
                newid = 1
            } else {
                newid = getall[getall.length-1].id + 1
            } 
            let newobjeto = objeto
            newobjeto.id = newid
            getall.push(newobjeto)
            await fs.writeFile(this.archivo, getall)
            return newid
        } catch (err) {
            throw new Error(`Error en el guardado: ${err.message}`)
        }
    }

    

    async getAll(){
        try {
           const getall = await fs.readFile(this.archivo, 'utf-8', () => {
           return  JSON.parse(getall)})
        } catch (err) {
            throw new Error(`Error en la lectura: ${err.message}`)
        }
    }


    async getById(id){
        try {
            let getall = await this.getAll
            let getallarray = JSON.parse(getall)
            let Return = getallarray.filter(objeto => objeto.id != id);
            return Return
        } catch (error) {
            throw new Error(`Error al encontrar el objeto que buscas: ${error.message}`)
                
        }   
    }


    async deleteById(id){
        try {
            const getall = await this.getAll()
            let result = getall.filter(obj => obj.id != id)
            await fs.writeFile(archivo, result)

        } catch (error) {
            throw new Error(`Error, no se pudo eliminar el objeto: ${error.message}`)
        }

    }

    async deleteAll(){
        try {
            await fs.writeFile(this.archivo, '')
        } catch (err) {
            throw new Error(`Error en el borrado: ${err.message}`)
        }
    }
}


const Container = new Contenedor('productos.txt')

Container.save({
    title: "Producto uno",
    price: "$20",
    thumnail: "algunaimagen.jpg"
})
Container.save({
    title: "Producto dos",
    price: "$30",
    thumnail: "algunaotraimagen.jpg"
})
Container.save({
    title: "Producto tres",
    price: "$30",
    thumnail: "algunaotraperootraimagen.jpg"
})


console.log(Container)

console.log(Container.getAll())

console.log(Container.getById(1))



