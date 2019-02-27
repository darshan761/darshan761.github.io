import { Component, OnInit } from '@angular/core';
import {Project} from'../models/Project';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase,private title:Title) {
    this.items = db.list('Projects').valueChanges();
    //console.log(this.items);
  }

  ngOnInit() {
    this.title.setTitle("Darshan Patil - Projects")
  }

}
