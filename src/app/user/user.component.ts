import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : Object;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.GetUsers();
  }

  async GetUsers() {
    let response = await this.data.GetUsers();
    let data = await response.json();
    this.users  = data;
  }

}
