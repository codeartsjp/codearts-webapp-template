# Canvas Game Template

Canvas ゲームアプリケーション用のテンプレートプロジェクト。Konva.js、Zustand、Mantine を使用した PWA 対応のゲームフレームワーク。

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | React + Vite |
| 言語 | TypeScript |
| Canvas | Konva.js + react-konva |
| 状態管理 | Zustand |
| UI | Mantine |
| 音声 | Howler.js |
| PWA | vite-plugin-pwa |
| コード品質 | Biome |
| テスト | Bun + Testing Library |
| デプロイ | Cloudflare Workers |

## セットアップ

```bash
bun install
```

## 開発

```bash
bun dev
```

## テスト

```bash
bun test
bun test --coverage
```

## ビルド

```bash
bun run build
bun run preview  # ビルド結果のプレビュー
```

## デプロイ

```bash
bun run deploy:staging  # staging環境
bun run deploy          # production環境
```

## プロジェクト構造

```
src/
├── components/
│   ├── common/          # 共通UIコンポーネント
│   │   ├── FullscreenButton/
│   │   ├── LoadingScreen/
│   │   ├── VersionInfo/
│   │   └── VolumeControl/
│   └── canvas/          # Konva Canvasコンポーネント
│       └── GameCanvas/
├── hooks/               # カスタムフック
├── store/               # Zustand ストア
├── utils/               # ユーティリティ関数
├── constants/           # 定数定義
├── types/               # 型定義
├── layouts/             # レイアウトコンポーネント
├── pages/               # ページコンポーネント
├── App.tsx
├── main.tsx
├── theme.tsx
├── version.ts
└── global.css
```

## PWAアイコン

`public/icons/` に以下のファイルを配置：

- `icon-192.png` (192x192)
- `icon-512.png` (512x512)

## 音声ファイル

`public/sounds/` に以下のファイルを配置：

- `click.mp3`
- `success.mp3`
- `error.mp3`

## CI/CD

- **Staging**: `main` ブランチへの push で自動デプロイ
- **Production**: `v*` タグの push で自動デプロイ

必要な Secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## ライセンス

Private
