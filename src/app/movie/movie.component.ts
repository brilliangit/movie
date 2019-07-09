import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: Array<object> = []
  title: string
  years: string
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.fetchMovie(false)
  }

  fetchMovie(search: boolean) {
    let payload = {
      'i': 'tt3896198',
      'apikey': '2681e8d8'
    }
    if (search) {
      payload['t'] = this.title
      payload['y'] = this.years
      this.movies = []
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
