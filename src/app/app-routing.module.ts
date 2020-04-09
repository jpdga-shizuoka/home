import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { GoGamesComponent } from './go-games/go-games.component';
import { KoshukaiComponent } from './koshukai/koshukai.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'gogames', component: GoGamesComponent },
  { path: 'koshukai', component: KoshukaiComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'whatsdiscgolf', component: VideosComponent, data: {
    title: "ディスクゴルフってなに?",
    description: `<p>誰にでもできるお遊びでもあり, そして競技としても楽しめる奥が深〜いスポーツだよ!
                  まずはビデオで様子を見てみよう.</p>
                  <p>おもしろそうって思ってくれました?</p>
                  <p>そしたら, さっそくコースに出かけよう!
                  周りの人にぶつけないように気を付けさえすれば,
                  こまかいルールなんて知らなくても大丈夫!</p>
                  <p>次は: <a href="letsplaydiscgolf">ディスクゴルフ入門</a></p>
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
  { path: 'letsplaydiscgolf', component: VideosComponent, data: {
    title: "ディスクゴルフ入門",
    description: `<p>日本チャンピオン菊地哲也プロによるビデオ講座をチェックしよう!
                  これを見たらもうコースデビューするしか無い!</p>
                  <p>次は: <a href="thisisdiscgolf">これがディスクゴルフだ</a></p>
                  <p>参考:
                    <ul>
                      <li>
                        <a target="_blank" rel="noopener" href="https://innova-hero.jp/discgolf/">
                          基本ルール (INNOVA JAPAN)
                        </a>
                      </li>
                      <li>
                        <a href="koshukai">ディスクゴルフ講習会のお知らせ</a>
                      </li>
                    </ul>
                  </p>
                  <p>(提供:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCIT1UG20GhW2E23fPnM0Jtg">
                      INNOVA JAPAN Disc Golf TV
                    </a>)
                  </p>`,
    category: 'letsplaydiscgolf',
  }},
  { path: 'thisisdiscgolf', component: VideosComponent, data: {
    title: "これがディスクゴルフだ!",
    description: `<p>コースデビューしてもしなくても, 世界のトップアスリートのプレーをあらためて見てみよう!</p>
                  <p>オリンピック競技候補に上がるのも納得のプレーばかり!
                  もう信じられな〜い!!
                  </p>
                  <p>次は: <a href="majors">これが世界だ</a>
                  </p>`,
    category: 'thisisdiscgolf',
  }},
  { path: 'majors', component: VideosComponent, data: {
    title: "これが世界だ!",
    description: `<p>ゴルフと同じようにディスクゴルフにもプロツアーがあって,
                  たくさんの大会が世界中で行われているよ.</p>
                  <p>週末の四日間を使って,
                  18ホールを1ラウンドとして1日1ラウンド行い,
                  計4ラウンド/72ホールで優勝を争う大会が欧米では多いね.</p>
                  <p>またメジャーと呼ばれる大会もゴルフやテニスと同じようにあるんだ;
                    <ul>
                      <li>USディスクゴルフ•チャンピオンシップ (通称USDGC)</li>
                      <li>PDGAワールド•ディスクゴルフ•チャンピオンシップ (通称Pro Worlds)</li>
                      <li>ヨーロッパ•オープン</li>
                    </ul>
                  </p>
                  <p>気が向いたらゴルフのテレビ中継のつもりで,
                  メジャー大会の決勝最終9ホールを見てみよう.
                  解説は英語だけどルールは簡単なので,
                  試合の様子, 雰囲気や醍醐味は伝わると思うんだ.
                  </p>
                  <p>次は: <a href="gogames">試合に出よう!</a></p>
                  <p>(提供:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel">
                      YouTube
                    </a>)
                  </p>`,
    category: 'majors',
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
