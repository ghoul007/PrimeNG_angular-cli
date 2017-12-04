import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/primeng';
import {MenubarModule } from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { MaskComponent } from './input/mask/mask.component';
import {InputMaskModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    MaskComponent
  ],
  imports: [
    BrowserAnimationsModule, ButtonModule, MenubarModule,DataTableModule, SharedModule, InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
