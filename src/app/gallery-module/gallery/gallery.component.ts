import { GalleryserviceService } from './../shared/galleryservice.service';
import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

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
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    constructor(private galleryserviceService: GalleryserviceService)
    // tslint:disable-next-line:one-line
    {
        this.galleryserviceService.createService().subscribe(
        data => this.handleSuccess(data),
        error => this.handleError(error),
        () => this.searching = false);
    }

    handleSuccess(data)
    // tslint:disable-next-line:one-line
    {
        this.imagesFound = true;
       this.images = data.result;
      // this.galleryImages = this.images;
      console.log('images length', this.images.length);
      this.galleryOptions = [
        {
            width: '600px',
            height: '400px',
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '600px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
    ];
     /* this.galleryImages = [
      {
          small: 'https://static.pexels.com/photos/111755/pexels-photo-111755.jpeg',
          medium: 'https://static.pexels.com/photos/111755/pexels-photo-111755.jpeg',
          big: 'https://static.pexels.com/photos/111755/pexels-photo-111755.jpeg'
      },
      {
        small: 'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg',
        medium: 'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg',
        big: 'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg'
    },
    {
      small: 'https://static.pexels.com/photos/34950/pexels-photo.jpg',
      medium: 'https://static.pexels.com/photos/34950/pexels-photo.jpg',
      big: 'https://static.pexels.com/photos/34950/pexels-photo.jpg'
  }
    ];*/
    for (let i = 0; i < this.images.length; i++) {
      this.galleryImages = [
        {
            small: this.images[i].snap,
            medium: this.images[i].snap,
            big: this.images[i].snap
        }
      ];
    }

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



}
}

// tslint:disable-next-line:class-name

