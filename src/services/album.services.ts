import { validate } from 'class-validator';
import { formatErrors } from '../helpers/formatError';
import { AlbumRepository } from '../repositories/album.repository';
import { IAlbum } from '../interfaces/IAlbum.interface';
import { AlbumDTO } from '../dtos/album.dto';

export class AlbumService {

    private repository: AlbumRepository;

    constructor() {
        this.repository = new AlbumRepository();
    };

    getAlbums = async (): Promise<IAlbum[]> => {
        return await this.repository.getAlbums();
    };

    getAlbum = async (id: number): Promise<IAlbum> => {
        const album = await this.repository.getAlbum(id);
        if (album) {
            return album;
        } else throw new Error('No album found');
    };

    createAlbum = async (albumDto: AlbumDTO): Promise<IAlbum> => {
        const errors = await validate(albumDto, {
            whitelist: true,
            validationError: { target: false, value: false }
        });
        if (errors.length) throw formatErrors(errors);
        return await this.repository.createAlbum(albumDto);
    };

    editAlbum = async (id: number, albumDto: AlbumDTO): Promise<IAlbum> => {
        const errors = await validate(albumDto, {
            whitelist: true,
            validationError: { target: false, value: false }
        });
        if (errors.length) throw formatErrors(errors);
        return await this.repository.editAlbum(id, albumDto);
    };

    deleteAlbum = async (id: number): Promise<string> => {
        const album = await this.repository.deleteAlbum(id);
        let message = `Album is deleted successfully`
        if (album) {
            return message;
        } else throw new Error('No album found to delete');
    };
};