import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private http: HttpClient, private data: DataService) { }

  posts$: Object;

  ngOnInit() {

    this.data.getPosts().subscribe(data => this.posts$ = data);
  }

}
