import { IRoute } from '../interfaces/IRoute.interface';
import { Router } from 'express';
import { upload } from '../middlewares/uploads';
import { ArtistController } from '../controllers/artist.controller';


export class ArtistRouter implements IRoute{
    path:string='/artists';
    router:Router = Router();

    private controller:ArtistController;

    constructor(){
        this.controller = new ArtistController();
        this.init();
    }

    private init(){
        this.router.get('/',this.controller.getArtists);
        this.router.get('/:id',this.controller.getArtist);
        this.router.post('/', upload.single('image'),this.controller.createArtist);
        this.router.put('/:id',upload.single('image'),this.controller.editArtist);
        this.router.delete('/:id', this.controller.deleteArtist);
    };
};