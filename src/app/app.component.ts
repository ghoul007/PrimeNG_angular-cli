import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {MenubarModule,MenuItem} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  cars = [];
  items: MenuItem[];

      ngOnInit() {
        this.cars = [{"name":"ahmed","age":28},{"name":"ismail","age":30}]
          this.items = [
              {
                  label: 'File',
                  items: [{
                          label: 'New',
                          icon: 'fa-plus',
                          items: [
                              {label: 'Project'},
                              {label: 'Other'},
                          ]
                      },
                      {label: 'Open'},
                      {label: 'Quit'}
                  ]
              },
              {
                  label: 'Edit',
                  icon: 'fa-edit',
                  items: [
                      {label: 'Undo', icon: 'fa-mail-forward'},
                      {label: 'Redo', icon: 'fa-mail-reply'}
                  ]
              }
          ];
      }
}
