import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { MatSidenav } from '@angular/material/sidenav';
import {
  isHandset,
  subscribeMetaDescription,
  MetaDescription,
  Observable,
  Subscription,
} from '../utilities';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements MetaDescription, OnInit, OnDestroy {
  @ViewChild('drawer') drawer: MatSidenav;
  private metaSubscription: Subscription;
  isHandset$: Observable<boolean>;

  constructor(
    public ngActivatedRoute: ActivatedRoute,
    public ngTitle: Title,
    public ngMeta: Meta,
    public ngRouter: Router,
    breakpointObserver: BreakpointObserver,
  ) {
    this.isHandset$ = isHandset(breakpointObserver);
  }

  ngOnInit() {
    this.metaSubscription = subscribeMetaDescription(this);
  }

  ngOnDestroy() {
    if (this.metaSubscription) {
      this.metaSubscription.unsubscribe();
    }
  }

  onClickLink() {
    this.isHandset$.subscribe(result => {
      if (result) {
        this.drawer.close();
      }
    }).unsubscribe();
  }
}
