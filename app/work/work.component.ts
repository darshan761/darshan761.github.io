import { Component, OnInit } from '@angular/core';
import { Work } from '../models/Work';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private title:Title,db: AngularFireDatabase) {
    this.items = db.list('Work').valueChanges();
   }

  ngOnInit() {
    this.title.setTitle("Darshan Patil - Work")
  }

}
