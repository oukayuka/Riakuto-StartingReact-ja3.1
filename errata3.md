<!-- markdownlint-disable MD010 MD029 MD032 -->

# 『りあクト！ TypeScript で始めるつらくない React 開発 &nbsp;第 3.1 版』第 3 刷の正誤表・更新情報

最終更新日： 2022 年 6 月 28 日

### ご注意点

- この正誤表は 2021 年 9 月 10 日に発行された**第 3 刷**の内容をベースにしています。第 1 刷をお持ちの場合は[こちら](errata.md)、第 2 刷をお持ちの場合は[こちら](errata2.md)ご覧ください。お手持ちの本がどれに該当するかは、最後の奥付けのページに記載されています。
- 正誤表の内容は随時アップデートされます。
- 記述しているページ番号は、紙の第 3 刷に対応していますが、電子版では内容の更新によりお持ちのバージョンによって前後することがあります。
- 電子版については随時、修正やアップデートが反映された新しいバージョンが配信されます。購入先のサイトをご確認ください。なお現時点での最新版は以下の通りです。
  - 【Ⅰ. 言語・環境編】バージョン 3.0.2（2021-09-18）
  - 【Ⅱ. React 基礎編】バージョン 3.0.0（2021-09-20）
  - 【Ⅲ. React 応用編】バージョン 3.0.0（2021-09-30）

### 電子版のバージョニングについて

- **整数の位** …… 紙の本の「刷」番号に対応しています。「電子版バージョン 2.0.0」であれば、紙の本の「第 2 刷」の内容と完全に一致します
- **小数点第 1 位** …… メジャーバージョン番号。各技術のアップデートや情勢の変化に合わせて内容が更新されたときに変更されます
- **小数点第 2 位** …… マイナーバージョン番号。誤植の修正があったときに変更されます

<br />

## 【Ⅰ. 言語・環境編】

- 1-1 / p.23 / コマンドサンプル

```diff
- $ mkdir -p "$(nodenv root)"/plugins
+ $ mkdir -p "$(nodenv root)/plugins"
```

- 1-1 / p.25 / 脚注

```diff
- 27 「RLead-Eval-Print Loop」の略で、
+ 27 「Read-Eval-Print Loop」の略で、
```

- 1-3 / p.46

```diff
- ・postuninstall …… パッケージがアンインストールされた後に実行される
```

- 2-3 / p.63

```diff
  ・正規表現リテラル
-   …… `/pattern/frags` の形式で記述する。
+   …… `/pattern/flags` の形式で記述する。
```

```diff
・配列リテラル
…… [1, 2, 3] の形式で記述する。[] は空の配列を示す。arr[n] という構文で
- n-1 番め
+ n+1 番め
の要素にアクセスできる。
```

- 2-3 / p.63

```diff
後者は代入した変数の名前と、
- 関数そのもの名前が
+ 関数そのものの名前が
異なるので変な感じだけど、
```

- 2-7 / p.92 / リスト 28

```diff
- for (u of users) {
+ for (const u of users) {
```

```diff
  途中のプロパティが存在していなかったら、
- そこで式が短絡されて
- そこで式が短絡評価されて
  undefined を返してくれるの」
```

- 2-8 / p.102 / リスト 33

```diff
- minky.greet(); // TypeError: Cannot read property 'name' of undefined
+ minky.greet(); # TypeError: Cannot read property 'name' of undefined
```

- 同 / リスト 34

```diff
- minky.greet() // Hi, I'm Momo
+ minky.greet() # Hi, I'm Momo
```

- 2-9 / p.112

```diff
  　Node でES Modules を使うにはいくつか方法があるけど、今回はpackage.json に次の設定を入
れる方法を採用する
- 。その場合、package.json に次のようなオプションを記述するのね
  」
```

- 3-1 / p.131 / リスト 50

```diff
- リスト 50: 07-object-syntax/object-iterate.js
+ リスト 50: 02-collection/object-iterate.js
```

- 3-3 / p.136 / サンプルコード

```diff
- let frinedship = null;
+ let friendship = null;

  if (true) {
```

- 3-4 / p.145 / リスト 58

```diff
  .catch((error) => {
-   console.log(error);
+   console.error(error);
  })
```

<br />

## 【Ⅱ. React 基礎編】

- 5-2 / p.43

