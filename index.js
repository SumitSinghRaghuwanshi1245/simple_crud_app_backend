const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);




app.get('/', (req, res) => {
    console.log("hello from sumit")
    res.send("<h1>Hello from Node API server Updated!</h1>")
});



// app.get('/api/products', async (req, res) => {
//     try{
// const products = await Product.find({});
// res.status(200).json(products);
//     }
//     catch (error){
//         res.status(500).json({message: error.message});
//     }
// });


// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//        const product = await Product.findById(id);
//        res.status(200).json(product);

//     } catch (error){
//         res.status(500).json({message: error.message});
//     }
// })


// app.post('/api/products', async (req, res) => {
//     try {
//    const product = await Product.create(req.body);
//    res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });


// Update a product
// app.put('/api/products/:id', async (req, res) => {
//     try{
//         const {id} = req.params;

//         const product = await Product.findByIdAndUpdate(id, req.body);
        
//         if(!product){
//             return res.status(404).json({message: "Product not Found"});
//         }

//         const updateProduct = await Product.findById(id);
//          res.status(200).json(updateProduct);   

//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });



// Delete a Product

// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//        const product =  await Product.findByIdAndDelete(id);

//        if( !product){
//         return res.status(404).json({message: "Product not Found"});
//        }

//        res.status(200).json({message: "Product deleted successfully" });

//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })



mongoose.connect("mongodb+srv://sumittsinghr369:Sumitsr*1245@backenddb.rmio0.mongodb.net/")
.then(() => {
    console.log("Connected to Database! ");
    app.listen(2000, () => {
        console.log("Server is running on port 2000")
    });
    
})
.catch( () => {
    console.log('Connection failed!');
});
