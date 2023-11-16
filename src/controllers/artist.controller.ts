import { ArtistDTO } from '../dtos/artist.dto';
import { ArtistService } from '../services/artist.service';
import { plainToClass } from 'class-transformer';
import { RequestHandler } from 'express';

export class ArtistController {


    private service:ArtistService;

    constructor(){
        this.service = new ArtistService();
    };

    getArtists:RequestHandler = async(req,resp)=>{
        resp.send(await this.service.getArtists());
    };

    getArtist:RequestHandler = async(req,resp)=>{
        const {id} = req.params
        resp.send(await this.service.getArtist(Number(id)));
    };

    createArtist:RequestHandler = async(req,resp)=>{
        const artistDto = plainToClass(ArtistDTO,req.body,{excludeExtraneousValues:true});
        if(req.file) artistDto.image = req.file.filename;
        let artist;
        try{
            artist = await this.service.createArtist(artistDto);
        } catch (error) {
            if(Array.isArray(error)){
                console.log(error);
                resp.status(400).send(error)
            } else{
                resp.status(500).send(error)
            };
        };
        resp.send(artist);
    };
};