import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../service/publicacion.service';
import { Publicacion } from '../../models/publicacion';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {

  publicacions: Publicacion;
  error: string;
  p: Number = 1;
  count: Number = 6;

  constructor(private publicacionService: PublicacionService) {}

  ngOnInit() {
    this.publicacionService.getPublicacions().subscribe(
      (data: Publicacion) => this.publicacions = data,
      error => this.error = error
    );
    window.scrollTo(0,0);
  }

}
