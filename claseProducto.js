class ClaseProducto {

    constructor(){
    }

    static id = 0;
    static productos = [
        {
        "id": 1,
        "name": "Escuadra",
        "price": 123.45,
        "thumbnail": "https://cdn3.iconfinder.com/data/icomns/education-209/64/ruler-triangle-stationary-school-256.png"
      },
      {
        "id": 2,
        "name": "Calculadora",
        "price": 234.56,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
      },
      {
        "id": 3,
        "name": "Globo Terráqueo",
        "price": 345.67,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geography-planet-school-256.png"
      }];

    async create(producto){
        try {
            ClaseProducto.id++;
            ClaseProducto.productos.push({id:ClaseProducto.id,...producto});
            return {
                "status":200,
                "message":"Producto guardado en el arreglo"
            };

        } catch (error) {
            return "Error al guardar el archivo";
        }
    }

    async getAll(){
        return ClaseProducto.productos;
    }

     getById(id){
        try {
            console.log("idbusca: ",id)
            console.log("buscaren: ",ClaseProducto.productos)

            const producto = ClaseProducto.productos.find(e=>e.id === id*1);
            //console.log("producto: ",producto)
            return producto;

        } catch (error) {
            console.log(error)
            return {"error":"producto no encontrado"};
        }
    }

    async deleteById(id){
        try {
            ClaseProducto.productos=ClaseProducto.productos.filter(elemento=>elemento.id !== id*1);
            return {
                "status":200,
                "message":`Producto eliminado del arreglo (id:${id})`
            };
        } catch (error) {
            //console.log("error al quitar elemento del arreglo")
            return "error al quitar elemento del arreglo";
            
        }
    }

}
module.exports = ClaseProducto;