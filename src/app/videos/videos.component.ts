import {
  Component, OnInit, AfterViewInit, OnDestroy, ViewEncapsulation, Renderer2, ElementRef
} from '@angular/core';
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
export class VideosComponent implements OnInit, AfterViewInit, OnDestroy {
  private clickListeners: Array<() => void> = [];
  videos: Observable<VIDEO[]>;
  title: string;
  description: string;
  category: string;

  constructor(
    private router: Router,
    private videoSheet: MatBottomSheet,
    private videosService: VideosService,
    private route: ActivatedRoute,
    private el: ElementRef,
    private renderer: Renderer2,
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
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.videos = this.videosService.getVideos(this.category);
  }

  ngAfterViewInit(): void {
    freeListener(this.clickListeners);
    const anchorNodes: NodeList = this.el.nativeElement.querySelectorAll('a[href]');
    const anchors: Node[] = Array.from(anchorNodes);
    for (const anchor of anchors) {
      // Prevent losing the state and reloading the app by overriding the click event
      const listener = this.renderer.listen(anchor, 'click', (evt: MouseEvent) => this.onAnchorClick(evt));
      this.clickListeners.push(listener);
    }
  }

  ngOnDestroy(): void {
    freeListener(this.clickListeners);
  }

  getThumbnailUrl(video: VIDEO) {
    return `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
  }

  onClick(video: VIDEO) {
    this.videoSheet.open(VideoSheetComponent, {
      data: video
    });
  }

  /**
   * @see ✔︎ https://fpnotebook.wordpress.com/2017/05/22/angular-24-dynamic-content-woes/
   * @see   https://ja.coder.work/so/angular/924532
   * @see   https://stackoverflow.com/questions/59706767/cant-render-routerlink-in-innerhtml-in-angular
   * @see   https://stackoverflow.com/questions/44613069/angular4-routerlink-inside-innerhtml-turned-to-lowercase
   */
  onAnchorClick(event: MouseEvent) {
    if (event.currentTarget instanceof Element === false) {
      return;
    }
    const element = event.currentTarget as Element;
    const href = element.getAttribute('href');
    if (!href) {
      return; // not anchor tag
    }
    if (!element.getAttribute('target')) {
      // internal link
      this.router.navigate([href]);
    } else {
      // external link
      window.open(href, '_blank', 'noopener');
    }
    event.preventDefault();
  }
}

function freeListener(listners: Array<() => void>): void {
  for (const free of listners) {
    free();
  }
}
