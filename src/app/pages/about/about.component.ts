import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'webpage-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  email: string = 'gabriel-rusu@outlook.com';
  subject: any;
  message: any;

  constructor() { }

  ngOnInit(): void {
  }

}
