import { Component, OnInit } from '@angular/core';
import { Blog} from '../models/Blog';
import {Title} from '@angular/platform-browser';
import {AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: Observable<any[]>;
  constructor(db : AngularFireDatabase, private title:Title) { 
    this.blog = db.list('Blogs').valueChanges();
  }

  ngOnInit() {
    this.title.setTitle("Darshan Patil - Blog");
  }

}
