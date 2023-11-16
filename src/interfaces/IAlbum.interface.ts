import { IArtist } from "./IArtist.interface";

export interface IAlbum {
    id:number,
    title:string,
    year:number,
    image:string,
    artist:IArtist,
};