import { Component, OnInit } from '@angular/core';
import { Page } from '../../models/page';
import { PageService } from '../../service/page.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  pages: Page;
  error: string;

  constructor(private pageService: PageService,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.pageService.getMembership().subscribe(
      (data: Page) => this.pages = data,
      error => this.error = error
    );
    window.scrollTo(0,0);
  }

  getVideoIframe(url) {
    var video, results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);    
}


}
