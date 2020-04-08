import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { Observable } from 'rxjs';

import { VideosService } from '../videos.service';
import { VideoSheetComponent } from '../video-sheet.component';

import { VIDEO } from '../models';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Observable<VIDEO[]>;
  title: string;
  description: string;
  category: string;

  constructor(
    private route: ActivatedRoute,
    private videoSheet: MatBottomSheet,
    private videosService: VideosService,
  ) {
    const snapshot = this.route.snapshot;
    this.title = snapshot.data.title;
    this.description = snapshot.data.description;
    this.category = snapshot.data.category;
  }

  ngOnInit(): void {
    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this.videos = this.videosService.getVideos(this.category);
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
