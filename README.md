# テンポスフードプレイス astro版

ローカルにクローンした際に最初に書きコマンドを入力
```
npm insall
```

## 🚀 構造図

以下のように配置しています:

```text
.
└── TENPOSFOODPLACE-ASTRO/
    ├── public/
    │   ├── asset/
    │   │   ├── css/
    │   │   ├── font/
    │   │   ├── images/
    │   │   ├── include/
    │   │   └── js/
    │   └── lp/
    │       ├── connect_telephone/
    │       ├── fudemojiya/
    │       ├── japan-travel-planner/
    │       ├── kaitori/
    │       ├── service/
    │       │   └── ad_service/
    │       └── tourism-volunteer/
    ├── src/
    │   ├── data/
    │   │   └── data.json(各ページの構造化マークアップ情報をjsonに格納)
    │   ├── components/
    │   │   ├── common(ヘッダー、フッター、サイド等の共通コンポーネント)/
    │   │   ├── FrontPage(トップページ専用のコンポーネント)/
    │   │   └── lp(各lp用のコンポーネント)/
    │   │       ├── connect_telephone/
    │   │       ├── fudemojiya/
    │   │       ├── japan-travel-planner/
    │   │       ├── kaitori/
    │   │       └── tourism-volunnteer/
    │   ├── layouts/
    │   │   ├── lp/
    │   │   ├── top/
    │   │   └── Layout.astro
    │   └── pages/
    │       ├── after_opening/
    │       ├── before_opening/
    │       ├── company/
    │       ├── contact/
    │       ├── cost/
    │       ├── hojokin/
    │       ├── hygiene/
    │       ├── lp/
    │       ├── management/
    │       ├── marketing/
    │       ├── menu/
    │       ├── news/
    │       ├── open/
    │       ├── privacypolicy/
    │       ├── promotion/
    │       ├── telecom/
    │       ├── sns-template（ビルドエラーになるため一時削除、別リポジトリにて保存)
    │       └── index.astro
    └── package.json
```


## コマンド

ローカル立ち上げ時、ビルド時は下記コマンドを入力

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | パッケージ、プラグイン等をインストール                  |
| `npm run dev`             | `localhost:4321`でローカル立ち上げ                  |
| `npm run build`           | `./dist/`に静的ファイルを出力->サーバーにアップ         |



# fp-astro
