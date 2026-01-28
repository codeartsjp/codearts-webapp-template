# Canvas Game Template

Canvas ゲームアプリケーション用のテンプレートプロジェクト。

## 技術スタック

- **フレームワーク**: React 19 + Vite 6
- **言語**: TypeScript 5 (strict mode)
- **Canvas**: Konva.js + react-konva
- **状態管理**: Zustand
- **UI**: Mantine 8
- **音声**: Howler.js
- **PWA**: vite-plugin-pwa
- **コード品質**: Biome
- **テスト**: Bun + Testing Library
- **デプロイ**: Cloudflare Workers

## 開発コマンド

```bash
bun dev              # 開発サーバー起動
bun run build        # ビルド
bun test             # テスト実行
bun run lint         # Lint実行
bun run format       # フォーマット
bun run deploy:staging  # stagingデプロイ
bun run deploy       # productionデプロイ
```

## アーキテクチャパターン

### 音声システム (audio.ts)

遅延初期化 + 音量係数パターン:

```typescript
const SOUND_VOLUME = { CLICK: 0.3 } as const;
let clickSound: Howl | null = null;

function getClickSound(): Howl {
  if (!clickSound) {
    clickSound = new Howl({ src: ["/sounds/click.mp3"], ... });
  }
  return clickSound;
}
```

### Zustand 3フェーズ非同期パターン

```typescript
startGame: async () => {
  set({ isLoading: true });          // Phase 1: Loading
  const result = await fetchData();
  set({ data: result });
  await delay(600);                   // Phase 2: Display
  set({ isLoading: false });         // Phase 3: Ready
}
```

### モバイル対応

```typescript
// AudioContext再開（ユーザーインタラクション後）
export async function resumeAudioContext() {
  const ctx = Howler.ctx;
  if (ctx?.state === "suspended") await ctx.resume();
}
```

## ディレクトリ構成

```
src/
├── components/
│   ├── common/       # VolumeControl, FullscreenButton, LoadingScreen, VersionInfo
│   └── canvas/       # GameCanvas (Konva)
├── hooks/            # useFullscreen, useVolumeState, useImagePreload, useSoundPreload
├── store/            # game-store.ts, audio-store.ts (Zustand)
├── utils/            # audio.ts, storage.ts, canvas.ts
├── constants/        # storage.ts, audio.ts, game.ts
├── types/            # 型定義
├── layouts/          # RootLayout
└── pages/            # Game
```

## 状態管理

- **useGameStore**: ゲーム状態 (idle/loading/playing/paused/finished)、スコア
- **useAudioStore**: 音量、ミュート状態

## コンポーネント

- **GameCanvas**: Konva.js ベースの Canvas コンポーネント
- **VolumeControl**: 音量調整ポップオーバー
- **FullscreenButton**: 全画面切替ボタン
- **LoadingScreen**: ローディング画面
- **VersionInfo**: バージョン表示

## PWA設定

- `vite.config.ts` で vite-plugin-pwa 設定
- `public/icons/` に icon-192.png, icon-512.png を配置
- Service Worker によるオフラインキャッシュ

## CI/CD

- `main` push → staging デプロイ
- `v*` tag push → production デプロイ
- Cloudflare Workers Static Assets でホスティング
