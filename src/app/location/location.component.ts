import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { LocationService } from '../location.service';
import { CourseLocation } from '../models';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locationSource: MatTableDataSource<CourseLocation>;
  displayedColumns: string[] = ['name', 'address'];

  constructor(
    private locationService: LocationService,
  ) {
    this.locationSource = this.locationService.getLocations();
  }

  ngOnInit(): void {
  }

}
