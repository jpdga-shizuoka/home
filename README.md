![Build and Deploy](https://github.com/jpdga-shizuoka/home/workflows/Build%20and%20Deploy/badge.svg)

## はじめに

静岡県ディスクゴルフ協会が公開するウェブサイト•プロジェクトです.

## コンテンツの更新, 事前確認と公開サーバの更新手順

1. コンテンツの更新は, Gitマスタ•ブランチ以外のブランチで作業してください.
1. 以下の2通りの方法で、公開予定のコンテンツを事前確認してください.
```
$ ng serve --open
```
```
$ ng build
$ http-serve dist/home
```
1. 問題がなければGitにコミットし,
GitHubの機能を使ってマスタ•ブランチへプル•リクエストしてください.
1. GitHubの機能を使って上記プル•リクエストを受け付け,
Gitマスタ•ブランチへと更新内容を取り込んでください.
1. GitHubはマスタ•ブランチが更新されるたびに,
公開サーバを新しいコンテンツで更新します.

## 公開サーバの更新補足

マスタ•ブランチへコミットすることで, 公開サーバは自動的に更新されますが,
手動で更新したい場合, 以下の通りです.
```
$ ng deploy
```

## 公開サーバ•アドレス

* [https://jpdga-shizuoka.github.io/home](https://jpdga-shizuoka.github.io/home)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Author

KINOSHITA minoru
