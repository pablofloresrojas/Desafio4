class ClaseProducto {

    constructor(){
    }

    static id = 0;
    static productos = [];

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

    async update(id,producto){
        try {

            const idx = ClaseProducto.productos.findIndex(e=>e.id === id*1);

            ClaseProducto.productos[idx].name=producto.name;
            ClaseProducto.productos[idx].price=producto.price;
            ClaseProducto.productos[idx].thumbnail=producto.thumbnail;

            return {
                "status":200,
                "message":"Producto actualizado"
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
            const producto = ClaseProducto.productos.find(e=>e.id === id*1);
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