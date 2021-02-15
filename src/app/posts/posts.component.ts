import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Object;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.GetPosts();
  }

  async GetPosts() {
    let response = await this.data.GetPosts();
    let data = await response.json();
    this.posts = data;
  }

}

