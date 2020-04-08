import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { Observable } from 'rxjs';

import { VideosService } from '../videos.service';
import { VideoSheetComponent } from '../video-sheet.component';

import { VIDEO } from '../models';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VideosComponent implements OnInit {

  videos: Observable<VIDEO[]>;
  title: string;
  description: string;
  category: string;

  constructor(
    private router: Router,
    private videoSheet: MatBottomSheet,
    private videosService: VideosService,
    route: ActivatedRoute,
  ) {
    const snapshot = route.snapshot;
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
    return `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
  }

  onClick(video: VIDEO) {
    this.videoSheet.open(VideoSheetComponent, {
      data: video
    });
  }

  //
  // https://stackoverflow.com/questions/59706767/cant-render-routerlink-in-innerhtml-in-angular
  //
  @HostListener("click", ['$event'])
  onAnchorClick(event: MouseEvent) {
    // If we don't have an anchor tag, we don't need to do anything.
    if (event.target instanceof HTMLAnchorElement === false) {
      return;
    }
    // Prevent page from reloading
    event.preventDefault();
    const anchor = <HTMLAnchorElement>event.target;
    if (anchor.hostname != 'localhost') {
      // https://stackoverflow.com/questions/46147949/using-rel-noopener-in-window-open
      window.open(anchor.href, '_blank', 'noopener');
    } else {
      // Navigate to the path in the link
      this.router.navigate([anchor.pathname]);
    }
  }
}
