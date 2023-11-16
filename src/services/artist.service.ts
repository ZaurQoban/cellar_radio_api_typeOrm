import { ArtistDTO } from '../dtos/artist.dto';
import { ArtistRepository } from '../repositories/artist.repository';
import { IArtist } from '../interfaces/IArtist.interface';
import { validate } from 'class-validator';
import { formatErrors } from '../helpers/formatError';

export class ArtistService {

    private repository: ArtistRepository;

    constructor() {
        this.repository = new ArtistRepository();
    };

    getArtists = async (): Promise<IArtist[]> => {
        return await this.repository.getArtists();
    };

    getArtist = async (id: number): Promise<IArtist> => {
        const artist = await this.repository.getArtist(id);
        if (artist) {
            return artist;
        } else throw new Error('No artist found');
    };

    createArtist = async (artistDto: ArtistDTO): Promise<IArtist> => {
        const errors = await validate(artistDto, {
            whitelist: true,
            validationError: { target: false, value: false }
        });
        if (errors.length) throw formatErrors(errors);
        return await this.repository.createArtist(artistDto);
    };

    editArtist = async (id: number, artistDto: ArtistDTO): Promise<IArtist> => {
        const errors = await validate(artistDto, {
            whitelist: true,
            validationError: { target: false, value: false }
        });
        if (errors.length) throw formatErrors(errors);
        return await this.repository.editArtist(id, artistDto);
    };

    deleteArtist = async (id: number): Promise<string> => {
        const artist = await this.repository.deleteArtist(id);
        let message = `Artist is deleted successfully`
        if (artist) {
            return message;
        } else throw new Error('No artist found to delete');
    };
};