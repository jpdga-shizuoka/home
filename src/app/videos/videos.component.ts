import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { VideoSheetComponent } from '../video-sheet.component';

import { VIDEO } from '../models';

const VIDEOS = [{
  id: 'Mgg6jesKS_0',
  title: '予告編',
  subtitle: 'ディスクゴルフに行こうよ',
}, {
  id: 'jaWvwrMEQrk',
  title: '第1回',
  subtitle: 'ディスクゴルフを始めよう',
}, {
  id : 'AVxIhEL6tks',
  title: '第2回',
  subtitle: '注意事項と投げ方',
}, {
  id: '2U2BHHsGL7M',
  title: '第3回',
  subtitle: 'ディスクの選び',
}, {
  id: 'qUwTiWhX_jQ',
  title: '第4回',
  subtitle: 'ディスクの握り方',
}, {
  id: '95eKkpOF_Os',
  title: '第5回',
  subtitle: 'ストレートスロー',
}, {
  id: 'QrMLXdCmS68',
  title: '第6回',
  subtitle: 'ハイザースロー',
}, {
  id: '38H_2wrtgRE',
  title: '第7回',
  subtitle: 'アンハイザースロー',
}, {
  id: '4KPyhEuRGO4',
  title: '第8回',
  subtitle: 'パットの投げ方',
}, {
  id: 'Bumdj1p5H9A',
  title: '第9回',
  subtitle: 'コースのルール',
}, {
  id: 'zym3LNWAa_s',
  title: '第10回',
  subtitle: 'ウェアの選び方',
}];


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(
    private videoSheet: MatBottomSheet,
  ) {}

  ngOnInit(): void {
    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  get videos() {
    return VIDEOS;
  }

  getThumbnailUrl(video: VIDEO) {
    return `https://img.youtube.com/vi/${video.id}/0.jpg`;
  }

  onClick(video: VIDEO) {
    this.videoSheet.open(VideoSheetComponent, {
      data: video
    });
  }
}