```diff
  ブラウザで実行させている状態から JavaScript コンソールを開いてみてくれる？」
+ 「あれっ？　warning が出てますね。key が何とかいわれてますけど」
+ 「うん。繰り返し処理で同階層に同じ要素のリストを表示させる際、React はユニークな key 属性値を必要とするのね。使える値は文字列もしくは数値。key としての理想的な値は、そのコレクションの各要素が持つユニーク ID なんだけど、ここではそれがないので key には繰り返しのインデックスを使うことにしよう」
+
+ コード：Greets.tsx の差分
+ - {[...Array(times)].map((_) => (
+ - <p>Hello, {name}! {children}</p>
+ + {[...Array(times)].map((_, i) => (
+ + <p key={i}>Hello, {name}! {children}</p>
+
  「あ、warning が消えましたね！」
```

- 6-2 / p.71

```diff
これ以上にカスタマイズする必要はないと思う。この
- 2 つ
+ 3 つ
以外はデフォルト値が適用されるので、いちおう公式ドキュメントで確認しておいてね」
```

- 6-3 / p.75-76 / サンプルコマンド

```diff
  $ yarn add -D stylelint stylelint-config-standard stylelint-order stylelint-config-recess-order
- $ (typesync)
- $ yarn
```

- 6-3 / p.78 / サンプルコード

```diff
  +   "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx}'",
-     "lint:conflict": "eslint-config-prettier 'src/**/*.{js,jsx,ts,tsx}'",
+     "lint:conflict": "eslint --print-config .eslintrc.js | eslint-config-prettier-check",
  +   "lint:style": "stylelint 'src/**/*.{css,less,sass,scss}'",
```

- 6-4 / p.83

```diff
  たとえばそこに pre-commit というファイルがあればコミット前に、pre-push という
+ ファイル
  があればプッシュ前に実行してくれる。
```

- 7-1 / p.88

```diff
  「Backbone.js はこの中ではもっとも軽量なライブラリで、従来の jQuery による DOM 操作をベースとしたアプリケーションに Model と View の秩序を与えるための最低限の実装に、
- REStful API
+ RESTful API
  とルーティングの機能を加えたものだった。
```

- 同 / p.92

```diff
  Google は他のブラウザベンダー、Apple や Mozilla、
- Micorosoft
+ Microsoft
  といった各社と調整しないまま Web Components を発表し、さらに先行してドラフトの仕様を Chrome に実装していった。
```

- 7-4 / p.106

```diff
  タブの数が多いと隠れて見えないこともあるので、そういうときは右端の『≫』ドロップダウン
- に格納されてる
+ ボタンを押すと格納されてるメニューが表示されるよ」
```

- 8-2 / p.131

```diff
  まず React の関数コンポーネントの型インターフェースには FunctionComponent が用意されてる。これはより短い名前の
- VFC
+ FC
  でエイリアスされてるんだけど、
```

- 8-4 / p.150 / 表内

```diff
  メソッド
- shouldComponentUpdates(nextProps, nextState)
+ shouldComponentUpdate(nextProps, nextState)
```

```diff
  メソッド
- getSnapShotBeforeUpdate(prevProps, prevState)
+ getSnapshotBeforeUpdate(prevProps, prevState)
  戻り値
- SnapShot | null
+ Snapshot | null
```

- 9-1 / p.160 / リスト 29

```diff
  const CounterMixin = {
-   getInitialState: () => ({ count: 0 });
+   getInitialState: () => ({ count: 0 }),
    reset: () => {
```

- 同 / p.164

```diff
  でも HOC によって count、reset、increment にロジックを注入できるようにしておく必要があるので、その 3 つを
- み込みユーティリティ型
+ 組み込みユーティリティ型
  の Partial で省略可能な形にして合成してるのよ。
```

- 9-3 / p.184

```diff
  でも指摘内容はおおむね適切なので、まずは自分の判断だけで無効化せず
- エラーにないような
+ エラーにならないような
  コードを書くよう心がけましょう。やり方はおいおい教えていくから」
```

- 9-4 / p.192 / 差分コード

```diff
- - const reset = (): void => setTimeLeft(limit);
+ - const reset = () => setTimeLeft(limit);
  + const reset = useCallback(() => setTimeLeft(limit), [limit]);
```

- 同 / p.194 / 差分コード

```diff
    ︙
-   const Timer: VFC<{ limit: number }> = ({ limit }) => {
+   const Timer: VFC<TimerProps> = ({ limit }) => {
      const [timeLeft, setTimeLeft] = useState(limit);
      const primes = useMemo(() => getPrimes(limit), [limit]);
  +   const timerId = useRef<NodeJS.Timeout>();
      const reset = useCallback(() => setTimeLeft(limit), [limit]);
-     const tick = (): void => setTimeLeft(prevTime => prevTime - 1);
+     const tick = () => setTimeLeft(prevTime => prevTime - 1);
```

<br />

## 【Ⅲ. React 応用編】

現在のところ、修正・更新部分はありません。
