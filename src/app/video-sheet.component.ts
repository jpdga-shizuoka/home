import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { DeviceDetectorService } from 'ngx-device-detector';

import { VIDEO } from './models';

@Component({
  selector: 'video-sheet',
  template: `
    <div class="video-view">
        <youtube-player
          [videoId]="id"
          [width]="width"
          [height]="height"
          (stateChange)="onStateChange($event)">
        </youtube-player>
    </div>`,
  styles: [`
    .video-view {
      width: 100%;
      text-align: center;
      display: block;
    }`],
})
export class VideoSheetComponent {

  width = 640;
  height = 390;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public video: VIDEO,
    private deviceService: DeviceDetectorService,
    private bottomSheetRef: MatBottomSheetRef<VideoSheetComponent>,
  ) {
    if (this.deviceService.isMobile()) {
      this.width = 320;
      this.height = 195;
    }
  }

  get id() {
    return this.video.id;
  }

  //
  // https://developers.google.com/youtube/iframe_api_reference#Playback_status
  //
  onStateChange(event: any) {
    if (event?.data === 0) {
      this.bottomSheetRef.dismiss();
    }
  }
}
