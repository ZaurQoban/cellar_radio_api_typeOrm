import {Expose} from 'class-transformer';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';


export class ArtistDTO {
    @Expose()
    @IsString()
    @IsNotEmpty({message:'Title needed'})
    title!:string;

    @Expose()
    @IsString()
    @IsNotEmpty({message:'Info needed'})
    info!:string;
    
    @Expose()
    @IsOptional()
    image!:string;
};