import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
import { Gallery } from '../../models/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallerys: Gallery;
  error: string;

  p: Number = 1;
  count: Number = 5;

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.galleryService.getGallerys().subscribe(
      (data: Gallery) => this.gallerys = data,
      error => this.error = error
    );
    window.scrollTo(0,0);
  }

}
