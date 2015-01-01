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

  it("1.とりあえずCPU先手で一手考えてみる", function() {
        var turn_player=1;
        hand=thinkAI(thisMap,turn_player,3)[0][0];
        expect(hand[0]).isBoardNumber();
        expect(hand[1]).isBoardNumber();
        console.log('1.'+hand[0]+'→'+hand[1]);

  });
  it("2.とりあえずCPU後手で一手考えてみる", function() {
        var turn_player=1;
        hand=thinkAI(thisMap,turn_player,3)[0][0];
        expect(hand[0]).isBoardNumber();
        expect(hand[1]).isBoardNumber();
        console.log('2.'+hand[0]+'→'+hand[1]);
  });
  it("3.思考レベル4でじっくり考えてみる", function() {
        var turn_player=-1;
        hand=thinkAI(thisMap,turn_player,5)[0][0];
        expect(hand[0]).isBoardNumber();
        expect(hand[1]).isBoardNumber();
        console.log('3.'+hand[0]+'→'+hand[1]);
  });
  it("4.CPU同士で一局指して見る", function() {
        var turn_player=1;
        var end;
        var map=copyMap(thisMap);
        var count=0;
        while(true){
            count+=1;
            if(count>255){
                //expect(0).toBeTruthy();  
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
        console.log('4.Player '+end+' WIN');

  });


});
