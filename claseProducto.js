class ClaseProducto {

    constructor(){
    }

    static id = 0;
    static productos = [{
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
            if(this.productos.length>0){
                
                productos.push(producto);
                await fs.promises.writeFile(this.filename, JSON.stringify(productos,null,2));
                //console.log("Se agrega nuevo producto al arreglo")
                
            }else{
                console.log("producto: ",producto)
                producto.id = ClaseProducto.id++;
                ClaseProducto.productos.push([...producto]);
                console.log("Se añade primer productoal arreglo ");
                
            }
            return "Producto guardado en el arreglo";

        } catch (error) {
            return "Error al guardar el archivo";
        }
    }

    async getAll(){
        return ClaseProducto.productos;
    }

    async getById(id){
        try {
            console.log("idbusca: ",id)
            console.log("buscaren: ",ClaseProducto.productos)

            const producto =  ClaseProducto.productos.find(e=>e.id === id);
            console.log("producto: ",producto)
            return producto;

        } catch (error) {
            return {"error":"producto no encontrado"};
        }
    }

    async deleteById(id){
        try {
            const newProducts = ClaseProducto.productos.filter(elemento=>elemento.id !== id);
            ClaseProducto.productos=newProducts;
            return "Producto eliminado";
        } catch (error) {
            //console.log("error al quitar elemento del arreglo")
            return "error al quitar elemento del arreglo";
            
        }
    }

}
module.exports = ClaseProducto;