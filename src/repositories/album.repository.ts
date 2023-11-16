import { appDataSource } from '../config/dataSource';
import { AlbumDTO } from '../dtos/album.dto';
import { AlbumEntity } from '../entities/album.entity';
import { IAlbum } from '../interfaces/IAlbum.interface';
import { Repository } from 'typeorm';

export class AlbumRepository extends Repository<IAlbum>{

    constructor(){
        super(AlbumEntity, appDataSource.createEntityManager());
    };

    async getAlbums():Promise<IAlbum[]>{
        return await this.find({relations:{artist:true}});
    };

    async getAlbum(id:number):Promise<IAlbum>{
        const album = await this.findOne({
            where:{id},
            relations:{artist:true},
        });
        if(!album) {throw new Error('Album not found')}
        return album;
    };

    async createAlbum(albumDto:AlbumDTO):Promise<IAlbum>{
        const album = await this.save(albumDto);
        return album;
    };

    async editAlbum(id:number, albumDto:AlbumDTO):Promise<IAlbum>{
        let album = await this.findOne({where:{id}});
        if(!album) {throw new Error('Album not found')};
        return await this.save({id, ...albumDto});
    };

    async deleteAlbum(id:number):Promise<string>{
        let album = await this.delete({id});
        if(!album) {throw new Error('Album not found')};
        return `Album was deleted successfully`;
    };
};