import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {

    @Get()
    findAll(){
        return "Get All Songs";
    }

    @Get('/:id')
    findById(@Param('id') id: number) {
        return "Get Song By Id: " + id;
    }

    @Post()
    create(){
        return "Create New Song";
    }

    @Put("/:id")
    update(@Param('id') id: number) {
        return "Update Song BY Id: " + id;
    }

    @Delete("/:id")
    delete(@Param('id') id: number) {
        return "Delete Song By Id: " + id;
    }

}
