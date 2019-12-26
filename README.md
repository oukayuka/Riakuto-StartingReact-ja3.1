# 『りあクト！ TypeScript で始めるつらくない React 開発 第 2 版』サポートページ

このリポジトリは、技術書典 6 にて頒布された同人誌『りあクト！ Firebase で始めるサーバーレス React 開発』のサンプルコードおよび正誤表を提供するものです。なお、本書は以下のサイトにて販売中です。

- [BOOTH で販売中の PDF 版](https://booth.pm/ja/items/1312652)
- [とらのあなにて販売中の物理本](https://ec.toranoana.shop/tora/ec/item/040030721457/)

<br />

## ■ 書籍の紹介

> 「React って難しい」？　でも React の基本概念はきわめてシンプル。ちゃんと手順を踏んでそれらの概念を把握しながら学べば、初学者でも理解は難しくありません。新人と中堅のふたりの女性エンジニアによる対話体で話が進むため、頭に入りやすく、引っかかりやすいポイントや初学者が抱きがちな疑問も丁寧にフォロー。
>
> さらに TypeScript を始めとする、今どきのイケてる React エンジニアたちが現場で採用している技術を惜しみなく、実際に使いながら説明していきます。

本書『りあクト！ TypeScript で始めるつらくない React 開発 第 2 版』は[技術書典 5](https://techbookfest.org/event/tbf05) にて初版が頒布され、電子版を加えると上下合通算で約 1,000 部を売り上げた、React の本格的な入門書『りあクト！ TypeScript で始めるつらくない React 開発』の改定第 2 版です。

初版との差分の概略については以下の通りです。

- 初版は React や TypeScript、各種周辺ライブラリが 2018 年 10 月時点での最新バージョンだったものを、2019 年 2 月時点の最新版に置き換えた
- [Recompose](https://github.com/acdlite/recompose) についての章を削除
- Hooks および Redux-Saga の章を追加
- さらに初版発行時から非推奨となったいくつかの技術を新しいものに置き換え、また最新の TypeScript の型推論を使った書き方を導入しています。
- Redux の Action 記述に開発が停止した [typescript-fsa](https://github.com/aikoven/typescript-fsa) を使うのをやめ、最新の TypeScript の型推論を使った書き方に変更した
- その他本文の誤字や誤記の修正、まえがき・あとがきの加筆

<br />

## ■ 見本誌

電子書籍版のサンプルです。「2-3 アロー関数」までの 43 ページが収録されています。

- [『りあクト！ TypeScript で始めるつらくない React 開発』サンプル](https://github.com/oukayuka/ReactBeginnersBook/blob/master/SampleBook.pdf) （PDF 形式 415KB）

<br />

## ■ 正誤表

電子版は随時アップデートをかけていますので、購入サイトから最新版をダウンロードしてください。  
紙の本の正誤表につきましては、[こちらのページ](./errata.md)をご覧ください。

<br />

## ■ 目次

### 第 1 章 こんにちは React

- 1-1. 環境構築
- 1-2. Hello, World!（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/01-hello/02-hello)）
- 1-3. Yarn コマンド

### 第 2 章 ナウでモダンな JavaScript

- 2-1. ECMAScript
- 2-2. 変数の宣言（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/02-javascript/02-var.js)）
- 2-3. アロー関数（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/02-javascript/03-arrow.js)）
- 2-4. クラス構文（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/02-javascript/04-class.js)）
- 2-5. 便利なオブジェクトリテラル（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/02-javascript/05-spread.js)）
- 2-6. 非同期処理を扱う（[サンプルコード 1](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/02-javascript/06-async.js)、[サンプルコード 2](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/02-javascript/06-promise.js)、[サンプルコード 3](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/02-javascript/06-wakeup.js)）

### 第 3 章 関数型プログラミングでいこう

- 3-1. 関数型プログラミングは何がうれしい？
- 3-2. コレクションの反復処理（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/03-fp/02-collection.js)）
- 3-3. 関数型プログラミングの概要
- 3-4. 高階関数（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/03-fp/04-hof.js)）
- 3-5. クロージャ（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/03-fp/05-closure.js)）
- 3-6. ジェネレータ（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/03-fp/06-generator.js)）
- 3-7. カリー化と関数の部分適用（[サンプルコード 1](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/03-fp/07-curried.js)、[サンプルコード 2](https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/03-fp/07-partial.js)）

### 第 4 章 型のある TypeScript は強い味方

- 4-1. TypeScript は今やメジャー言語
- 4-2. 型のバリエーション
- 4-3. 配列とオブジェクト
- 4-4. 関数の型定義（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/04-typescript/04-never.ts)）
- 4-5. コンパイル設定
- 4-6. モジュールの型定義

### 第 5 章 拡張記法 JSX

- 5-1. JSX とは何であるか、何ではないのか
- 5-2. JSX の文法（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/05-jsx/02-jsx)）

### 第 6 章 Lint と Prettier でコードをクリーン化

- 6-1. ESLint（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/06-lint/01-eslint)）
- 6-2. Prettier
- 6-3. 組み合わせとカスタマイズ（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/06-lint/03-mysetting)）

### 第 7 章 何はなくともコンポーネント

- 7-1. React の基本思想
- 7-2. Props をコンポーネントに受け渡す（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/07-component/02-props)）
- 7-3. コンポーネント内部の状態を規定する Local State（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/07-component/03-state)）
- 7-4. コンポーネントのライフサイクル（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/07-component/04-lifecycle)）
- 7-5. 関数コンポーネント（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/07-component/05-functional)）
- 7-6. Presentational Component と Container Component

### 第 8 章 Hooks で関数コンポーネントを強化する

- 8-1. Hooks 登場以前の話
- 8-2. Hooks とは何か
- 8-3. State Hook で Local State の管理（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/08-hooks/03-state)）
- 8-4. Effect Hook でライフサイクルを扱う（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/08-hooks/04-effect)）
- 8-5. Custom Hook で独自の Hook を使う（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/08-hooks/05-custom)）
- 8-6. その他の Hooks

### 第 9 章 ルーティングで URL を制御する

- 9-1. SPA のルーティング
- 9-2. React Router にまつわるあれこれ
- 9-3. React Router の使い方（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/09-routing/03-react-router)）

### 第 10 章 Redux でアプリの状態を管理する

- 10-1. Flux アーキテクチャ
- 10-2. Redux の登場
- 10-3. Redux の使い方（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/10-redux/03-redux)）
- 10-4. Flux Standard Action（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/10-redux/04-fsa)）

### 第 11 章 Redux で非同期処理を扱う

- 11-1. React で非同期処理を扱ういくつかの方法
- 11-2. Redux Thunk vs. Redux-Saga
- 11-3. Redux-Saga を使いこなす（[サンプルコード](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/11-async/03-saga)）

© 2019 [くるみ割り書房 / Nutcracker Books](https://oukayuka.booth.pm/)
