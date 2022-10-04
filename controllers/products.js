// const products = [];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // console.log('In another middleware!');
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

    res.render('add-product', {
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
    // res.send('<h1>Hello from Express!</h1>');
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // const products = adminData.products;
    Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    })
}