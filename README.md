# reif-platform-ui
REIF 食のクローズドマッチングプラットフォーム UI モックアップ

## english-island-quest/
中学1年英語（教科書 Unit 0〜5 の文法事項）を島めぐり形式で学ぶブラウザゲーム。`english-island-quest/index.html` をブラウザで開けば動く（ビルド不要・外部依存は Google Fonts のみ）。

ホーム画面に追加できるWebアプリ（manifest・オフライン用 service worker・アイコン）として作ってあり、アプリ内の「友だちに教える」からQRコードとリンクを配れる。

公開手順（GitHub Pages）: リポジトリの Settings → Pages → Source を「Deploy from a branch」、ブランチをこのゲームが入っているブランチ、フォルダを `/ (root)` にして Save。数分後に https://shuji0510.github.io/reif-platform-ui/english-island-quest/ で公開される。

## hikari-kage-museum/
中学1年美術の鑑賞（教科書 P.110〜113「レオナルド・ダ・ヴィンチ」「レオナルドの手稿」「明暗のドラマ」）を、ヒントクイズ・ならべかえ・技法ラボ・光のラボ・学芸員試験で楽しく覚えるブラウザゲーム「光とかげの美術館」。`hikari-kage-museum/index.html` をブラウザで開けば動く（ビルド不要）。作品の画像は載せず、色と光の配置を描いたイメージで表現している。PWA対応（ホーム画面に追加、オフライン可）、QRコード共有つき。
