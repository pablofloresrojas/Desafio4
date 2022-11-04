const express = require('express');
const { Router } = require('express');
const ClaseProducto = require("./claseProducto");

const app = express();

const PORT = 8080;

app.listen( PORT, ()=>{
    console.log(`Servidor escuchando el puerto: ${PORT}`);
})

const manejador = new ClaseProducto([]);
//console.log("manejador:  ",manejador);

const routerProductos = Router();

routerProductos.get("/",async(req,res)=>{
    const all = await manejador.getAll();
    console.log("todos: ",all);
    res.status(200).send(all);
});

routerProductos.get("/:id",async (req,res)=>{
    console.log("getProductoById: ",req.params.id);
    const resp = await manejador.getById(req.params.id);
    console.log("respuesta: ",resp)
    if(!resp)
        res.status(400).send({"error":"producto no encontrado"});
});

routerProductos.post("/",(req,res)=>{
    let producto = req.body;
    console.log("producto: ",producto)
   
})

routerProductos.put("/:id",(req,res)=>{
    console.log("updateProducto: ",req.params.id);
    res.send(`devolviendo producto actualizado ${req.params.id}`);
});

routerProductos.delete("/:id",async (req,res)=>{
    console.log("deleteProducto: ",req.params.id);
    const resp = await manejador.deleteById(req.params.id);
    res.send(`devolviendo producto eliminado ${resp}`);
});


app.use('/api/productos', routerProductos);