import { Component, OnInit } from '@angular/core';
import { Financing } from '../../models/financing';
import { FinancingService } from '../../service/financing.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-financing',
  templateUrl: './financing.component.html',
  styleUrls: ['./financing.component.css']
})
export class FinancingComponent implements OnInit {


financings: Financing;
  error: string;

  constructor(private financingService: FinancingService,
              // tslint:disable-next-line: variable-name
              private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.financingService.getFinancings().subscribe(
      (data: Financing) => this.financings = data,
      error => this.error = error
    );
    window.scrollTo(0, 0);
  }

  getVideoIframe(url) {
    let video: any[];
    let results: any[];

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
}

}
