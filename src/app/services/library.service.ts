import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LibraryService {
    constructor(private httpService: HttpClient) { }

    getLibraryDetails() {   
        return this.httpService.get('../../server/db.json');   
    }
   
}