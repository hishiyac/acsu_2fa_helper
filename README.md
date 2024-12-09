# acsu_2fa_helper
信州大学 ACSUの多要素認証を入力するブックマークレット

## 注意

このブックマークレットでは多要素パスワードを平文で扱います。取り扱いには十分注意し、自己責任でご利用ください。利用による損害について、リポジトリの作者は一切の責任を負いません。

## 使用方法

#### 1. 以下のコードをブックマークに登録

PCであれば、以下のコードを全て選択した上で、ブックマークバーにドラッグアンドドロップすることで登録できます。

```javascript
javascript:'use strict';(function(){if(location.href.includes("https://gakunin.ealps.shinshu-u.ac.jp/idp/Authn/External")){[..."多要素パスワード"].map(a=>a.charCodeAt(0)-64).forEach(a=>{(a=document.querySelector(`div[style*="i${a}.gif"]`))&&a.click()});var b=document.getElementById("btnLogin");b&&b.click()}else alert("多要素認証の画面で実行してください")})();
```
スマートフォンの場合は知りません

#### 2. ブックマークを編集

URLの前半から`[..."多要素パスワード"].map`の部分を探します。
その後、`多要素パスワード`の部分を設定した多要素パスワードに置き換えます。このとき、半角大文字で入力してください。

例: `ABCD`の場合、`[..."ABCD"].map`とします。

#### 3. 多要素認証画面で実行

多要素認証画面でブックマークをクリックすると、多要素パスワードを自動入力します。
スマートフォンの場合は、URL欄にブックマークの名前の一部を入力し、出てきたブックマークの候補を押すと実行できます。
