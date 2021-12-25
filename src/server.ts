import express from 'express';
import { router } from './router';
const app = express();
app.use(express.json());

app.use(router);

app.get("/", (request, response) => {
    return response.json({
        message: "Hello World"
    })
}).listen(8080, () =>  console.log('server running!'));