# Lottery App 2

## 技術スタック

### バックエンド

- PHP 8.2
- Laravel 10.x
- MySQL 8.0

### フロントエンド

- React 18
- TypeScript
- Vite
- Inertia.js
- TailwindCSS

### 開発環境

- Laravel Sail (Docker)
- Docker Compose

## 必要な環境

- Docker & Docker Compose
- Node.js 18 以上
- Composer 2.5.8 以上

## セットアップ

### 1. プロジェクトのクローン

```bash
git clone <repository-url>
cd lottery-app2
```

### 2. 依存関係のインストール

```bash
composer install
```

### 3. 環境変数の設定

```bash
cp .env.example .env
```

### 4. Docker 環境の起動

```bash
./vendor/bin/sail up -d
```

### 5. アプリケーションキーの生成

```bash
./vendor/bin/sail artisan key:generate
```

### 6. データベースのマイグレーション

```bash
./vendor/bin/sail artisan migrate
```

### 7. Node.js の依存関係インストール

```bash
./vendor/bin/sail npm install
```

### 8. フロントエンドの開発サーバー起動

```bash
./vendor/bin/sail npm run dev
```

## 開発時の起動方法

### 1. Docker 環境の起動

```bash
./vendor/bin/sail up -d
```

### 2. フロントエンドの開発サーバー起動

```bash
./vendor/bin/sail npm run dev
```

アプリケーションは http://localhost にアクセスできます。

## データベース構成

- **loto6_results**: ロト 6 の結果データ
- **loto7_results**: ロト 7 の結果データ
- **miniloto_results**: ミニロトの結果データ
- **admins**: 管理者アカウント

## トラブルシューティング

### npm run dev が動かない場合

```bash
# コンテナに直接入って実行
docker exec -it lottery-app2-laravel.test-1 bash
npm run dev
```

### MySQL の接続エラーが発生する場合

```bash
# Docker環境を完全にリセット
./vendor/bin/sail down -v
./vendor/bin/sail up -d
```

### 環境変数の確認

```bash
# .envファイルの内容を確認
cat .env
```

## 開発用コマンド

```bash
# アプリケーションの停止
./vendor/bin/sail down

# ログの確認
./vendor/bin/sail logs

# データベースのリセット
./vendor/bin/sail artisan migrate:fresh

# キャッシュクリア
./vendor/bin/sail artisan cache:clear
./vendor/bin/sail artisan config:clear
./vendor/bin/sail artisan route:clear
./vendor/bin/sail artisan view:clear

# フロントエンドのビルド
./vendor/bin/sail npm run build

# テストの実行
./vendor/bin/sail test
```

## プロジェクト構成

```
lottery-app2/
├── app/                    # Laravel アプリケーション
│   ├── Http/Controllers/   # コントローラー
│   └── Models/            # モデル
├── database/              # データベース関連
│   ├── migrations/        # マイグレーション
│   └── seeders/          # シーダー
├── resources/
│   ├── react/            # React アプリケーション
│   │   ├── src/
│   │   │   ├── components/  # React コンポーネント
│   │   │   ├── pages/      # ページコンポーネント
│   │   │   └── types/      # TypeScript型定義
│   └── views/            # Blade テンプレート
├── routes/               # ルート定義
├── docker-compose.yml    # Docker設定
└── package.json         # Node.js依存関係
```
