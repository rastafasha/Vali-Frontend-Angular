import { Component, OnInit } from '@angular/core';
import { WaxService } from '../../../service/wax.service';
import { Wax } from '../../../models/wax';

@Component({
  selector: 'app-waxmodal',
  templateUrl: './waxmodal.component.html',
  styleUrls: ['./waxmodal.component.css']
})
export class WaxmodalComponent implements OnInit {

  waxs: Wax;
  error: string;
  editorContent: string;
  flag = false;


  constructor(private waxService: WaxService
    ) {
    }

  ngOnInit() {
    this.waxService.getWaxs().subscribe(
      (data: Wax) => this.waxs = data,
      error => this.error = error
    );

    
  }


}


