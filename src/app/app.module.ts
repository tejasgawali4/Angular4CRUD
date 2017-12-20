import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery-module/gallery/gallery.component';
import { GalleryserviceService } from './gallery-module/shared/galleryservice.service';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      // {path: '', redirectTo: 'gallery', pathMatch: 'full'},
      { path : 'gallery', component : GalleryComponent },
      { path : 'home', component : GalleryComponent }
    ])
  ],
  providers: [GalleryserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
