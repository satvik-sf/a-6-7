import express from 'express';
const app = express();

import crudapis from './routes/main';
app.use('/', crudapis);

app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.listen(3000);