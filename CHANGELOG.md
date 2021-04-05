<!-- markdownlint-disable MD024 -->
# 各版・各刷における内容の変更

## 第3.1版 第2刷（2021-04-01 発行）

### ■ 対応パッケージのアップデート

- 主なパッケージの対応バージョンを以下にアップデート
    - **React**　17.0.1 → 17.0.2
    - **Create React App**　4.0.1 → 4.0.3
    - **TypeScript**　4.1.3 → 4.2.3

### ■ 引用しているトレンド情報のアップデート

- [The State of JavaScript](https://stateofjs.com/) の調査結果およびその説明を、2019 年版から 2020 年版に更新。
- [npm trends](hhttps://www.npmtrends.com/) の統計およびその説明を、2021 年 3 月現在のものに更新。

### ■ 呼称の変更

- 「フォルダ」を一律、「ディレクトリ」に修正。

### 第1章&nbsp; こんにちは React

#### 1-2. プロジェクトを作成する

- 「Create React App で『Hello, World!』」項にて、react-scripts がバージョン 4.0.2（2021-02-03）で TypeScript のバージョンを 4.1 系に上げたため、第 1 刷で対応していた新しい JSX 変換形式の設定のコンフリクトが解消された。その部分の説明が必要なくなったため削除。

#### 1-3. アプリを管理するためのコマンドやスクリプト

- 旧「npm-scripts」項について、npm の公式がすでに[「npm-scripts」という呼称を使わなくなっている](https://docs.npmjs.com/cli/v7/using-npm/scripts)ため、項タイトルを「npm-scripts」から「npm の Scripts」に変更。また `prepare` スクリプトの説明を追加し、全体的に内容を整理。

### 第3章&nbsp; 関数型プログラミングでいこう

#### 3-2. コレクションの反復処理

- 「配列の反復処理」項にて、`sort` メソッドが破壊的であることの注意と、JavaScript で破壊的メソッドを非破壊的に運用するための方法の説明を追加。

### 第4章&nbsp; TypeScript で型をご安全に

#### 4-2. TypeScript の基本的な型

- 「タプル型」項にて、TypeScript 4.2 で導入された[レストパラメータをタプルの定義に使う方法](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html#leadingmiddle-rest-elements-in-tuple-types)の説明を追加。

### 第5章&nbsp; JSX で UI を表現する

#### 5-2. JSX の書き方

- 「JSX の基本的な文法」項にて、`import React from 'react'` を必要としない[新しい JSX 変換形式](https://ja.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)の説明を追加。

### 第6章&nbsp; Linter とフォーマッタでコード美人に

#### 6-1. ESLint

- 「ESLint の環境を作る」項および「ESLint の適用ルールをカスタマイズする」項の冒頭における ESLint の環境構築のやり方を最新版に対応。初期化時に eslint-config-airbnb を併せてインストールするように手順を変更した。
- インストールされているパッケージのバージョンを調べるコマンドを `npm ls` から `yarn list` に変更。
- `yarn upgrade --latest` コマンドのアップグレードの対象から TypeScript が外されたため、別途アップグレードを実行するよう手順を追加。
- typesync の npm による scripts での実行を `postinstall` から `preinstall` に書く方法に変更。以降のサンプルコードもすべてこのやり方にした。

#### 6-2. Prettier

- eslint-config-prettier が[バージョン 8.0.0](https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21) から `.eslintrc` でのプラグイン設定をひとつにまとめることができるようになったため、該当の設定内容を更新。

#### 6-4. さらに進んだ設定

- Git Hooks についての説明を追加
- 使用する Git Hooks 管理ツールを husky から [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) に乗り換え、説明もそれに合わせて変更。

### 第8章&nbsp; 何はなくともコンポーネント

#### 8-2. コンポーネントと Props

- 関数コンポーネントの型定義に `FC` を使っていたのを、現状のコミュニティのトレンドに合わせて `VFC`（VoidFunctionComponent）に変更。以降のサンプルコードもすべてこのやり方にした。

<br />

## 第3.1版 第1刷（2020-12-26 発行）

### ■ 対応パッケージのアップデート

- 主なパッケージの対応バージョンを以下にアップデート
    - **React**　17.0.0 RC1 → 17.0.1
    - **Create React App**　3.4.3 → 4.0.1
    - **TypeScript**　4.0.2 → 4.1.3
    - **ESLint**　6.8.2 → 7.14.0
    - **React Query**　2.15.4 → 3.5.5

### ■ 引用しているトレンド情報のアップデート

- [npm trends](hhttps://www.npmtrends.com/) の統計およびその説明を、2020 年 12 月現在のものに更新。

### ■ 呼称の変更

- 「ビルトインオブジェクト」と表記していたものを「組み込みオブジェクト」に変更。
- 「Mac OS」と表記していたものを「macOS」に修正。
- 「Visual Studio Code」の略称表記を「VSCode」から「VS Code」に修正。
- TypeScript の「ユニオン型」を「共用体型」に、「インターセクション型」を「交差型」に変更。

### 第1章&nbsp; こんにちは React

#### 1-1. 基本環境の構築

- 「Node.js をインストールする」項にて、従来 Mac のみで説明していた環境作成について Windows でのケースも言及。**WSL をベースにした Windows での環境手順**を[オンラインドキュメント](./extra/build-win-env.md)として追加した。

#### 1-3. アプリを管理するためのコマンドやスクリプト

- 「Yarn コマンド」項にて、プロジェクトパッケージのロックファイルについて、npm コマンド使用時の `package-lock.json` についても言及。

### 第4章&nbsp; TypeScript で型をご安全に

#### 4-5. さらに高度な型表現

- 「型表現に使われる演算子」項にて、配列の要素から型を作成する書き方の説明を追加。
- 新しく「**条件付き型とテンプレートリテラル型**」項を追加。
- 「組み込みユーティリティ型」項にて、`Record` 型および文字列リテラルの各ユーティリティ型についての説明を追加。

### 第5章&nbsp; JSX で UI を表現する

- [**新しい JSX 変換形式**](https://ja.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) についての説明を随所に追加。以降の章のサンプルコードはすべてこの変換形式を用いた書き方に変更。

### 第6章&nbsp; Linter と フォーマッタでコード美人に

#### 6-1. ESLint

- 内容を ESLint 7 系に対応したものにアップデート

#### 6-2. Prettier

- ESLint のプラグインとして Prettier をインストール」項を「Prettier の環境を作る」に改名。[Prettier 公式が eslint-plugin-prettier を非推奨とした](https://prettier.io/docs/en/integrating-with-linters.html#notes)ため、**Prettier  を ESLint のプラグインではなく直接実行する形式**での環境構築に内容を変更。
- ESLint のキャッシュファイル等が Git リポジトリに登録されてしまうことを防ぐため、以降のサンプルコードの `.gitignore` ファイルを [gibo](https://github.com/simonwhitaker/gibo) を使って生成したものにリプレース。

### 第10章&nbsp; React におけるルーティング

#### 10-4. React Router をアプリケーションで使う ／ 10-5. React Router バージョン 5 から 6 への移行

- サンプルコードにおける URL のクエリパラメータを [query-string](https://github.com/sindresorhus/query-string) と optional chaining を用いて抽出する手法は [@typescript-eslint/no-unsafe-call](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md) および [@typescript-eslint/no-unsafe-member-access](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md) のルールに抵触するようになったため、JavaScript 標準の [URLSearchParams](https://developer.mozilla.org/ja/docs/Web/API/URLSearchParams) オブジェクトを使った手法に変更。

### 第12章&nbsp; React は非同期処理とどう戦ってきたか

- Recoil を使ったサンプルコードを収録。

### 第13章&nbsp; データ取得の次世代標準 Suspense

#### 13-2. “Suspense Ready”なデータ取得ライブラリ

- 「React Query ― 個人開発ながら多機能でプロジェクトが活発」節以降の React Query に関する説明をバージョン 3 系のものにアップデート。

#### 13-4. Suspense と Concurrent モードが革新する UX

- `useTransition` および `useDeferredValue` の設定オプションから `timeoutMs` が削除されたため、説明もそれに合わせて変更。
- 「Concurrent モードで先進的 UI を実現する」項にて、error boundary のリセットに React Query の `useQueryErrorResetBoundary` を使ったサンプルを追加。

<br />

## 第3版（2020-08-20 発行）

### ■ 概要

前版からボリュームが約 3 倍に増量したため内容を「Ⅰ. 言語・環境編」「Ⅱ. React基礎編」「Ⅲ. React応用編」の 3 冊に分割し、全 13 章の三部作とした。

### 第1章&nbsp; こんにちは React

#### 1-1. 基本環境の構築

- Node.js そのものと、インストールが必要な理由についての説明を追加。
- 非推奨になった [ndenv](https://github.com/riywo/ndenv) を [nodenv](https://github.com/nodenv/nodenv) に置き換えた。併せて、[anyenv-update](https://github.com/znz/anyenv-update) と [nodenv-default-packages](https://github.com/nodenv/nodenv-default-packages) のふたつのプラグインを導入。
- `yarn upgrade-interactive` コマンドの説明を追加。

#### 1-2. プロジェクトを作成する

- 「1-2. Hello, World!」を同節に再編成。Create React App についての詳細な説明を追加し、Yarn コマンドの説明については次の節に委譲した。

#### 1-3. アプリを管理するためのコマンドやスクリプト

- 同節を新規に追加。Yarn コマンドに加え、npm-scripts や react-scripts についても詳細に説明。

### 第2章&nbsp; エッジでディープな JavaScript の世界

- 章題を「ナウでモダンな JavaScript」から変更し、内容を全体的に再構成。ボリュームも従来の 5 倍以上に。
- 旧「2-6. 非同期処理を扱う」を第3章に「3-4. JavaScript での非同期処理」として移動。

#### 2-1. あらためて JavaScript ってどんな言語？

- JavaScript の成り立ちから立ち戻って概要の説明を追加。

#### 2-3. JavaScript のデータ型

- 同節を新規に追加。

#### 2-4. 関数の定義

- 宣言文と関数式のちがいの説明、アロー関数で引数がひとつのときの括弧を省略するべきかどうかの議論を追加。さらに「引数テクニック」の項を追加。

#### 2-5. クラスを表現する

- プロトタイプベースについての説明を追加。

#### 2-8. JavaScript の鬼門、this を理解する

- 同節を新規に追加。

#### 2-9. モジュールのインポート／エクスポート

- 同節を新規にを追加。`import` と `export` の使い方に加え、ESM 周辺の特殊事情についても説明。

### 第3章&nbsp; 関数型プログラミングでいこう

- 旧「3-6. ジェネレータ」の節を削除、簡略化した説明を第11章の「自走式重対空砲 redux-saga」にあらためて記述。
- 旧 2 章から内容を移動した「3-4. JavaScript での非同期処理」にて、説明とサンプルコードを全て刷新。`Promise` オブジェクトの作成法から始まり、通信ライブラリが返す `Promise` オブジェクトを扱う実践的な内容に変更。

#### 3-1. 関数型プログラミングは何がうれしい？

- 実際のサンプルコードを使った説明を追加。

#### 3-2. コレクションの反復処理

- `Array.prototype.reduce()` と `Array.prototype.sort()` についての説明を別途詳細に。またオブジェクトの反復処理についても新規に項を設けて説明。

#### 3-3. JavaScript で本格関数型プログラミング

- 旧「3-3. 関数型プログラミングの概要」「3-4. 高階関数」「3-5. クロージャ」の節を同節として統合。

### 第4章&nbsp; TypeScript で型をご安全に

- 章題を「型のある TypeScript は開発者の味方」から変更し、内容を全面的に再構成。ボリュームも従来の3倍以上に。
- 旧「4-3. 配列とオブジェクト」の内容は「4-4. 型の名前と型合成」に吸収。
- 旧「4-5. コンパイル設定」の内容は「4-8. TypeScript の環境設定」に吸収。

#### 4-3. 関数とクラスの型 ／ 4-5. さらに高度な型表現 ／ 4-6. 型アサーションと型ガード ／ 4-7. モジュールと型定義

- 上記 4 つの節を新規に追加。

### 第5章&nbsp; 強力な拡張記法 JSX

#### 5-1. JSX とは何であるか、何ではないのか

- 引用している統計指標をアップデートし、説明をよりくわしく拡充。

### 第6章&nbsp; Linter とフォーマッタでコード美人に

#### 6-1. ESLint

- JavaScript および TypeScript における linter の歴史を紹介。さらに  `yarn eslint --init` から始める設定ファイル作成の方法、各プラグインや共有設定、カスタマイズしているルール、ESLint を無効化するコメントの書き方についても新しく追加。

#### 6-2. Prettier

- Prettier の登場背景を紹介。インストールの方法の説明を追加。設定の内容も紹介。

#### 6-3. stylelint

- stylelint についての説明を節として独立、内容を充実させた。

### 第7章&nbsp; React をめぐるフロントエンドの歴史

- 章として新しく追加。

### 第8章&nbsp; 何はなくともコンポーネント

- 章全体で関数コンポーネントをベースにして、クラスコンポーネントをその対比で説明するという形に変更したため、旧「7-5. 関数コンポーネント」節を削除。

#### 8-1. コンポーネントのメンタルモデル

- 旧「7-1. React の基本思想」の内容を新 7 章に吸収、コンポートの概念を説明するため同節を新しく追加。

### 第9章&nbsp; Hooks、関数コンポーネントの合体強化パーツ

#### 9-1. Hooks に至るまでの物語

- 同節を新規に追加。mixins、HOC、render props と順を追ってロジックの再利用の歴史を説明。

#### 9-4. Hooks におけるメモ化を理解する

- 同節を新規に追加、Hooks のメモ化について 1 節をさいて説明。

### 第10章&nbsp; React におけるルーティング

#### 10-2. ルーティングライブラリの選定

- Reach Router についての説明を追加。さらに将来の React Router との統合プランについて記述。

#### 10-4. React Router をアプリケーションで使う

- 旧「9-3. React Router の使い方」の、サンプルコードを利用した説明の部分を同節として独立させた。

#### 10-5.  React Router バージョン 5 から 6 への移行

- 同節を新規に追加。

### 第11章&nbsp; Redux でグローバルな状態を扱う

- 章タイトルを「Redux でアプリの状態を管理する」から改題。

#### 11-1. Redux の歴史

- Redux 登場時の状況の描写をより詳細に。
- 旧「10-3. Redux の使い方」の内容とサンプルコードを HOC から Hooks インターフェースを使ったものに更新。

#### 11-3. Redux 公式スタイルガイド ／ 11-4. Redux Toolkit を使って楽をしよう ／ 11-5. Redux と useReducer

- 上記 3 節を新規に追加。

### 第12章&nbsp; React は非同期処理とどう戦ってきたか

- 章タイトルを「Redux で非同期処理を扱う」から改題。

#### 12-2. Effect Hook で非同期処理を書く ／ 12-3. Redux 不要論を検証する

- 上記 2 節を新規追加。

### 第13章&nbsp; データ取得の次世代標準 Suspense

- 章として新しく追加。

<br />

## 第2版（2019-04-14 発行）

### ■ 対応パッケージのアップデート

- 使用している主なパッケージを、2019 年 3 月時点の最新バージョンにアップデート。

### 第1章&nbsp; こんにちは React

- Create React App 本家が TypeScript を直接サポートし、[create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript) はパッケージそのものが非推奨になったため、create-react-app-typescript を使用していた部分を create-react-app に入れ替えた。

### 第2章&nbsp; ナウでモダンな JavaScript

#### 2-5. 便利な配列やオブジェクのトリテラル

- 分割代入についての説明を追加。

### 第3章&nbsp; 関数型プログラミングでいこう

#### 3-5. クロージャ ／ 3-6. ジェネレータ

- 上記 2 節を新規追加。

### 第4章&nbsp; 型のある TypeScript は強い味方

#### 4-2. 型のバリエーション

- never 型についての説明を追加。

#### 4-3. 配列とオブジェクト

- の交差型と共用型についての説明の誤りを訂正。および TypeScript 3.4 から導入された Readonly 型についての説明を追加。

#### 4-5. コンパイル設定

- 絶対パスインポートについての説明を追加。

### 第6章&nbsp; Lint と Prettier でコードをクリーンに

#### 6-1. ESLint

- TypeScript の構文チェックツール TSLint については ESLint への統合プランが発表され1、近い将来に非推奨になるとアナウンスがあったため、旧「6-1. TSLint」節の内容を同節に変更。加えて全てのサンプルコードの TSLint の環境を ESLint に移行。

### 第7章&nbsp; 何はなくともコンポーネント

#### 7-5. 関数コンポーネント

- Stateless Functional Component（SFC）の呼称を Function Component（FC）に変更。

### 第8章&nbsp; Hooks で関数コンポーネントを強化する

- Hooks が導入され Recompose の開発中止が宣告されたため、同章の内容を「合成するぞ Recompose」から「Hooks で関数コンポーネントを強化する」に置き換える形で刷新。

### 第10章&nbsp; Redux でアプリの状態を管理する

#### 10-3. Reduxの使い方

- 最新のReduxおよびReact Reduxに対応した型解決の記述法に切り替えた。

#### 10-4. Flux Standard Action

- TypeScript FSA の更新が滞っているため、同節の内容を TypeScript FSA を使わない手法を使ったものに書き換えた。

#### 10-5. Redux DevTools

- 内容を[『りあクト！ TypeScriptで極める現場のReact開発』](https://oukayuka.booth.pm/items/1312815)に委譲。

### 第11章&nbsp; Reduxで非同期処理を扱う

- 章として新規追加。
