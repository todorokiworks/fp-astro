# テンポスフードプレイス astro版

ローカルにクローンした際に最初に書きコマンドを入力
```
npm install
```

## microCMS設定

このプロジェクトはmicroCMSと連携しており、お知らせ機能を動的に表示します。

### 1. 環境変数の設定

プロジェクトルートに`.env`ファイルを作成し、以下の内容を設定してください：

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

- `MICROCMS_SERVICE_DOMAIN`: microCMSのサービスドメイン（例：`example`）
- `MICROCMS_API_KEY`: microCMSのAPIキー（例：`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`）

**重要**: `.env`ファイルは`.gitignore`に含まれており、Gitにコミットされません。本番環境では適切に環境変数を設定してください。

### 3. 自動デプロイ設定（オプション）

microCMSのコンテンツ更新時に自動的にビルド・デプロイを実行するには、Webhook設定が必要です。

詳細な設定手順は [`docs/microcms-webhook-setup.md`](./docs/microcms-webhook-setup.md) を参照してください。

### 2. microCMSのコンテンツ設定

microCMSで以下のコンテンツタイプを作成してください：

**コンテンツタイプ名**: `news`

**フィールド設定**:
- `title` (テキストフィールド): お知らせのタイトル
- `content` (リッチエディタ): お知らせの本文
- `publishedAt` (日時): 公開日時（自動設定）
- `updatedAt` (日時): 更新日時（自動設定）

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
