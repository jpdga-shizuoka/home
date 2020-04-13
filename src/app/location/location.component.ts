import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { LocationService } from '../location.service';
import { CourseLocation, DgaInfo } from '../models';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  locationSource: MatTableDataSource<CourseLocation>;
  dgaSource: MatTableDataSource<DgaInfo>;
  displayedColumns: string[] = ['name', 'address'];

  constructor(
    private locationService: LocationService,
  ) {
    this.locationSource = this.locationService.getLocations();
    this.dgaSource = this.locationService.dgaInfo;
  }
}
