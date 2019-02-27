import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from "@angular/router";
import {AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  slug = '';
  blog: Observable<any[]>;
  constructor(private title:Title,private route: ActivatedRoute,db : AngularFireDatabase) {
    this.route.params.subscribe(params => {
        this.slug = params['slug']
    });
    this.blog = db.list('Blogs',  ref => ref.orderByChild('Title').equalTo(this.slug)).valueChanges();
   }

  ngOnInit() {
    this.title.setTitle('Darshan Patil - '+ this.slug)
    
  }

}
