import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { ArtistEntity } from './artist.entity';

@Entity('albums')
export class AlbumEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    title!: string;
    @Column()
    year!: number;
    @Column()
    image!: string;
    @Column()
    artistId!:number;

    @ManyToOne(()=>ArtistEntity)
    @JoinColumn({name:'artistId'})
    artist!:ArtistEntity;
};