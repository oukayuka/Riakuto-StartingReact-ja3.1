<!-- markdownlint-disable MD010 MD029 MD032 -->
# 『りあクト！ TypeScript で始めるつらくない React 開発 &nbsp;第3.1版』初版第 1 刷の正誤表・更新情報

最終更新日： 2021 年 4 月 18 日

### ご注意点

- この正誤表は 2020 年 12 月 26 日に発行された**初版第 1 刷**の内容をベースにしています。第 2 刷をお持ちの場合は[そちらに対応したページ](errata2.md)をご覧ください。
- 正誤表の内容は随時アップデートされます。
- 記述しているページ番号は、紙の初版第 1 刷に対応していますが、電子版では内容の更新によりお持ちのバージョンによって前後することがあります。
- 電子版については随時、修正やアップデートが反映された新しいバージョンが配信されます。購入先のサイトをご確認ください。なお現時点での最新版は以下の通りです。
    - 【Ⅰ. 言語・環境編】バージョン 2.0.2（2021-04-18）
    - 【Ⅱ. React 基礎編】バージョン 2.1.1（2021-04-18）
    - 【Ⅲ. React 応用編】バージョン 2.0.2（2021-04-18）

### 電子版のバージョニングについて

- **整数の位** …… 紙の本の「刷」番号に対応しています。「電子版バージョン 2.0.0」であれば、紙の本の「初版第 2 刷」の内容と完全に一致します
- **小数点第 1 位** …… メジャーバージョン番号。各技術のアップデートや情勢の変化に合わせて内容が更新されたときに変更されます
- **小数点第 2 位** …… マイナーバージョン番号。誤植の修正があったときに変更されます

<br />

## 【Ⅰ. 言語・環境編】

- 1-1 / p.29  
該当の拡張がアップデートで別のプロダクトになっていたため差し替え

```diff
- •Bracket Pair Colorizer（coenraads.bracket-pair-colorizer）
+ •Bracket Pair Colorizer 2（CoenraadS.bracket-pair-colorizer-2）
  …… マッチする括弧を色分けして教えてくれる
```

- 2-6 / p.85

```diff
  const obj1 = { a: 1, b: 2, c: 3, d: 4 };
  const obj2 = { ...obj1, d: 99, e: 5 };
- console.log(obj2);  // { a: 1, b: 2, c: 4, d: 99, e: 5 }
+ console.log(obj2);  // { a: 1, b: 2, c: 3, d: 99, e: 5 }
```

- 2-8 / p.105

```diff
  「なるほど。その次の greet5() はメソッド自身もアロー関数式で定義されてますね」
- 「そう。でも本来なら greet5() 自身の this は undefined になるのが妥当のはずなんだけど、アロー関数がクラスのメソッドとして定義されたときだけ、内部で3の一時変数による this の移し替えをしてるみたいなんだよ。だからこれでも greet4() 同様に動作するの。まあアロー関数式が、一般的なオブジェクト指向言語に慣れた人向けに作られたものゆえの特別仕様なんだろうね」
+ 「そう。アロー関数式で定義したメソッドでも `this` はそのひとつ外の実行されるコンテキスト、つまりそれが所属するオブジェクトインスタンスになる。よって `greet5()` 内の `doIt()` における `this` への参照はリレーされてそのオブジェクトインスタンスを指すので、結果的に `greet4()` と同じ動作になるわけ」
  「へー、へー」
```

```diff
  ・this-behavior - CodeSandbox
-   https://codesandbox.io/s/this-behavior-vrd5
+   https://codesandbox.io/s/this-behavior-vrd53
```

- 3-2 / p.128-129  
`sort` メソッドが破壊的であることの注意と、JavaScript で破壊的メソッドを非破壊的に運用するための方法の説明を追加。  

```diff
  「そっか、そういう使い方もできるんですね」
+ （ここに以下の文章を追加）
  「で、ここまでは必ず値を返す式だったけど、配列の反復処理には値を返さない構文もある。
```

> 「ところで JavaScript の `sort` メソッドはその結果が破壊的という性質があるので、他の処理と組み合わせる際には気をつける必要がある」
>
> ```
> const arr = [12, 2, 3, 24, 5];
> console.log(arr.sort((n, m) => n < m ? -1 : 1));  // [ 2, 3, 5, 12, 24 ]
> console.log(arr);   // [ 2, 3, 5, 12, 24 ]
> ```
>
> 「えっ、これやばくないですか？　それにこれ見て思いましたけど、JavaScript って破壊的メソッドと非破壊的メソッドが混在してて見分ける方法がないのひどいですね。Ruby なら破壊的メソッドには `sort!` みたいに末尾に `!` がつくのでわかりやすいのに」  
> 「うん、例によって歴史的経緯でこうなっちゃってるんだろうね。どれが破壊的でどれが非破壊的なのかは、これはもう丸暗記するしかない。それで JavaScript の配列の破壊的メソッドを非破壊的に使うには裏技があって、`slice` メソッドを間にはさむといいの。`slice()` は本来、配列から任意の範囲をシャローコピーして返してくれるメソッドなんだけど、引数を省略するとその配列全体をコピーしてくれる」
>
> ```
> const arr = [12, 2, 3, 24, 5];
> console.log(arr.slice().sort((n, m) => n < m ? -1 : 1));  // [ 2, 3, 5, 12, 24 ]
> console.log(arr);   // [ 12, 2, 3, 24, 5 ]
> ```
>
> 「なるほど。これならそんなに追加のコード量は増えませんし、いいですね。`sort()` を使う際には忘れないようにしないと」  
> 「うん、ちょっとめんどうだけどそうしてね。

