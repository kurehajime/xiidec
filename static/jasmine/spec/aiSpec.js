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
    expect(isEndX(blueWinMap,false)).toBe(1);
    expect(isEndX(redWinMap,false)).toBe(-1);
    expect(isEndX(blueWinMap2,false)).toBe(1);
    expect(isEndX(redWinMap2,false)).toBe(-1);

  });
    
  it("とりあえずCPU先手で一手考えてみる", function() {
        var turn_player=1;
        hand=thinkAI(thisMap,turn_player,3)[0][0];
        expect(hand[0]).isBoardNumber();
        expect(hand[1]).isBoardNumber();
        console.log('先手：'+hand[0]+'→'+hand[1]);

  });
  it("とりあえずCPU後手で一手考えてみる", function() {
        var turn_player=1;
        hand=thinkAI(thisMap,turn_player,3)[0][0];
        expect(hand[0]).isBoardNumber();
        expect(hand[1]).isBoardNumber();
        console.log('後手：'+hand[0]+'→'+hand[1]);
  });
  it("思考レベル4でじっくり考えてみる", function() {
        var turn_player=-1;
        hand=thinkAI(thisMap,turn_player,5)[0][0];
        expect(hand[0]).isBoardNumber();
        expect(hand[1]).isBoardNumber();
        console.log('レベル4：'+hand[0]+'→'+hand[1]);
  });
  it("CPU同士で一局指して見る(レベル2)", function() {
        var turn_player=1;
        var end;
        var map=copyMap(thisMap);
        var count=0;
        while(true){
            count+=1;
            if(count>255){
                expect(0).toBeTruthy();  
                break;
            }
            hand=thinkAI(map,turn_player,3)[0][0];
            map[hand[1]]=map[hand[0]];
            map[hand[0]]=0;
            if(isDraw(map)===true){
                end=0;
                break;
            }
            end=isEndX(map,false);
            if(end===1||end===-1){
                break;
            }
            turn_player=turn_player*-1;
            
        }
        expect([0, 1, 2]).toContain(end);
        console.log('Player '+end+' WIN');

  });


});
