# シースタ コーチングページ

シースタ（seekerstart.com）の「コーチング」ページです。GitHub Pages で公開しています。

## ファイル

- `index.html` … ページの文章と構成
- `style.css` … 色・フォント・余白（シースタ本体と同じ値）

## 文章を直すとき

1. GitHub で `index.html` を開き、右上の鉛筆アイコン（Edit）を押す
2. `[料金]` `[コーチ名]` などの `[ ]` 部分を書き換える
3. 「Commit changes」を押すと、1〜2分で公開ページに反映されます

## 申し込み

- 申し込み・やりとり：公式LINE（https://lin.ee/7NI19sO）
- Googleフォームは一時停止中（URLは index.html の申し込みカード内のコメントに保存）

URLを変えるときは `index.html` の「申し込みカード」部分のリンクを書き換えてください。

## 練習環境 → 本番公開

いまは「限定公開」の練習環境です（URLを知っている人だけが見る想定）。

本番公開するときは：
1. `index.html` の `<meta name="robots" content="noindex, nofollow">` の行を削除
2. `robots.txt` を削除
3. シースタ本体のメニューに「コーチング」のリンクを追加
