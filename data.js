// テスラ実質価格シミュレーター — データ定義
// ★保守はこのファイルだけ編集すればOK。価格・補助金は変動するので last_updated も更新する。
// 出典: Tesla公式 / 次世代自動車振興センター(CEV) / 各自治体 / 各種メディア（2026-04〜06時点）
const DATA = {
  last_updated: "2026-06-22",

  // 紹介プログラム（新車Model 3/Yで割引・注文時に適用・後付け不可）
  referral: { discount: 35000, link: "https://ts.la/daisuke206564" },

  // 国のCEV補助金（2026年度）。Teslaは¥127万で確定。税抜840万円以上は×0.8減額だがTesla各車は対象外＝満額。
  cev: { max: 1270000, high_value_threshold_excl_tax: 8400000, high_value_factor: 0.8 },

  // ローン（0%金利キャンペーン前提。年数選択）
  finance: { apr: 0, years: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },

  // 維持費の前提値（TCO比較用）
  running: { yen_per_kwh: 31, yen_per_liter: 169.7, gas_km_per_l: 20 },

  // 車両（価格は変動・一部は推定。最新はTesla公式で要確認）
  models: [
    { id: "m3rwd", name: "Model 3 RWD",               price: 5313000, km_per_kwh: 6.5 },
    { id: "m3lr",  name: "Model 3 Long Range AWD",     price: 6200000, km_per_kwh: 6.4 },
    { id: "m3p",   name: "Model 3 Performance",        price: 7259000, km_per_kwh: 6.0 },
    { id: "myrwd", name: "Model Y RWD",                price: 5870000, km_per_kwh: 6.3 },
    { id: "mylr",  name: "Model Y Long Range AWD",     price: 6476000, km_per_kwh: 6.2 },
    { id: "myp",   name: "Model Y Performance",        price: 6979000, km_per_kwh: 5.9 },
    { id: "myl",   name: "Model Y L (3列6人乗り)",      price: 7490000, km_per_kwh: 5.8 }
  ],

  // 自治体補助（代表値。市区町村でさらに異なるため「要確認」を明記）
  // 自治体補助は条件で大きく変わる。subsidyはTeslaの代表的な額。詳細はnoteに明記（出典: 各自治体/2026-06時点）
  prefectures: [
    { name: "東京都", subsidy: 600000, note: "Teslaは基本¥60万(基本10万＋メーカー上乗せ50万)。太陽光/V2H/再エネ電力契約等の条件で最大¥100万。【増額予定】2026年度補正でEV最大¥130万へ拡充を審議中（2026-06-24以降に正式発表予定）" },
    { name: "神奈川県", subsidy: 0, note: "県・横浜/川崎とも個人の車両購入補助なし（国の補助のみ）。充電設備補助は別途。要確認" },
    { name: "愛知県（名古屋市）", subsidy: 100000, note: "名古屋市は外部給電機能ありEVで¥10万（給電機能必須）。県は主に事業用。市により異なる・要確認" },
    { name: "大阪府", subsidy: 0, note: "府・大阪市とも個人の車両購入補助なし（国の補助のみ）。市により異なる・要確認" },
    { name: "福岡県（福岡市）", subsidy: 100000, note: "福岡市はEV¥10万（再エネ電力契約で最大¥15万）。県独自なし・市により異なる・要確認" },
    { name: "その他の地域", subsidy: 0, note: "国の補助のみで試算。お住まいの自治体を要確認" }
  ]
};
