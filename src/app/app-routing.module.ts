import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'videos/whatsdiscgolf', component: VideosComponent, data: {
    title: "ディスクゴルフってなに?",
    description: `<p>誰にでもできるお遊びでもあり, そして競技としても楽しめる奥が深〜いスポーツだよ!
                  でも最初はみんな初心者, まずはビデオを見て様子を見てみよう.</p>
                  <p>おもしろそうって思ってくれました?</p>
                  <p>そしたら, さっそくコースに出かけよう!
                  周りの人にぶつけないように気を付けさえすれば,
                  こまかいルールなんて知らなくても大丈夫!</p>
                  <p>(提供:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCKRGfUYpPhad8UMv0n_RLOg">JPDGA Movie</a>,
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCgwRgfuy5_KxhRknzu7qqyg">CHUMSomotesando</a>)
                  </p>`,
    category: 'whatsdiscgolf',
  }},
  { path: 'videos/letsplaydiscgolf', component: VideosComponent, data: {
    title: "ディスクゴルフ入門",
    description: `<p>日本チャンピオン菊地哲也プロによる入門チャンネルをチェックしよう!
                  これを見たらもうコースデビューするしか無い!</p>
                  <p>(提供:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCIT1UG20GhW2E23fPnM0Jtg">INNOVA JAPAN Disc Golf TV</a>)
                  </p>`,
    category: 'letsplaydiscgolf',
  }},
  { path: 'videos/thisisdiscgolf', component: VideosComponent, data: {
    title: "これがディスクゴルフだ",
    description: `<p>世界的トップアスリートによる紹介ビデオだよ!
                  海外では多くのプロ選手が競技として戦っているんだ.
                  見てるだけでシビレル〜</p>`,
    category: 'thisisdiscgolf',
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
