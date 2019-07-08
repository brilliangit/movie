import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: object = {}
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  fetchMovie() {
    let payload = {
      'i': 'tt3896198',
      'apikey': '2681e8d8'
    }
    this.api.get(payload).subscribe(response => {
      if (response['Response'] === 'True') {
        this.movies = response;
      } else {
        
      }
    })
  }

}
