import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { router } from './router';
const app = express();
app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
        message: err.message,
        });
    };

    return response.status(500).json({
         status: 'Internal server error',
         error: next(err)
})
});

app.listen(8080, () =>  console.log('server running!'));