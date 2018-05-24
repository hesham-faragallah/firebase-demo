import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  courses: any[];

constructor(db: AngularFireDatabase) {
  db.list('/courses')
    .subscribe(courses =>{
    this.courses=courses;
    console.log(this.courses);
  })
}

  ngOnInit() {
  }

}

//
// courses: any[];
// constructor(db:AngularFireDatabase) {
//   db.list('./courses').subscribe(courses =>{
//     this.courses=courses;
//     console.log(this.courses);
//   }
// }
