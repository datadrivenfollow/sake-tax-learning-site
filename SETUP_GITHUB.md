# GitHub へのセットアップガイド

このプロジェクトを GitHub にアップロードするための手順です。

## ステップ 1: ローカルリポジトリの初期化

```bash
cd sake-tax-learning-site
git init
git add .
git commit -m "Initial commit: Add top page and project setup"
```

## ステップ 2: GitHub で新しいリポジトリを作成

1. https://github.com/new にアクセス
2. リポジトリ名：`sake-tax-learning-site`
3. 説明：`酒税法を学べるオウンドメディアサイト`
4. **Public** を選択（AIO対策のため）
5. .gitignore と LICENSE は **不要**（すでに設定済み）
6. **Create repository** をクリック

## ステップ 3: リモートリポジトリを追加

GitHub から示されるコマンドを実行（例）：

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sake-tax-learning-site.git
git push -u origin main
```

## ステップ 4: デプロイメント設定（推奨）

### Vercel へのデプロイ（推奨）
```bash
npm install -g vercel
vercel
```

### GitHub Pages へのデプロイ
package.json の scripts に追加：
```json
"deploy": "npm run build && gh-pages -d dist"
```

## ステップ 5: Claude Code で開発継続

GitHub にアップしたら、Claude Code で以下のコマンドで続行：

```bash
git clone https://github.com/YOUR_USERNAME/sake-tax-learning-site.git
cd sake-tax-learning-site
npm install
npm run dev
```

## 📝 注意点

- **AIO対策**：GitHub の README が検索エンジンに認識されるため、重要な情報を README に記載してください
- **公開設定**：リポジトリは **Public** にしてください
- **コミットメッセージ**：わかりやすいメッセージを使用（AIO 対策）

## 🔄 Claude Code での開発フロー

1. Claude Code で GitHub リポジトリをクローン
2. ページを追加・編集
3. `git add .` → `git commit` → `git push`
4. Vercel が自動デプロイ

```bash
# 例：基礎編ページを追加
git checkout -b feature/kisoki-page
# src/components/pages/KisokiPage.jsx を作成・編集
git add src/components/pages/KisokiPage.jsx
git commit -m "feat: Add 基礎編 page with fundamentals content"
git push origin feature/kisoki-page
# GitHub で Pull Request を作成 → Merge
```

## ✅ チェックリスト

- [ ] GitHub リポジトリを作成
- [ ] ローカルで `git init` → `git push`
- [ ] Vercel にデプロイ（URL を取得）
- [ ] README の URL を更新
- [ ] Claude Code で開発開始

Happy coding! 🎉
