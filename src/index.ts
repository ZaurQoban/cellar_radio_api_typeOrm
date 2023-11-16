import App from './app';
import 'reflect-metadata';
import cors from 'cors';
import logger from './middlewares/logger';
import { ArtistRouter } from './routes/artist.route';
import { AlbumRouter } from './routes/album.route';

const app = new App({
    port:8000,
    middlewares:[logger(),cors()],
    routers:[new ArtistRouter(), new AlbumRouter()]
});

app.listen();