# 各版における内容の変更

## 初版から第2版への差分

- Create React App 本家が TypeScript を直接サポートし、[create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript) はパッケージそのものが非推奨になったため、create-react-app-typescript を使用していた部分を create-react-app に入れ替えた。
- 「2-5. 便利な配列やオブジェクのトリテラル」に、分割代入についての説明を追加。
- 「3-5. クロージャ」の章を追加。
- 「3-6. ジェネレータ」の章を追加。
- 「4-2. 型のバリエーション」に、never型についての説明を追加。
- 「4-3. 配列とオブジェクト」の交差型と共用型についての説明の誤りを訂正。および TypeScript 3.4 から導入された Readonly 型についての説明を追加。
- 「4-5. コンパイル設定」に、絶対パスインポートについての説明を追加。
- TypeScript の構文チェックツール TSLint については ESLint への統合プランが発表され1、近い将来に非推奨になるとアナウンスがあったため、「6-1. TSLint」の内容を「6-2. ESLint」に変更。加えて全てのサンプルコードの TSLint の環境を ESLint に移行。
- 「7-5. 関数コンポーネント」で Stateless Functional Component（SFC）の呼称を Function Component（FC）に変更。
- Hooks が導入され Recompose の開発中止が宣告されたため、第8章の内容を「合成するぞ Recompose」から「Hooks で関数コンポーネントを強化する」に置き換える形で刷新。
- 「10-3. Reduxの使い方」で、最新のReduxおよびReact Reduxに対応した型解決の記述法に切り替えた。
- TypeScript FSAの更新が滞っているため、「10-4. Flux Standard Action」の内容をTypeScript FSAを使わない手法を使ったものに書き換えた。
- 「10-5. Redux DevTools」の内容を[『りあクト！ TypeScriptで極める現場のReact開発』](https://oukayuka.booth.pm/items/1312815)に委譲。
- 「第11章 Reduxで非同期処理を扱う」の内容を追加。
- その他使用している主なパッケージを、2019年3月時点の最新バージョンにアップデート。

<br />

## 第2版から第2.1版への差分

- 「1-1. 環境構築」にて、非推奨になった [ndenv](https://github.com/riywo/ndenv) を [nodenv](https://github.com/nodenv/nodenv) に置き換えた。併せて、[nodenv-update](https://github.com/nodenv/nodenv-update) と [nodenv-default-packages](https://github.com/nodenv/nodenv-default-packages) のふたつのプラグインを導入。
- 「2-6. 非同期処理を扱う」の3つのサンプルコードを全て刷新した。
- 「3-6. ジェネレータ」の章を削除。
- 「4-2. 型のバリエーション」の章名を「4-2. プリミティブ型」に変更。Enum 型についての記述を追加。
- 「4-3. 配列とオブジェクトの型」で `interface` より `type` での型宣言を使うことを推奨するように記述を変更。
- 「4-5. コンパイル設定」で `incremental` と `baseUrl` オプションの説明を追加。
- 「4-6. モジュールの型定義」で typesync の説明を追加。
- 「5-1. JSX とは何であるか、何ではないのか」で引用している統計指標をアップデートし、説明をよりくわしく拡充。
- 「6-1. ESLint」で `yarn eslint --init` による設定ファイル作成の方法を紹介。ルールセットやプラグイン、各適用ルールの説明についても新しく追加。
- その他使用している主なパッケージを、2020年1月時点の最新バージョンにアップデート。
