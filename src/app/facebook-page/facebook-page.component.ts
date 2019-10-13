import { Component, OnInit } from '@angular/core';

import { ScriptService } from '../script.service';

@Component({
  selector: 'app-facebook-page',
  styleUrls: ['./facebook-page.component.css'],
  template: `
    <mat-card class="facebook-card">
      <mat-card-content>
        <div class="fb-page"
            data-href="https://www.facebook.com/&#x9759;&#x5ca1;&#x770c;&#x30c7;&#x30a3;&#x30b9;&#x30af;&#x30b4;&#x30eb;&#x30d5;&#x5354;&#x4f1a;-106178680734223/"
            data-tabs="timeline"
            data-width=""
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false">
            <blockquote cite="https://www.facebook.com/&#x9759;&#x5ca1;&#x770c;&#x30c7;&#x30a3;&#x30b9;&#x30af;&#x30b4;&#x30eb;&#x30d5;&#x5354;&#x4f1a;-106178680734223/"
                class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/&#x9759;&#x5ca1;&#x770c;&#x30c7;&#x30a3;&#x30b9;&#x30af;&#x30b4;&#x30eb;&#x30d5;&#x5354;&#x4f1a;-106178680734223/">
                    静岡県ディスクゴルフ協会
                </a>
            </blockquote>
        </div>
      </mat-card-content>
    </mat-card>`,
})
export class FacebookPageComponent implements OnInit {

  constructor(
      // private script: ScriptService,
  ) {
      // this.script.load('facebook')
      // .then(data => {
      //     console.log('script loaded ', data);
      // })
      // .catch(error => console.log(error));
  }

  ngOnInit() {
  }

}
