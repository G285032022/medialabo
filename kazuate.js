// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

let n;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let expect = document.querySelector('button#kaitou');
expect.addEventListener('click',hantei);
//hantei();
//hantei();
//hantei();
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    let i = document.querySelector('input[name="kazu"]');
    let kazu = i.value;
    let yoso = Number.parseInt(kazu);
    // 課題3-1: 正解判定する
    // kotae と yoso が一致するかどうか調べて結果を出力
    // 課題3-1における出力先はコンソール
    let s = document.querySelector('span#kaisu');
    s.textContent = kaisu + 1;
    let s0 = document.querySelector('span#answer');
    s0.textContent = yoso;
    
    console.log((kaisu+1) + "回目の予想: " + yoso);

    if(kaisu < 3){
      if(kotae === yoso){
        n = "正解です．おめでとう!";
        kaisu = kaisu + 4
      } else if(kaisu === 2){
        n = "まちがい．残念でした答えは "+kotae+" です．";
        kaisu++;
      } else if(kotae > yoso){
        n = "まちがい．答えはもっと大きいですよ";
        kaisu++;
      } else {
        n = "まちがい．答えはもっと小さいですよ";
        kaisu++;
      }
    } else {
      n = "答えは " + kotae + " でした．すでにゲームは終わっています";
      kaisu++;
    }

    let s1 = document.querySelector('p#result');
    s1.textContent = n;
}