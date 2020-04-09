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
