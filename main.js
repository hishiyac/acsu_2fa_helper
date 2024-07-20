javascript:(function(){
  const key = "多要素パスワード";
  if (!location.href.includes("https://gakunin.ealps.shinshu-u.ac.jp/idp/Authn/External")) {
    alert("多要素認証の画面で実行してください");
    return;
  }
  var key_num = [...key].map(c => c.charCodeAt(0) - 64);
  key_num.forEach(num => {
    const button = document.querySelector(`div[style*="i${num}.gif"]`);
    if (button) button.click();
  }); 
  const loginButton = document.getElementById("btnLogin");
  if (loginButton) loginButton.click();
})();