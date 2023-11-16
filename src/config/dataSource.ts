import { DataSource } from "typeorm";
import { ArtistEntity } from "../entities/artist.entity";
import { AlbumEntity } from "../entities/album.entity";


export const appDataSource = new DataSource({
    type:'postgres',
    host:'localhost',
    port:5432,
    database:'cellaradio',
    username:'postgres',
    password:'postgres',
    synchronize:true,
    logging:true,
    entities:[ArtistEntity, AlbumEntity]
});