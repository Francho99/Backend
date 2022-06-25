const fs = require('fs')

const leer = async (archivo) => {
    try {
        let resultado = await fs.promises.readFile(archivo, 'utf-8')
        let obj = JSON.parse(resultado)
        let id = obj.id
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

class Contenedor{
    constructor(archivo){
        this.archivo = archivo
    }

    save(objeto){
        try {
            fs.appendFileSync(archivo, objetoconid)
        } catch (err) {
            throw new Error(`Error en el guardado: ${err.message}`)
        }
    }

    getById(id){}

    getAll(){
        try {
            fs.readFileSync(archivo).toString
        } catch (err) {
            throw new Error(`Error en la lectura: ${err.message}`)
        }
    }

    deleteById(id){}

    deleteAll(){
        try {
            fs.writeFileSync(archivo, '')
        } catch (err) {
            throw new Error(`Error en el borrado: ${err.message}`)
        }
    }
}
