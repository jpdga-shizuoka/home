import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';

import { CourseLocation } from './models';
import COURSE_LOCATION from '../assets/models/course-location.json';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private courseLocation: MatTableDataSource<CourseLocation>;
  private appleDevice: boolean;

  constructor() {
    this.courseLocation = new MatTableDataSource<CourseLocation>();

    COURSE_LOCATION.forEach(a => {
      const loc = a as CourseLocation;
      loc.geoUrl = this.getGeoUrl(loc.location);
      this.courseLocation.data.push(loc);
    });
  }

  getLocations(): MatTableDataSource<CourseLocation> {
    return this.courseLocation;
  }

  getGeoUrl(location: number[]): string {
    return this.isAppleDevice
      ? `http://maps.apple.com/?ll=${location[0]},${location[1]}`
      : `https://maps.google.com/?q=${location[0]},${location[1]}`;
  }

  get isAppleDevice(): boolean {
    if (this.appleDevice) {
      return this.appleDevice;
    }
    this.appleDevice = /iPhone|iPad|Macintosh/.test(window.navigator.userAgent);
    return this.appleDevice;
  }
}
