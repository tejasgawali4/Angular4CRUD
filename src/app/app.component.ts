import { GalleryserviceService } from './gallery-module/shared/galleryservice.service';
import { result } from './gallery-module/gallery/result';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Prisms Communications';

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