<br />

## 【Ⅱ. React 基礎編】

- 6-1 / p.48 / 脚注

```diff
  47 「JSCS — end of the line - Oleg Gaidarenko - Medium」
- https://medium.com/[@markelog/jscs-end-of-the-line-bc9bf0b3fdb2]
+ https://medium.com/@markelog/jscs-end-of-the-line-bc9bf0b3fdb2
```

- 6-1 / p.51  
（`yarn upgrade` コマンドのアップグレードの対象から TypeScript が外されたため、別途アップグレードを実行するよう手順を追加）

```diff
- 「じゃあまず、TypeScript を始めとする他のパッケージを最新にしておこう」
+ 「じゃあまず、TypeScript を始めとする各種パッケージを最新にしておこう」

  $ yarn upgrade-interactive --latest
+ $ yarn add typescript@latest
```

- 6-1 / p.50-57  
「6-1. ESLint」節の「ESLint の環境を作る」項および「ESLint の適用ルールをカスタマイズする」項の冒頭における ESLint の環境構築のやり方を最新版に対応。初期化時に eslint-config-airbnb を併せてインストールするように手順を変更しました。  
:warning: 該当部分の内容は、2021 年 1 月 12 日刊行の電子版バージョン 1.1.0 以降を参照してください。

- 6-1 / p.66

```diff
  これが共有設定
- ‘plugin:[@typescript-eslint/recommended]’
+ plugin:@typescript-eslint/recommended
  で 'warn' になってるので警告が出てたわけ。
```

- 7-5 / p.122  

```diff
  　それに公式ドキュメントも明らかに必要な情報が網羅しきれてない。説明もわかりにくく、React や Vue と比べると格段に見劣りする。
- Gogole
+ Google
  は本気で LitElement を普及させる気があるのかと疑いたくなるよ」
```

<br />

## 【Ⅲ. React 応用編】

- 13-2 / p.155 / 脚注  
Relay 公式が該当ページを削除してしまったため、リンク先を GitHub にアーカイブされている Markdown ファイルに変更

```diff
- 「A Guided Tour·Relay Hooks」https://relay.dev/docs/en/a-guided-tour-of-relay
+ 「A Guided Tour·Relay Hooks」https://github.com/facebook/relay/blob/master/website/versioned_docs/version-experimental/RelayHooks-AGuidedTourOfRelay.md
```

- 13-2 / p.165

```diff
- 「うーｍ、
+ 「うーむ、
  やっぱり機能面では React Query の圧勝ですか」
```

- 13-3 / p.179

```diff
  「じゃ、この
- fetc-on-render
+ fetch-on-render
  アプローチによるサンプルコードにおけるコンポーネント群のローディングシーケンスを図にして見てみよう」
```

- 13-3 / p.182

```diff
「実はこれまでのサンプルではわかりやすくするため、ワザと getPosts の処理に 500 ミリ秒だけ余
分に遅延を入れてる。
- fetch-then-redner
+ fetch-then-render
ではすべてのデータ取得が終わらないとコンテンツのレンダリングができないので、
```

- 13-3 / p.182

```diff
  図34:
- render-as-you-fecth
+ render-as-you-fetch
  のプロファイリング出力結果
```

```diff
  図35:
- render-as-you-fecth
+ render-as-you-fetch
  でのローディングシーケンス
```

- 13-3 / p.183

```diff
  まあこれは理論上はこうなるってことなので、極端に単純化したこのサンプル群ではもろもろのオーバーヘッドもあって、
- render-as-you-fecth パターン
+ render-as-you-fetch パターン
  の最終的な所要時間はfetch-on-renderのときとほとんど変わらないけどね」
```

- 13-4 / p.210 / 脚注

```diff
  197 「The Suspense is Killing Redux. At my latest workshops I've been… | by Ryan Florence | Medium」
- https://medium.com/[@ryanflorence/the-suspense-is-killing-redux-e888f9692430]
+ https://medium.com/@ryanflorence/the-suspense-is-killing-redux-e888f9692430
```
