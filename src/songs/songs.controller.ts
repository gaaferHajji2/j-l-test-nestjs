import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor(private songsService: SongsService) {

    }

    @Get()
    findAll(){
        return this.songsService.getAll();
    }

    @Get('/:id')
    findById(@Param('id') id: number) {
        return this.songsService.getById(id);
    }

    @Post()
    create(){
        return this.songsService.create();
    }

    @Put("/:id")
    update(@Param('id') id: number) {
        return this.songsService.update(id);
    }

    @Delete("/:id")
    delete(@Param('id') id: number) {
        return this.songsService.delete(id);
    }

}
