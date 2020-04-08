import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { VIDEO } from './models';

import WHATS_DISCGOLF from '../assets/models/whats-discgolf.json';
import LETS_PLAY_DISCGOLF from '../assets/models/lets-play-discgolf.json';
import THIS_IS_DISCGOLF from '../assets/models/this-is-discgolf.json';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }

  getVideos(category: string): Observable<VIDEO[]> {
    switch(category) {
      case 'whatsdiscgolf':
        return of(WHATS_DISCGOLF);
      case 'letsplaydiscgolf':
        return of(LETS_PLAY_DISCGOLF);
      case 'thisisdiscgolf':
        return of(THIS_IS_DISCGOLF);
      default:
        return of([]);
    }
  }
}
