import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { GoGamesComponent } from './go-games/go-games.component';
import { KoshukaiComponent } from './koshukai/koshukai.component';
import { VideosComponent } from './videos/videos.component';
import { LocationComponent } from './location/location.component';
import { SporecComponent } from './sporec/sporec.component';
import { OyakoComponent } from './oyako/oyako.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { metaDescription: {
      title: '静岡県ディスクゴルフ協会',
      description: 'ディスクゴルフ大好き人間を応援します',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,静岡,コース,講習',
  }}},
  { path: 'gogames', component: GoGamesComponent, data: { metaDescription: {
      title: '試合に出よう!',
      description: '試合は上達への早道',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,試合,大会',
  }}},
  { path: 'koshukai', component: KoshukaiComponent, data: { metaDescription: {
      title: 'ディスクゴルフ講習会',
      description: 'ディスクゴルフ愛好家を応援します',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,',
  }}},
  { path: 'about', component: AboutComponent, data: { metaDescription: {
      title: '静岡県ディスクゴルフ協会について',
      description: 'ディスクゴルフ大好き人間を応援します',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,ウェブサイト',
  }}},
  { path: 'privacy', component: PrivacyComponent, data: { metaDescription: {
      title: 'プライバシー•ポリシー',
      description: '静岡県ディスクゴルフ協会プライバシー•ポリシー',
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
                  <div class="container">
                    <a class="my-next-button" href="letsplaydiscgolf">
                      <span>次は:</span><span>ディスクゴルフ入門</span>
                    </a>
                    <a class="my-next-button" href="location">
                      <span>または:</span><span>コース案内</span>
                    </a>
                  </div>
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
      description: 'それはみんなの, 心地良いスポーツ.',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,ディスクゴルフ紹介',
    }
  }},
  { path: 'letsplaydiscgolf', component: VideosComponent, data: {
    title: 'ディスクゴルフ入門',
    description: `<p>
                    コースデビューはどうでしたか?
                    ここにたどり着いた方は,
                    ディスクゴルフにちょっぴりハマった方とお見受けいたしました.
                  </p>
                  <p>
                    そんなあなたは,
                    日本チャンピオンによるビデオ•レッスンで,
                    さらに上達の階段を登っていってください.
                  </p>
                  <p>
                    あわせて
                    <a target="_blank" rel="noopener" href="https://innova-hero.jp/discgolf/">
                      基本ルール
                    </a>をチェックすれば知識もバッチリ.
                    さらにこちらのビデオ
                    <a target="_blank" rel="noopener" href="https://www.nhk.or.jp/kokokoza/tv/karada/archive/chapter001.html">
                      体を動かすTV
                    </a>で実戦も完璧だ.
                  </p>
                  <div class="container">
                    <a class="my-next-button" href="thisisdiscgolf">
                      <span>次は:</span><span>これがディスクゴルフだ!</span>
                    </a>
                    <a class="my-next-button" href="koshukai">
                      <span>または:</span><span>講習会案内</span>
                    </a>
                  </div>
                  <p class="my-reference">(参照先:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCIT1UG20GhW2E23fPnM0Jtg">
                    INNOVA JAPAN Disc Golf TV
                    </a>)
                  </p>`,
    category: 'letsplaydiscgolf',
    metaDescription: {
      title: 'ディスクゴルフ入門',
      description: '日本チャンピオンによるディスクゴルフ•ビデオ•レッスンで上達間違いなし',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,ディスクゴルフ入門,ビデオ講座',
    }
  }},
  { path: 'thisisdiscgolf', component: VideosComponent, data: {
    title: 'これがディスクゴルフだ!',
    description: `<p>
                    ディスクゴルフが楽しいと思ってきたあなた.
                    そろそろ外の世界も覗いてみたい頃でしょう.
                    それでは世界のトップアスリートのプレーを見てみよう!
                  </p>
                  <div class="container">
                    <a class="my-next-button" href="majors">
                      <span>次は:</span><span>これがプロの世界だ!</span>
                    </a>
                  </div>
                  <p class="my-reference">(参照先:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com">
                      YouTube
                    </a>)
                  </p>`,
    category: 'thisisdiscgolf',
    metaDescription: {
      title: 'これがディスクゴルフだ!',
      description: 'トップアスリートによるディスクゴルフ競技ってスゴくね!',
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
                  <div class="container">
                    <a class="my-next-button" href="gogames">
                      <span>次は:</span><span>試合に出よう!</span>
                    </a>
                  </div>
                  <p class="my-reference">(参照先:
                    <a target="_blank" rel="noopener" href="https://www.youtube.com">
                      YouTube
                    </a>)
                  </p>`,
    category: 'majors',
    metaDescription: {
      title: 'これがディスクゴルフ•プロツアーだ!',
      description: '全てのディスクゴルファーが憧れるメジャー大会を紹介するね',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,トップアスリート,世界,メジャー,大会',
    }
  }},
  { path: 'location', component: LocationComponent, data: { metaDescription: {
      title: 'コース案内',
      description: '静岡県内と近県のディスクゴルフ•コース情報です',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,コース,ディスクゴルフコース',
  }}},
  { path: 'sporec', component: SporecComponent, data: { metaDescription: {
      title: '県民スポーツ•レクリエーション祭',
      description: '第27回 県民スポーツ•レクリエーション祭ご案内, 申込書',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,スポレク祭',
      image: 'sporec.jpg',
  }}},
  { path: 'oyako', component: OyakoComponent, data: { metaDescription: {
      title: '親子ディスクゴルフ大会',
      description: '富士山こどもの国,8月の限定イベント',
      keywords: '静岡県ディスクゴルフ協会,ディスクゴルフ,静岡県,親子大会',
      image: 'sport-rec.jpg',
  }}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
