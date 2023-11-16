import {Expose} from 'class-transformer';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';


export class ArtistDTO {
    @Expose()
    @IsNotEmpty({message:'Title needed'})
    title!:string;

    @Expose()
    @IsNotEmpty({message:'Info needed'})
    info!:string;
    
    @Expose()
    @IsOptional()
    image!:string;
};