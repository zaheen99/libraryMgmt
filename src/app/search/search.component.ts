import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { BookLibrary} from '../models/library.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  books: BookLibrary[];
  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    const book = this.libraryService.getLibraryDetails()
      .subscribe(res => this.books = res as any);
    console.log(book);
  }

}
