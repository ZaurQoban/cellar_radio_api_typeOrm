import App from './app';
import 'reflect-metadata';
import cors from 'cors';
import logger from './middlewares/logger';
import { ArtistRouter } from './routes/artist.route';

const app = new App({
    port:8000,
    middlewares:[logger(),cors()],
    routers:[new ArtistRouter()]
});

app.listen();