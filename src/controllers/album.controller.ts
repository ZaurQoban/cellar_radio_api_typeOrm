import { AlbumDTO } from '../dtos/album.dto';
import { AlbumService } from '../services/album.services';
import { plainToClass } from 'class-transformer';
import { RequestHandler } from 'express';

export class AlbumController {

    private service: AlbumService;

    constructor() {
        this.service = new AlbumService();
    };

    getAlbums: RequestHandler = async (req, resp) => {
        resp.send(await this.service.getAlbums());
    };

    getAlbum: RequestHandler = async (req, resp) => {
        try {
            const { id } = req.params;
            resp.send(await this.service.getAlbum(Number(id)));
        } catch (error) {
            if (Array.isArray(error)) {
                console.log(error);
                resp.status(400).send(error)
            } else {
                resp.status(500).send(error)
            };
        };
    };

    createAlbum: RequestHandler = async (req, resp) => {
        const albumDto = plainToClass(AlbumDTO, req.body, { excludeExtraneousValues: true });
        if (req.file) albumDto.image = req.file.filename;
        try {
            resp.send(await this.service.createAlbum(albumDto));
        } catch (error) {
            if (Array.isArray(error)) {
                console.log(error);
                resp.status(400).send(error)
            } else {
                resp.status(500).send(error)
            };
        };
    };

    editAlbum: RequestHandler = async (req, resp) => {
        const { id } = req.params;
        const albumtDto = plainToClass(AlbumDTO, req.body, { excludeExtraneousValues: true });
        if (req.file) albumtDto.image = req.file.filename;
        try {
            resp.send(await this.service.editAlbum(Number(id), albumtDto));
        } catch (error) {
            if (Array.isArray(error)) {
                console.log(error);
                resp.status(400).send(error)
            } else {
                resp.status(500).send(error)
            };
        };
    };

    deleteAlbum: RequestHandler = async (req, resp) => {
        try {
            const { id } = req.params;
            resp.send(await this.service.deleteAlbum(Number(id)));
        } catch (error) {
            if (Array.isArray(error)) {
                console.log(error);
                resp.status(400).send(error)
            } else {
                resp.status(500).send(error)
            };
        };
    };
};