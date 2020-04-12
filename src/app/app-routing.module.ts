import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { GoGamesComponent } from './go-games/go-games.component';
import { KoshukaiComponent } from './koshukai/koshukai.component';
import { VideosComponent } from './videos/videos.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { metaDescription: {
      title: '静岡県ディスクゴルフ協会',
      description: '静岡県ディスクゴルフ協会ウェブサイト',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県',
  }}},
  { path: 'gogames', component: GoGamesComponent, data: { metaDescription: {
      title: '試合に出よう!',
      description: 'ディスクゴルフの試合に出よう!',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,試合,大会',
  }}},
  { path: 'koshukai', component: KoshukaiComponent, data: { metaDescription: {
      title: 'ディスクゴルフ講習会について',
      description: '静岡県ディスクゴルフ協会による講習会について',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県',
  }}},
  { path: 'about', component: AboutComponent, data: { metaDescription: {
      title: '当ウェブサイトについて',
      description: '静岡県ディスクゴルフ協会のウェブサイトについて',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,ウェブサイト',
  }}},
  { path: 'privacy', component: PrivacyComponent, data: { metaDescription: {
      title: 'プライバシー•ポリシーについて',
      description: '静岡県ディスクゴルフ協会のプライバシー•ポリシー',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,プライバシーポリシー',
  }}},
  { path: 'whatsdiscgolf', component: VideosComponent, data: {
    title: 'ディスクゴルフってなに?',
    description: `<p>気軽にできる遊びであり, そして競技としても楽しめる奥が深〜いスポーツだよ!
                  まずはビデオで様子を見てみよう.</p>
                  <p>おもしろそうって思ってくれました?</p>
                  <p>そしたら, さっそくコースに出かけよう!
                  周りの人にぶつけないように気を付けさえすれば,
                  こまかいルールなんて知らなくても大丈夫!</p>
                  <a class="my-next-button" href="letsplaydiscgolf">
                    <span>次は:</span><span>ディスクゴルフ入門</span>
                  </a>
                  <p class="my-reference">(参照先:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCKRGfUYpPhad8UMv0n_RLOg">
                      JPDGA Movie
                    </a>,
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCgwRgfuy5_KxhRknzu7qqyg">
                      CHUMSomotesando
                    </a>)
                  </p>`,
    category: 'whatsdiscgolf',
    metaDescription: {
      title: 'ディスクゴルフってなに?',
      description: 'ディスクゴルフを紹介します',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,ディスクゴルフの紹介',
    }
  }},
  { path: 'letsplaydiscgolf', component: VideosComponent, data: {
    title: 'ディスクゴルフ入門',
    description: `<p>日本チャンピオン菊地哲也プロによるビデオ講座をチェックしよう!
                  これを見たらもうコースデビューするしか無い!</p>
                  <p class="my-small">あわせて:
                    <a target="_blank" rel="noopener" href="https://innova-hero.jp/discgolf/">
                      基本ルール (INNOVA JAPAN)
                    </a>
                  </p>
                  <p class="my-small">参考:
                    <a href="koshukai">ディスクゴルフ講習会のお知らせ</a>
                  </p>
                  <a class="my-next-button" href="thisisdiscgolf">
                    <span>次は:</span><span>これがディスクゴルフだ!</span>
                  </a>
                  <p class="my-reference">(参照先:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCIT1UG20GhW2E23fPnM0Jtg">
                      INNOVA JAPAN Disc Golf TV
                    </a>)
                  </p>`,
    category: 'letsplaydiscgolf',
    metaDescription: {
      title: 'ディスクゴルフ入門',
      description: 'ビデオ講座によるディスクゴルフ入門',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,ディスクゴルフ入門,ビデオ講座',
    }
  }},
  { path: 'thisisdiscgolf', component: VideosComponent, data: {
    title: 'これがディスクゴルフだ!',
    description: `<p>コースデビューしてもしなくても, 世界のトップアスリートのプレーをあらためて見てみよう!
                  オリンピック競技候補のウワサに上がるのも納得するしかない!
                  </p>
                  <a class="my-next-button" href="majors">
                    <span>次は:</span><span>これがプロの世界だ!</span>
                  </a>
                  <p class="my-reference">(参照先:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com">
                      YouTube
                    </a>)
                  </p>`,
    category: 'thisisdiscgolf',
    metaDescription: {
      title: 'これがディスクゴルフだ!',
      description: 'トップアスリートによるディスクゴルフ競技の紹介',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,トップアスリート',
    }
  }},
  { path: 'majors', component: VideosComponent, data: {
    title: 'これがプロの世界だ!',
    description: `<p>ゴルフと同じようにディスクゴルフにもプロツアーがあって,
                  たくさんの大会が世界中で行われているよ.</p>
                  <p>トップクラスの大会では, 週末の四日間を使って,
                  18ホールを1ラウンドとして1日1ラウンド行い,
                  計4ラウンド/72ホールで優勝を争うんだ.
                  日本の上位大会では, その72ホールをギュッと2日にまとめて競技するよ.
                  </p>
                  <p>またメジャーと呼ばれる大会もゴルフやテニスと同じようにあるんだ;</p>
                  <ul>
                    <li>USディスクゴルフ•チャンピオンシップ (通称USDGC)</li>
                    <li>PDGAワールド•ディスクゴルフ•チャンピオンシップ (通称Pro Worlds)</li>
                    <li>ヨーロッパ•オープン</li>
                  </ul>
                  <p>気が向いたらゴルフのテレビ中継のつもりで,
                  メジャー大会の決勝最終9ホールを見てみよう.
                  解説は英語だけどルールは簡単なので,
                  試合の様子, 雰囲気や醍醐味は伝わると思うんだ.
                  </p>
                  <a class="my-next-button" href="gogames">
                    <span>次は:</span><span>試合に出よう!</span>
                  </a>
                  <p class="my-reference">(参照先:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com">
                      YouTube
                    </a>)
                  </p>`,
    category: 'majors',
    metaDescription: {
      title: 'これがプロの世界だ!',
      description: '全てのプロディスクゴルファーが目指すメジャー大会の紹介',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,トップアスリート,世界,メジャー,大会',
    }
  }},
  { path: 'location', component: LocationComponent, data: { metaDescription: {
      title: 'コース案内',
      description: '県内と近県のディスクゴルフコース情報です',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,コース,ディスクゴルフコース',
  }}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
