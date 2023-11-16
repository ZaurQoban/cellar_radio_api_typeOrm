import {Expose} from 'class-transformer';
import { IsNotEmpty, IsString, IsOptional, IsNumberString } from 'class-validator';


export class AlbumDTO {
    @Expose()
    @IsString()
    @IsNotEmpty({message:'Title needed'})
    title!:string;

    @Expose()
    @IsNumberString()
    @IsNotEmpty({message:'Release year needed'})
    year!:number;
    
    @Expose()
    @IsOptional()
    image!:string;

    @Expose()
    @IsNumberString()
    @IsNotEmpty({message:'Artist needed'})
    artistId!:number;
};