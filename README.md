# Next.js 13 チュートリアル作成　<Todoアプリケーション>

## 前提
- Next.js 13の理解のためのアプリケーション
- データ更新はjson-serverを利用(ローカルでのみ更新可能)
- 最小単位のCRUDアプリケーション

## 機能要件
- Create 書き込み
- Read 読み込み
- Update 更新
- Delete 削除

## Getting Started
```bash
npm i
npm run dev
```

## json-server Started
```bash
npm install -g json-server
npm run json-server
```

## API仕様
### エンドポイント
`const Url = 'http://localhost:3001/todos';`

### 型仕様
```ts
export type TodoTypes = {
    id: string;
    text: string;
}
```

## 最後にやってないこと
- バリデーション(空でも追加されます)
- デザイン(あくまでNext.js 13を理解するためのアプリケーション)
- Web上でのデータ更新(Web上で更新する場合はFirebaseやSpabaseを利用する)