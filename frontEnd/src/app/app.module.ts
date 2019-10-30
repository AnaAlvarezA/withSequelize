import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRouting } from './routes/routing';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { AdminComponent } from './components/admin/admin.component';
import { NewPhotoComponent } from './components/new-photo/new-photo.component';
import { EditPhotoComponent } from './components/edit-photo/edit-photo.component';
import { PhotoComponent } from './components/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListComponent,
    AdminComponent,
    NewPhotoComponent,
    EditPhotoComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationModule,
    AppRoutingModule,
    MatIconModule,
    HttpModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
