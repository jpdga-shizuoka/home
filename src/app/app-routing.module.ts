import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'videos/letsplaydiscgolf', component: VideosComponent, data: {
    title: "ディスクゴルフ入門",
    description: `日本チャンピオン菊地哲也プロによる入門チャンネルをチェックしよう!
                  これを見たらもうコースデビューするしか無い! (Innova Japan提供)`,
    category: 'letsplaydiscgolf',
  }},
  { path: 'videos/thisisdiscgolf', component: VideosComponent, data: {
    title: "これがディスクゴルフだ",
    description: `世界的トップアスリートによる紹介ビデオだよ!
                  海外では多くのプロ選手が競技として戦っているんだ.
                  ルールなんて分からなくてもいい, 見てるだけでシビレル〜`,
    category: 'thisisdiscgolf',
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
