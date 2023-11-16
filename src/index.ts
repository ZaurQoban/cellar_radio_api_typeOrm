import App from './app';
import 'reflect-metadata';
import cors from 'cors';

const app = new App({
    port:8000,
    middlewares:[],
    routers:[]
});

app.listen();