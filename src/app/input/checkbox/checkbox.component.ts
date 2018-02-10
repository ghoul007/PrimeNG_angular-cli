import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  msgs: any[];
  checked: any;
  status: any = true;
  constructor() { }

  ngOnInit() {
  }

  onChangeCheckbox() {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Checkbox status is changed'});
}

onChangeTristate() {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Tristate Checkbox status is changed'});
}

onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
}
}
