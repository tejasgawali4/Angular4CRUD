import { GalleryserviceService } from './../shared/galleryservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    images: any[];
    imagesFound = false;
    searching = false;
    errorMessage: String;

    constructor(private galleryserviceService: GalleryserviceService)
    // tslint:disable-next-line:one-line
    {

    }

    handleSuccess(data)
    // tslint:disable-next-line:one-line
    {
        this.imagesFound = true;
        this.images = data.result;
        console.log(data.result);
    }

    handleError(error)
    // tslint:disable-next-line:one-line
    {
      console.log(Error);
    }

    ngOnInit()
    // tslint:disable-next-line:one-line
    {
      console.log('ngOnInit cj');

      this.galleryserviceService.createService().subscribe(
        data => this.handleSuccess(data),
        error => this.handleError(error),
        () => this.searching = false);
    }

}

// tslint:disable-next-line:class-name

