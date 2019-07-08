import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  uri: string = 'http://www.omdbapi.com'
  constructor(private http: HttpClient) { }

  post(paylod: object, path: string = '', encript: boolean = false) {
    if (encript) {
      paylod = {}
    }
    return this.http.post(this.uri, paylod)
  }

  get(paylod: object) {
    let queryString = this.buildQureyString(paylod)
    return this.http.get(this.uri + queryString)
  }

  private buildQureyString(payload: object) {
    let queryString = Object.keys(payload)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(payload[key]))
      .join('&')
    return '?' + queryString
  }
}
