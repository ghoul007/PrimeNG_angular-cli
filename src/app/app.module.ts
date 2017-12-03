import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/primeng';
import {MenubarModule } from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule, ButtonModule, MenubarModule,DataTableModule,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
