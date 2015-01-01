beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    }
      
      
  ,isBoardNumber: function () {
      return {
        compare: function (actual, expected) {
            var number = parseInt(actual);
            var rtn=false;
          switch(number){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
                rtn=true;
                break;
            default :
                rtn=false;
          }

          return {
            pass: rtn
          }
        }
      };
    }
      
      
      
  });
});
