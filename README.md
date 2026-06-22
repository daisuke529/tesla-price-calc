# tesla-price-calc

テスラ実質価格シミュレーター（静的Webツール・GitHub Pages・¥0）。
車種/都道府県/頭金/ローン年数 → 実質価格＋月々支払い＋5年TCO を自動計算。紹介コード¥35,000割引を組込み、結果から紹介リンクへ誘導。

- 公開URL（予定）: https://daisuke529.github.io/tesla-price-calc/
- 紹介リンク: https://ts.la/daisuke206564
- 関連: X運用 `work/tesla-x-bot/` / プラン `~/.claude/plans/tesla-x-shimmering-moon.md` §11

## 構成
- `index.html` … UI＋計算ロジック＋SEO（title/meta/FAQ schema）
- `data.js` … 価格・補助金・単価・紹介額・**最終更新日**（★保守はここだけ編集）
- `README.md`

## 保守（重要）
価格・補助金は変動する。**`data.js` を編集し `last_updated` も更新**するだけ。
- Tesla価格: https://www.tesla.com/ja_jp/model3 等で随時
- CEV補助金: 次世代自動車振興センター（毎年4月）
- 自治体補助: 各自治体サイト（予算枯渇あり）

## 方針
- 計算は**概算**。全画面に免責＋最終更新日を表示し、実額はTesla公式見積で確認、と明記。
- **有料広告でこのツール/リンクを宣伝しない**（Tesla規約の唯一の地雷）。オーガニックな共有のみ。

## デプロイ
GitHub Pages（Settings → Pages → Deploy from branch: main / root）。push で自動反映。
