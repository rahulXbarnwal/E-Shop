// const products = [];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // console.log('In another middleware!');
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true 
    });
}

exports.postAddProduct = (req, res, next) => {
    // products.push({title: req.body.title});
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
            // hasProducts: products.length > 0,
            // activeShop: true,
            // productCSS: true
        });
    })
}