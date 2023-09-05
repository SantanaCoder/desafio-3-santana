

const express = require('express')
const app = express()
const PORT = 8080


const productos = [
    {id: "1", title:"guitarra electrica", category: "cuerdas"},
    {id: "2", title:"guitarra acustica", category: "cuerdas"},
    {id: "3", title:"guitarra electroacustica nylon", category: "cuerdas"},
    {id: "4", title:"guitarra electroacustica acero", category: "cuerdas"},
    {id: "5", title:"bajo electrico", category: "cuerdas"},
    {id: "6", title:"bajo electroacustico", category: "cuerdas"},
    {id: "7", title:"bateria", category: "percusion"},
    {id: "8", title:"pandero", category: "percusion"},
    {id: "9", title:"armonica", category: "vientos"},
    {id: "10", title:"melodica", category: "vientos"}

]



        
        setTimeout(() => {
            app.get('/', async (req, res) =>{
    
                const allpProducts = res.send(productos)
            })
        })

 


app.get('/productos/:idProduct', (req, res)=>{
    let idProduct = req.params.idProduct
    let producto= productos.find(u=>u.id === idProduct)
    if(!producto) return res.send({error:"error alencontrar el producto"})

    res.send({producto})
})


app.get('/category', (req, res)=>{
    let category = req.query.category
    if(!category){
        return res.send({error:"no existe la categoria"})
    }
    else{
        let categoriaDeProductos = productos.filter(u=>u.category === category)
        if(categoriaDeProductos.length === 0) {
            return res.send({error:"no existe producto en esa categrial"})
        }
        res.send({categoriaDeProductos})
    }

    
})

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})

