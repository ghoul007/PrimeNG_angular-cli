import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.css']
})
export class MaskComponent implements OnInit {
  val: any = "99999999";
  constructor() { }

  ngOnInit() {
  }

}
