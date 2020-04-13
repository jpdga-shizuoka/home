import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { DeviceDetectorModule } from 'ngx-device-detector';

import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoSheetComponent } from './video-sheet.component';
import { AboutComponent } from './about/about.component';
import { VideosComponent } from './videos/videos.component';
import { GoGamesComponent } from './go-games/go-games.component';
import { KoshukaiComponent } from './koshukai/koshukai.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    AboutComponent,
    VideosComponent,
    VideoSheetComponent,
    GoGamesComponent,
    KoshukaiComponent,
    PrivacyComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    YouTubePlayerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatTableModule,
    MatTabsModule,
    MatBottomSheetModule,
    DeviceDetectorModule.forRoot(),
  ],
  entryComponents: [
    VideoSheetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
