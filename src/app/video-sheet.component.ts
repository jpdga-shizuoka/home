import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { VIDEO } from './models';

const MAX_VIDEO_WIDTH = 640;
const VIDEO_SIDE_PADDING = 16;

@Component({
  selector: 'app-video-sheet',
  template: `
    <div class="video-view">
        <youtube-player #player
          [videoId]="id"
          [width]="width"
          [height]="height"
          (ready)="onReady($event)"
          (stateChange)="onStateChange($event)">
        </youtube-player>
    </div>`,
})
export class VideoSheetComponent {
  @ViewChild('player') player: YouTubePlayer;
  width: number;
  height: number;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public video: VIDEO,
    private bottomSheetRef: MatBottomSheetRef<VideoSheetComponent>,
  ) {
      const width = window.innerWidth - VIDEO_SIDE_PADDING * 2;
      this.width = Math.min(MAX_VIDEO_WIDTH, width);
      this.height = this.width / 16 * 9;
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
  //
  //  @see https://developers.google.com/youtube/iframe_api_reference#Events
  //
  onReady(event: any) {
    this.player.playVideo();
  }
}
