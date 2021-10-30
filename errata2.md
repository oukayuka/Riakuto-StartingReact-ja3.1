<!-- markdownlint-disable MD010 MD029 MD032 -->
# 『りあクト！ TypeScript で始めるつらくない React 開発 &nbsp;第3.1版』の正誤表・更新情報

最終更新日： 2021 年 9 月 18 日

### ご注意点

- この正誤表は 2021 年 4 月 1 日に発行された**第 2 刷**の内容をベースにしています。第 1 刷をお持ちの場合は[こちら](errata.md)、第 3 刷をお持ちの場合は[こちら](errata3.md)ご覧ください。お手持ちの本がどれに該当するかは、最後の奥付けのページに記載されています。
- 正誤表の内容は随時アップデートされます。
- 記述しているページ番号は、紙の第 2 刷に対応していますが、電子版では内容の更新によりお持ちのバージョンによって前後することがあります。
- 電子版については随時、修正やアップデートが反映された新しいバージョンが配信されます。購入先のサイトをご確認ください。なお現時点での最新版は以下の通りです。
    - 【Ⅰ. 言語・環境編】バージョン 3.0.1（2021-09-10）
    - 【Ⅱ. React 基礎編】バージョン 3.0.0（2021-09-18）
    - 【Ⅲ. React 応用編】バージョン 2.0.2（2021-04-18）

### 電子版のバージョニングについて

- **整数の位** …… 紙の本の「刷」番号に対応しています。「電子版バージョン 2.0.0」であれば、紙の本の「第 2 刷」の内容と完全に一致します
- **小数点第 1 位** …… メジャーバージョン番号。各技術のアップデートや情勢の変化に合わせて内容が更新されたときに変更されます
- **小数点第 2 位** …… マイナーバージョン番号。誤植の修正があったときに変更されます

<br />

## 【Ⅰ. 言語・環境編】

- 2-3 / p.63

```diff
・配列リテラル
…… [1, 2, 3] の形式で記述する。[] は空の配列を示す。arr[n] という構文で
- n-1 番め
+ n+1 番め
の要素にアクセスできる。
```

<br />

## 【Ⅱ. React 基礎編】

- 6-2 / p.70 / サンプルコード

```diff
  "scripts": {
    ︙
-   "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx}'",
  + "fix": "npm run -s format && npm run -s lint:fix",
  + "format": "prettier --write --loglevel=warn '{public,src}/**/*.{js,jsx,ts,tsx,html,gql,graphql,json}'",
    "lint": "eslint 'src/**/*.{js,jsx,ts,tsx}'",
  + "lint:conflict": "eslint --print-config .eslintrc.js | eslint-config-prettier-check",
    "preinstall": "typesync"
  },
```

- 6-2 / p.71 / サンプルコード

```diff
  singleQuote: true
  trailingComma: "all"
+ endOfLine: "auto"
```

- 6-2 / p.72 / サンプルコード

```diff
  "scripts": {
    ︙
-   "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx}'",
+   "eject": "react-scripts eject",
  + "fix": "npm run -s format && npm run -s lint:fix",
  + "format": "prettier -- write --loglevel=warn' {public,src}/**/*.{js,jsx,ts,tsx,html,gql,graphql,json}'",
    "lint": "eslint 'src/**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx}'",
  + "lint:conflict": "eslint --print-config .eslintrc.js | eslint-config-prettier-check",
    "preinstall": "typesync"
  },
```

- 6-4 / p.83  
simple-git-hooks がバージョン 2.3（2021-04-02）から Git Hooks の削除機能を実装したため、該当する部分の説明を変更。

```diff
  「ふむふむ。その名のとおりGit Hooks をシンプルに管理してくれるツールなんですね。でも一度
設定したGit Hooks を削除したいときはどうするんですか？」
- 「その場合は現状、手で .git/hooks/pre-commit とかのファイルを削除するしかないね。ただ simple-git-hooks は Git Hooks を素直に利用するツールなので、原理がわかってれば問題ないはず」
- 「うーむ、まあそうですね」
+ 「package.json の "simple-git-hooks" エントリから任意の設定を削除した上であらためて npx simple-git-hooks を実行すると、対応するGit Hooks のスクリプトファイルが自動的に削除されるようになってるよ」
+ 「へー。シンプルといいながら、そんなところまで面倒見てくれるんですね」
「それでね、こんなふうに手で実行するやり方だと、
「それでね、こんなふうに毎回npx simple-git-hooks を手で実行するやり方だと、チームの誰かが
それをやるのを忘れてlint がかかってないコードをコミットしてしまうことがあるよね。
```

- 6-4 / p.85  
mrm がバージョン 5.0.0（2021-04-01）で simple-git-hooks から再度 husky v6 を採用したことにより、lint-staged も同様に推奨パッケージを husky に戻したため、その部分の説明を修正。

- 7-5 / p.118

```diff
ちなみに React が 16.1 万、Angular が 6.8 万。まあ Vue のスターが多いのは Evan You が中国人で、アリババやテンセントといった中国での採用事例が多いことによる
- 組織標的
+ 組織票的
な色合いが強いと思うけど」
```

- 7-5 / p.122

```diff
  　それに公式ドキュメントも明らかに必要な情報が網羅しきれてない。説明もわかりにくく、React や Vue と比べると格段に見劣りする。
- Gogole
+ Google
  は本気で LitElement を普及させる気があるのかと疑いたくなるよ」
```

- 8-3 / p.130

```diff
「ここはちょっと事情が複雑なので順を追って説明させてね。まず React の関数コンポーネントの型インターフェースには FunctionComponent が用意されてる。これはより短い名前の
- VFC
+ FC
でエイリアスされてるんだけど、
```

- 8-3 / p.142

```diff
「クラス宣言で Component クラスを拡張するときに 2 つめの型引数で渡されてますね。props のときと違って、
- Component<unknown, AppState>
+ Component<unknown, State>
と型引数が 2 つあります」
```

- 9-3 / p.179

```diff
  関数 y = f(x) は本来なら
+ x
  が同じなら出力値
+ y
  も同じはずだけど、状態を抱える関数であれば必ずしもそうとは限らない。たとえば
+ f(x)
は 2 を返していたのが任意の処理を実行することで、それ以降は
+ f(x)
  が 5 を返すようになる、これが副作用ということ。
```

<br />

## 【Ⅲ. React 応用編】

- 10-5 / p.45 / サンプルコード

```diff
- $ yarn add react-router@next react-rouer-dom@next history
+ $ yarn add react-router@next react-router-dom@next history
```
