import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('artists')
export class ArtistEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    title!: string;
    @Column()
    info!: string;
    @Column()
    image!: string;
};