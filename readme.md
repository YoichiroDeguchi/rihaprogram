# リハビリメニュー自動作成ツール

## DEMO
https://yoichirodeguchi.github.io/rihaprogram/

## 紹介と使い方

  - 質問回答に応じてリハビリプログラムを自動で作成してくれるツール。

  - 「作成スタート」から質問に順番に回答していくと最後に回答に応じたリハビリメニューが表示される。

  - 結果は「シート作成」ボタンで保存可能。TOPページのプロフィールシートから確認できる。

## 工夫した点

  - 利用する人が操作しやすいようにシンプルなデザインにした。

  - それぞれの質問に対し1つのリハビリメニューを紐づけて、回答画面に浮き上がるようにした。

  - 後からメニューを確認できるよう結果をプロフィールシートに保存できるようにした（リセットボタンあり）。

## 苦戦した点

  - ローカルストレージへの保存と別ページへの取得に苦戦し、コードがまとまらず散らかってしまった。

  - プロフィール画面に利用者一覧表を作りたかったが、結果のリスト化が難しく断念した。

  - 全部で32パターンの回答があり、すべての回答パターンを用意する必要があった（途中から道を変えれなかったので、その後のローカルストレージ取得、ボタン配置など全て32パターン作成した...）。

  - 今後実装したいこと｜①実際に施設スタッフが利用者にこれを使えるように、利用者ごとのプロフィール一覧を作れるようにしたい（カルテみたいなイメージ）

## 参考にした web サイトなど
  - ローカルストレージ：https://www.i-ryo.com/entry/2018/07/11/225107
  - HTMLでパラメータの受け渡し：https://web-camp.io/magazine/archives/103948
  - 画面を隠したり表示したり：https://www.webopixel.net/javascript/380.html