// テスラ実質価格シミュレーター — データ定義
// ★保守はこのファイルだけ編集すればOK。価格・補助金は変動するので last_updated も更新する。
// 出典: Tesla公式 / 次世代自動車振興センター(CEV) / 各自治体 / 各種メディア（2026-04〜06時点）
const DATA = {
  last_updated: "2026-06-22",

  // 紹介プログラム（新車Model 3/Yで割引・注文時に適用・後付け不可）
  referral: { discount: 35000, link: "https://ts.la/daisuke206564" },

  // 国のCEV補助金（税抜840万円以上は80%に減額。Teslaは多くが満額対象）
  cev: { max: 1300000, high_value_threshold_excl_tax: 8400000, high_value_factor: 0.8 },

  // ローン（0%金利キャンペーン前提。年数選択）
  finance: { apr: 0, years: [1, 2, 3, 4, 5] },

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
  prefectures: [
    { name: "東京都",       subsidy: 600000, note: "国＋都。市区町村で更に上乗せの場合あり" },
    { name: "神奈川県",     subsidy: 0,      note: "市区町村による（例: 横浜は太陽光併設等の条件）。要確認" },
    { name: "愛知県",       subsidy: 0,      note: "市区町村による。要確認" },
    { name: "大阪府",       subsidy: 0,      note: "主に国の補助。要確認" },
    { name: "福岡県",       subsidy: 0,      note: "市区町村による。要確認" },
    { name: "その他の地域", subsidy: 0,      note: "国の補助のみで試算。お住まいの自治体を要確認" }
  ]
};
