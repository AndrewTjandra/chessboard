function chessboard(n){
  var myChessboard = '';

  for(var i = 1; i <= n; i++){
    for(var j = 0; j < n; j++){
      if((i + j) % 2 === 0){
        myChessboard += '#';
      } else {
        myChessboard += ' ';
      }
    }
    if(i < n){
      myChessboard += '\n';
    }
  }
  return myChessboard;
}

console.log(chessboard(8));
