# microCMS Webhook設定ガイド

このドキュメントでは、microCMSのWebhook機能を使用して、コンテンツ更新時にGitHub Actionsのビルドを自動実行する設定方法を説明します。

## 1. GitHub Personal Access Tokenの作成

1. GitHubにログインし、Settings > Developer settings > Personal access tokens > Tokens (classic)に移動
2. "Generate new token (classic)"をクリック
3. 以下の権限を付与：
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
4. トークンを生成し、安全な場所に保存

## 2. microCMSのWebhook設定

### 2.1 microCMS管理画面での設定

1. microCMSの管理画面にログイン
2. サービス設定 > API設定 > Webhook設定に移動
3. "Webhookを追加"をクリック
4. 以下の設定を行う：

```
Webhook名: GitHub Actions Trigger
URL: https://api.github.com/repos/{OWNER}/{REPO}/dispatches
HTTPメソッド: POST
```

### 2.2 リクエストヘッダーの設定

```
Content-Type: application/json
Authorization: token {YOUR_GITHUB_TOKEN}
Accept: application/vnd.github.v3+json
User-Agent: microCMS-Webhook
```

### 2.3 リクエストボディの設定

```json
{
  "event_type": "microcms-update",
  "client_payload": {
    "content_type": "{{content_type}}",
    "content_id": "{{content_id}}",
    "updated_at": "{{updated_at}}"
  }
}
```

## 3. 環境変数の設定

GitHub ActionsでmicroCMSの環境変数を使用するため、GitHub Secretsに以下を追加：

1. GitHubリポジトリのSettings > Secrets and variables > Actionsに移動
2. "New repository secret"をクリック
3. 以下のシークレットを追加：

```
MICROCMS_SERVICE_DOMAIN: your-service-domain
MICROCMS_API_KEY: your-api-key
```

## 4. ワークフローの動作確認

### 4.1 手動実行でのテスト

1. GitHubリポジトリのActionsタブに移動
2. "Deploy Astro site to Xserver"ワークフローを選択
3. "Run workflow"をクリックして手動実行

### 4.2 Webhookのテスト

1. microCMSでテスト用のコンテンツを作成・更新
2. GitHub Actionsでワークフローが自動実行されることを確認

## 5. トラブルシューティング

### 5.1 Webhookが実行されない場合

- GitHub Personal Access Tokenの権限を確認
- microCMSのWebhook設定でURLとヘッダーが正しく設定されているか確認
- GitHub Actionsのログでエラーメッセージを確認

### 5.2 ビルドエラーが発生する場合

- 環境変数が正しく設定されているか確認
- microCMSのAPIキーが有効か確認
- ネットワーク接続を確認

## 6. セキュリティ考慮事項

- GitHub Personal Access Tokenは定期的に更新
- 不要な権限は付与しない
- WebhookのURLは公開されるため、適切な認証を設定

## 7. 参考リンク

- [GitHub REST API - Repository Dispatches](https://docs.github.com/en/rest/repos/repos#create-a-repository-dispatch-event)
- [microCMS Webhook設定](https://document.microcms.io/manual/webhook-setting)
- [GitHub Actions - Events that trigger workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#repository_dispatch) 