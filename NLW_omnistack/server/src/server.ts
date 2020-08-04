//console.log('Hello World!');
import express from 'express';
import routes from './routes'

const app = express();
app.use(express.json());
app.use(routes);

// http://localhost:33333
app.listen(3333);

