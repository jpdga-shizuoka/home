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
                  まずはビデオを見て様子を見てみよう.</p>
                  <p>おもしろそうって思ってくれました?</p>
                  <p>そしたら, さっそくコースに出かけよう!
                  周りの人にぶつけないように気を付けさえすれば,
                  こまかいルールなんて知らなくても大丈夫!</p>
                  <p>Next: <a href="videos/letsplaydiscgolf">ディスクゴルフ入門</a></p>
                  <p>(提供:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCKRGfUYpPhad8UMv0n_RLOg">
                      JPDGA Movie
                    </a>,
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCgwRgfuy5_KxhRknzu7qqyg">
                      CHUMSomotesando
                    </a>)
                  </p>`,
    category: 'whatsdiscgolf',
  }},
  { path: 'videos/letsplaydiscgolf', component: VideosComponent, data: {
    title: "ディスクゴルフ入門",
    description: `<p>日本チャンピオン菊地哲也プロによる入門チャンネルをチェックしよう!
                  これを見たらもうコースデビューするしか無い!</p>
                  <p>Next: <a href="videos/thisisdiscgolf">これがディスクゴルフだ</a></p>
                  <p>(提供:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCIT1UG20GhW2E23fPnM0Jtg">
                      INNOVA JAPAN Disc Golf TV
                    </a>)
                  </p>`,
    category: 'letsplaydiscgolf',
  }},
  { path: 'videos/thisisdiscgolf', component: VideosComponent, data: {
    title: "これがディスクゴルフだ",
    description: `<p>コースデビューしてもしなくても, 世界のトップアスリートのプレーをあらためて見てみよう!</p>
                  <p>オリンピック競技候補に上がるのも納得のプレーばかり!
                  もう信じられな〜い😱</p>`,
    category: 'thisisdiscgolf',
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
