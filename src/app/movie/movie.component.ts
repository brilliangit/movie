import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: Array<object> = []
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.fetchMovie()
  }

  fetchMovie() {
    let payload = {
      'i': 'tt3896198',
      'apikey': '2681e8d8'
    }
    this.api.get(payload).subscribe(response => {
      if (response['Response'] === 'True') {
        for (let i = 0; i < 20; i++) {
          this.movies.push(response)
        }
      } else {

      }
    })
  }

}
