import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

export interface VIDEO {
  id: string;
  title: string;
  subtitle: string;
}

export interface MetaData {
  title: string;
  type?: string;
  url?: string;
  image?: string;
  description?: string;
  keywords?: string;
}

export interface MetaDescription {
  ngActivatedRoute: ActivatedRoute;
  ngTitle: Title;
  ngMeta: Meta;
  ngRouter: Router;
}

export interface CourseLocation {
  name: string;
  city: string;
  prefecture: string;
  location: number[];
  website: string;
  description?: string;
  geoUrl?: string;
}

export interface DgaInfo {
  name: string;
  website: string;
}
