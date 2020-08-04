//console.log('Hello World!');
import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World!'})
    {
    //console.log('Acessou a rota');
    //return response.send('Hello World!');
    /*
    console.log(request.body)

    const users = [
        { name: 'Diego', age: 25 },
        { name: 'Luís', age: 20 }
    ];
    return response.json(users);*/
    }
});

// http://localhost:33333
app.listen(3333);

