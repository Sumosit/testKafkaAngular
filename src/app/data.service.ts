import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts');
  }

  GetUsers() {
    return fetch('http://localhost:8080/api/test/all/users');
  }

  GetRates() {
    return fetch('http://localhost:8080/rates-list');
  }
}
