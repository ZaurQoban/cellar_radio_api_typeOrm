import { IRoute } from '../interfaces/IRoute.interface';
import { Router } from 'express';
import { upload } from '../middlewares/uploads';
import { AlbumController } from '../controllers/album.controller';


export class AlbumRouter implements IRoute{
    path:string='/albums';
    router:Router = Router();

    private controller:AlbumController;

    constructor(){
        this.controller = new AlbumController();
        this.init();
    }

    private init(){
        this.router.get('/',this.controller.getAlbums);
        this.router.get('/:id',this.controller.getAlbum);
        this.router.post('/', upload.single('image'),this.controller.createAlbum);
        this.router.put('/:id',upload.single('image'),this.controller.editAlbum);
        this.router.delete('/:id', this.controller.deleteAlbum);
    };
};