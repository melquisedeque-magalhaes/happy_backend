import express, { json } from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';

import Routes from './routes';
import HandleError from './errors/handler';

const app = express();

app.use(cors());
app.use(json());

app.use(Routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(HandleError);

app.listen(3333, () => {
    console.log('Bora Coda !!!');
});
