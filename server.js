import express from 'express';
import './app/db';
import './app/models/Product';
import products from './app/routes/products';

let app = express();

app.param('sku', products.load);
app.get('/products', products.index);
app.post('/products/new', products.create);
app.post('/products/:sku', products.update);
app.get('/products/:sku', products.show);
app.del('/products/:sku', products.destroy);

app.listen(3000);

console.log('express listening on localhost:3000');
