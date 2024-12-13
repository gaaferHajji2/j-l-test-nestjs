import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

    getAll() {
        return "Get All Songs End-Point";
    }

    getById(id: number) {
        return "Get Song By Id End-Point: " + id;
    }

    create() {
        return "Create New Song End-Point";
    }

    update(id: number) {
        return "Update Song By Id End-Point: " + id;
    }

    delete(id: number) {
        return "Delete Song By Id End-Point: " + id;
    }

}
