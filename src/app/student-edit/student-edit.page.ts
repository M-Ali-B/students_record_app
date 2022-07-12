import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.page.html',
  styleUrls: ['./student-edit.page.scss'],
})
export class StudentEditPage implements OnInit {

  id: any;
  studName: string = "";
  fName: string = "";
  classNumber: string = "";
  phone: string = "";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private db: DbService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.db.getUser(this.id).then((res) => {
      console.log(res);
      this.studName = res['name'];
      this.fName = res['fname'];
      this.classNumber = res['class'];
      this.phone = res['phone'];
    })
  }

  ngOnInit() { }

  onUpdate() {
    this.db.updateUser(this.id, this.studName, this.fName, this.classNumber, this.phone).then(() => {
      this.router.navigate(['/student-create']);
    })
  }

}
