describe("Colamone AIのテスト(ざっくり)", function() {
  var thisMap;

  beforeEach(function() {
    thisMap={  0:-1,10:-2,20:-3,30:-4,40:-5,50:-6,
                   1: 0,11:-8,21: 0,31: 0,41:-7,51: 0,
                   2: 0,12: 0,22: 0,32: 0,42: 0,52: 0,
                   3: 0,13: 0,23: 0,33: 0,43: 0,53: 0,
                   4: 0,14: 7,24: 0,34: 0,44: 8,54: 0,
                   5: 6,15: 5,25: 4,35: 3,45: 2,55: 1,
                  }
  });
    
  it("MAPのコピーがうまくいくか", function() {
      var map=Aijs.copyMap(thisMap);
      expect(map).toEqual(thisMap);
  });
    
  it("移動可能マスを正しく返すか", function() {
      var map1={    0: 0,10: 0,20: 0,30: 0,40: 0,50: 0,
                   1: 0,11: 1,21: 0,31: 2,41: 0,51: 0,
                   2: 0,12: 0,22: 0,32: 0,42: 0,52: 0,
                   3: 0,13: 3,23: 0,33: 4,43: 0,53: 0,
                   4: 0,14: 0,24: 0,34: 0,44: 0,54: 0,
                   5: 0,15: 0,25: 0,35: 0,45: 0,55: 0,
                  }
      var map2={   0: 0,10: 0,20: 0,30: 0,40: 0,50: 0,
                   1: 0,11: 5,21: 0,31: 6,41: 0,51: 0,
                   2: 0,12: 0,22: 0,32: 0,42: 0,52: 0,
                   3: 0,13: 7,23: 0,33: 8,43: 0,53: 0,
                   4: 0,14: 0,24: 0,34: 0,44: 0,54: 0,
                   5: 0,15: 0,25: 0,35: 0,45: 0,55: 0,
                  }
      var map3={   0: 0,10: 0,20: 0,30: 0,40: 0,50: 0,
                   1: 0,11: 0,21: 0,31: 0,41: 0,51: 0,
                   2: 0,12: 0,22: 1,32: 0,42: 0,52: 0,
                   3: 0,13: 0,23: 8,33: 0,43: 0,53: 0,
                   4: 0,14: 0,24: 0,34: 0,44: 0,54: 0,
                   5: 0,15: 0,25: 0,35: 0,45: 0,55: 0,
                  }
      var canMove;
      
      //1の動きテスト
      canMove=Aijs.getCanMovePanelX(11,map1);
      expect(canMove).toEqual([0,10,20,1,21,2,12,22]);
      
      //2の動きテスト
      canMove=Aijs.getCanMovePanelX(31,map1);
      expect(canMove).toEqual([20,30,40,21,41,22,42]);

       //3の動きテスト
      canMove=Aijs.getCanMovePanelX(13,map1);
      expect(canMove).toEqual([2,12,22,4,14,24]);
      
      //4の動きテスト
      canMove=Aijs.getCanMovePanelX(33,map1);
      expect(canMove).toEqual([22,32,42,24,44]);
      
      //5の動きテスト
      canMove=Aijs.getCanMovePanelX(11,map2);
      expect(canMove).toEqual([0,20,2,22]);

      //6の動きテスト
      canMove=Aijs.getCanMovePanelX(31,map2);
      expect(canMove).toEqual([20,40,32]);
      
      //7の動きテスト
      canMove=Aijs.getCanMovePanelX(13,map2);
      expect(canMove).toEqual([12,14]);

      //8の動きテスト
      canMove=Aijs.getCanMovePanelX(33,map2);
      expect(canMove).toEqual([32]);
      
      //障害物のテスト
      canMove=Aijs.getCanMovePanelX(23,map3);
      expect(canMove).toEqual([]);
      
      
  });    

  it("勝利判定がちゃんと動いてるか", function() {
    var blueWinMap={  0:0,10:0,20:0,30:-4,40:6,50:2,
                   1: 0,11:0,21: 0,31: 0,41:0,51: 0,
                   2: 0,12: 0,22: 0,32: 0,42: 0,52: 0,
                   3: 0,13: 0,23: 0,33: 0,43: 0,53: 0,
                   4: 0,14: 7,24: 0,34: 0,44: 8,54: 0,
                   5: 0,15: 5,25: 4,35: 3,45: 0,55: 1,
                  }
    var redWinMap={  0:-1,10:-2,20:-3,30:0,40:0,50:-6,
                   1: 0,11:-8,21: 0,31: 0,41:-7,51: 0,
                   2: 0,12: 0,22: 0,32: 0,42: 0,52: 0,
                   3: 0,13: 0,23: 0,33: 0,43: 0,53: 0,
                   4: 0,14: 7,24: 0,34: 0,44: 8,54: 0,
                   5: 6,15: -5,25: -4,35: 3,45: 2,55: 1,
                  }
    var blueWinMap2={  0: 0,10: 1,20: 0,30: 0,40: 0,50: 0,
                       1: 0,11: 0,21: -2,31: -4,41: 0,51: 0,
                       2: 0,12: 0,22: 0,32: 0,42: 0,52: 0,
                       3: 0,13: 0,23: 0,33: 0,43: 0,53: 0,
                       4: 0,14: 0,24: 0,34: 0,44: 0,54: 0,
                       5: 0,15: 0,25: 0,35: 0,45: 0,55: 0,
                  }
    var redWinMap2= {  0: 0,10: 0,20: 0,30: 0,40: 0,50: 0,
                       1: 0,11: 0,21: 2,31: 4,41: 0,51: 0,
                       2: 0,12: 0,22: 0,32: 0,42: 0,52: 0,
                       3: 0,13: 0,23: 0,33: 0,43: 0,53: 0,
                       4: 0,14: 0,24: 0,34: 0,44: 8,54: 0,
                       5: 0,15: 0,25: 0,35:-1,45: 0,55: 0,
                  }
    var drawMap= {     0: 0,10: 0,20: 0,30: 8,40: 0,50: 0,
                       1: 0,11: 0,21: 0,31: 0,41: 0,51: 0,
                       2: 0,12: 0,22: 0,32: 0,42: 0,52: 0,
                       3: 0,13: 0,23: 0,33: 0,43: 0,53: 0,
                       4: 0,14: 0,24: 0,34: 0,44: 0,54: 0,
                       5: 0,15: 0,25: 0,35:-8,45: 0,55: 0,
                  }
    expect(Aijs.isEndX(blueWinMap,false)).toBe(1);
    expect(Aijs.isEndX(redWinMap,false)).toBe(-1);
    expect(Aijs.isEndX(blueWinMap2,false)).toBe(1);
    expect(Aijs.isEndX(redWinMap2,false)).toBe(-1);
    expect(Aijs.isDraw(drawMap)).toBe(true);

  });
    
  it("とりあえずCPU先手で一手考えてみる", function() {
        var turn_player=1;
        hand=Aijs.thinkAI(thisMap,turn_player,3)[0];
        expect(hand[0]).isBoardNumber();
        expect(hand[1]).isBoardNumber();
        console.log('先手：'+hand[0]+'→'+hand[1]);
  });
  it("とりあえずCPU後手で一手考えてみる", function() {
        var turn_player=1;
        hand=Aijs.thinkAI(thisMap,turn_player,3)[0];
        expect(hand[0]).isBoardNumber();
        expect(hand[1]).isBoardNumber();
        console.log('後手：'+hand[0]+'→'+hand[1]);
  });
  it("思考レベル4でじっくり考えてみる", function() {
        var turn_player=-1;
        hand=Aijs.thinkAI(thisMap,turn_player,5)[0];
        expect(hand[0]).isBoardNumber();
        expect(hand[1]).isBoardNumber();
        console.log('レベル4：'+hand[0]+'→'+hand[1]);
  });
  it("CPU同士で一局指して見る(レベル1)", function() {
        var turn_player=1;
        var end;
        var map=Aijs.copyMap(thisMap);
        var count=0;
        while(true){
            count+=1;
            if(count>255){
                expect(0).toBeTruthy();  
                break;
            }
            hand=Aijs.thinkAI(map,turn_player,2)[0];
            map[hand[1]]=map[hand[0]];
            map[hand[0]]=0;
            if(Aijs.isDraw(map)===true){
                end=0;
                break;
            }
            end=Aijs.isEndX(map,false);
            if(end===1||end===-1){
                break;
            }
            turn_player=turn_player*-1;
            
        }
        expect([0, 1, -1]).toContain(end);
        console.log('Player '+end+' WIN');

  });
    
    
});
