import { appDataSource } from '../config/dataSource';
import { ArtistDTO } from '../dtos/artist.dto';
import { ArtistEntity } from '../entities/artist.entity';
import { IArtist } from '../interfaces/IArtist';
import { Repository } from 'typeorm';

export class ArtistRepository extends Repository<IArtist>{

    constructor(){
        super(ArtistEntity, appDataSource.createEntityManager());
    };

    async getArtists():Promise<IArtist[]>{
        return await this.find();
    };

    async getArtist(id:number):Promise<IArtist>{
        const artist = await this.findOne({
            where:{id}
        });
        if(!artist) {throw new Error('Artist not found')}
        return artist;
    };

    async createArtist(artistDto:ArtistDTO):Promise<IArtist>{
        const artist = await this.save(artistDto);
        return artist;
    };
};