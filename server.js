const express = require('express');
const { Router } = require('express');
const ClaseProducto = require("./claseProducto");
const bodyParser = require("body-parser");

const app = express();

const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))

app.listen( PORT, ()=>{
    console.log(`Servidor escuchando el puerto: ${PORT}`);
});


const manejador = new ClaseProducto([]);
//console.log("manejador:  ",manejador);

const routerProductos = Router();

routerProductos.get("/",async(req,res)=>{
    const all = await manejador.getAll();
    console.log("todos: ",all);
    res.status(200).send(all);
});

routerProductos.get("/:id",async (req,res)=>{
    const resp = await manejador.getById(req.params.id);
    if(!resp){
        res.status(400).send({"error":"producto no encontrado"});
    }else{
        res.status(200).json(resp)
    }
});

routerProductos.post("/",async (req,res)=>{
    try {
        const resp = await manejador.create(req.body);
        //console.log("create: ",resp)
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({"error":error});
    }
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