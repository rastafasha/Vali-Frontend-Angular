import { Component, OnInit } from '@angular/core';
import { SpecialtService } from '../../../service/specialt.service';
import { Specialt } from '../../../models/specialt';

@Component({
  selector: 'app-special-treatment',
  templateUrl: './special-treatment.component.html',
  styleUrls: ['./special-treatment.component.css']
})
export class SpecialTreatmentComponent implements OnInit {

  specialts: Specialt;
  error: string;

  constructor(private specialtService: SpecialtService) {}

  ngOnInit() {
    this.specialtService.getSpecialts().subscribe(
      (data: Specialt) => this.specialts = data,
      error => this.error = error
    );
    window.scrollTo(0,0);
  }
}
