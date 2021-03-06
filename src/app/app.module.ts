import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ConsumoDatosComponent } from './core/consumo-datos/consumo-datos.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TablahtmlComponent } from './tablahtml/tablahtml.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatapickerComponent } from './datapicker/datapicker.component';
import { FiltrotabComponent } from './filtrotab/filtrotab.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';

import {TableModule} from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ConsumoDatosComponent,
    TablahtmlComponent,
    DatapickerComponent,
    FiltrotabComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    MatTooltipModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    RadioButtonModule,
    FileUploadModule,
    DropdownModule,
    RatingModule,
    MultiSelectModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
