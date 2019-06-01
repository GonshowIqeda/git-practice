
//初期化関数の定義
var Initialize = function(){
  /*display要素が"none"の時は画面から消えている。
    "block"の時は画面に表示されている*/
    document.getElementById('select').style.display="block";
    document.getElementById('meoryou').style.display="none";
    document.getElementById('mygoo').style.display="none";
    document.getElementById('mychoki').style.display="none";
    document.getElementById('mypah').style.display="none";
    document.getElementById('yourgoo').style.display="none";
    document.getElementById('yourchoki').style.display="none";
    document.getElementById('yourpah').style.display="none";
    document.getElementById('res1').style.display="none";
    document.getElementById('res2').style.display="none";
    document.getElementById('res3').style.display="none";
    document.getElementById('return').style.display="none";
}
Initialize();   //初期化

//クリック時の動作を記述した関数
var game = function(i){
  //まず結果発表に必要なものを画面に表示
  document.getElementById('select').style.display="none";
  document.getElementById('meoryou').style.display="block";
  //次に自分の手を表示
  switch(i){
    case 1:
      document.getElementById('mygoo').style.display="block";
    break;
    case 2:
      document.getElementById('mychoki').style.display="block";
    break;
    case 3:
      document.getElementById('mypah').style.display="block";
    break;
  }
  var k=Math.random();//ランダム値生成
  var j =0;
  if(k<0.33){
    j=1;//相手はグー
    document.getElementById('yourgoo').style.display="block";
  }else if(k<0.66){
    j=2;//相手はチョキ
    document.getElementById('yourchoki').style.display="block";
  }else {
    j=3;//相手はパー
    document.getElementById('yourpah').style.display="block";
  }


  if(i==j){//あいこの場合
    document.getElementById('res1').style.display="block";
  }else if(//勝ちの場合
    (i==1 && j==2)||
    (i==2 && j==3)||
    (i==3 && j==1)
  ){
    document.getElementById('res2').style.display="block";
  }else if(//負けの場合
    (j==1 && i==2)||
    (j==2 && i==3)||
    (j==3 && i==1)
  ){
    document.getElementById('res3').style.display="block";
  }
  //最後に”もう一度”ボタンを表示
  document.getElementById('return').style.display="block";
}
