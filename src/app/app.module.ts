import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import {DropdownModule, TriStateCheckboxModule,  CheckboxModule,   ButtonModule,  GrowlModule, MultiSelectModule, CalendarModule, PasswordModule, SelectButtonModule, ChartModule} from 'primeng/primeng';
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
import { CheckboxComponent } from './input/checkbox/checkbox.component';
import { DropdownComponent } from './input/dropdown/dropdown.component';
import { CalendarComponent } from './input/calendar/calendar.component';
import { PasswordComponent } from './input/password/password.component';
import { ChartComponent } from './input/chart/chart.component';

@NgModule({
  declarations: [AppComponent, MaskComponent, AutoCompleteComponent, ShipsComponent, CheckboxComponent, DropdownComponent, CalendarComponent, PasswordComponent, ChartComponent],
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
    ChipsModule,
    CheckboxModule,
    TriStateCheckboxModule,
    GrowlModule,
    DropdownModule,
    MultiSelectModule,
    CalendarModule,
    PasswordModule,
    SelectButtonModule,
    ChartModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
