import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { ButtonModule } from "primeng/primeng";
import { MenubarModule } from "primeng/primeng";
import { DataTableModule, SharedModule } from "primeng/primeng";
import { MaskComponent } from "./input/mask/mask.component";
import { InputMaskModule } from "primeng/primeng";
import { AutoCompleteComponent } from "./input/auto-complete/auto-complete.component";
import { AutoCompleteModule } from "primeng/primeng";
import { FormsModule } from "@angular/forms";
import { CountriesService } from "./countries.service";
import Country from "./country";
import { ShipsComponent } from './input/ships/ships.component';
import {ChipsModule} from 'primeng/primeng';


@NgModule({
  declarations: [AppComponent, MaskComponent, AutoCompleteComponent, ShipsComponent],
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ButtonModule,
    MenubarModule,
    DataTableModule,
    SharedModule,
    InputMaskModule,
    AutoCompleteModule,
    ChipsModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
