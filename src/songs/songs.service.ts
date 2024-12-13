import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

    private songs: Array<string> = [];

    getAll() {
        // return "Get All Songs End-Point";

        return this.songs;
    }

    getById(id: number) {
        return this.songs.find((_, index) => index == id);
    }

    create(song: string) {
        this.songs.push(song);

        return this.songs;
    }

    update(id: number, t1: string) {
        let song = this.songs.find((_, index) => index == id);

        if(song == undefined) {
            return "No Song Found To Update";
        }

        this.songs[id] = t1;

        return this.songs;
    }

    delete(id: number) {
        let t1 = this.songs.find((_, index) => index == id);

        if(t1 == undefined) {
            return "No Song Found To Delete";
        }

        this.songs = this.songs.filter((song, index) => index != id);

        return this.songs;
    }

}
