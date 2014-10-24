//"use strict"
var ctx=null;
var isTouch=true;
var canv_board=null;
var canv_board2=null;
var canv_focus=null;
var canv_pieces=null;
var canv_hover_piece=null;
var canv_overlay=null;
var hover_piece=null;
var cellSize=null;
var turn_player=null;
var blueScore=0;
var redScore=0;
var winner=null;
var isDraw=false;
var message="";
var thinktime=0.0;
var thinking=true;
var apikey="";
var COLOR_LINE="#333333";
var COLOR_PANEL_1="#550025";
var COLOR_PANEL_2="#003856";
var COLOR_PANEL_3="#FFFFFF";
var COLOR_PANEL_4="#111111";
var COLOR_PANEL_5="#444444";
var COLOR_PANEL_6="#888888";

var COLOR_SELECT="#88FF88";
var COLOR_RED="#E5004F";
var COLOR_BLUE="#00A0E9";
var COLOR_WHITE="#FFFFFF";
var COLOR_GOLD="#FFFF00";
var PIECES={"1":[1,1,1,
                 1,0,1,
                 1,1,1],
            "2":[1,1,1,
                 1,0,1,
                 1,0,1],
            "3":[1,1,1,
                 0,0,0,
                 1,1,1],
            "4":[1,1,1,
                 0,0,0,
                 1,0,1],
            "5":[1,0,1,
                 0,0,0,
                 1,0,1],
            "6":[1,0,1,
                 0,0,0,
                 0,1,0],
            "7":[0,1,0,
                 0,0,0,
                 0,1,0],
            "8":[0,1,0,
                 0,0,0,
                 0,0,0],
            "-1":[1,1,1,
                  1,0,1,
                  1,1,1],
            "-2":[1,0,1,
                  1,0,1,
                  1,1,1],
            "-3":[1,1,1,
                  0,0,0,
                  1,1,1],
            "-4":[1,0,1,
                  0,0,0,
                  1,1,1],
            "-5":[1,0,1,
                  0,0,0,
                  1,0,1],
            "-6":[0,1,0,
                  0,0,0,
                  1,0,1],
            "-7":[0,1,0,
                  0,0,0,
                  0,1,0],
            "-8":[0,0,0,
                  0,0,0,
                  0,1,0]
           }

var thisMap={  0:-1,10:-2,20:-3,30:-4,40:-5,50:-6,
               1: 0,11:-8,21: 0,31: 0,41:-7,51: 0,
               2: 0,12: 0,22: 0,32: 0,42: 0,52: 0,
               3: 0,13: 0,23: 0,33: 0,43: 0,53: 0,
               4: 0,14: 7,24: 0,34: 0,44: 8,54: 0,
               5: 6,15: 5,25: 4,35: 3,45: 2,55: 1,
              }


var mouse_x =0;
var mouse_y =0;
var storage = localStorage;
var startMap;
var logPointer=0;
var logArray=new Array();
var logArray2=new Array();


//init
$(function(){
    //初期化
    ctx=$("#canv")[0].getContext('2d');
    
    canv_board =document.createElement("canvas");
    canv_board.width=ctx.canvas.width;
    canv_board.height=ctx.canvas.height;

    canv_board2 =document.createElement("canvas");
    canv_board2.width=ctx.canvas.width;
    canv_board2.height=ctx.canvas.height;

    
    canv_focus =document.createElement("canvas");
    canv_focus.width=ctx.canvas.width;
    canv_focus.height=ctx.canvas.height;

    canv_pieces =document.createElement("canvas");
    canv_pieces.width=ctx.canvas.width;
    canv_pieces.height=ctx.canvas.height;
    
    canv_hover_piece =document.createElement("canvas");
    canv_hover_piece.width=ctx.canvas.width;
    canv_hover_piece.height=ctx.canvas.height;
    
    canv_overlay =document.createElement("canvas");
    canv_overlay.width=ctx.canvas.width;
    canv_overlay.height=ctx.canvas.height;
    
    
    cellSize=ctx.canvas.width /6;
    turn_player=1;

    if('ontouchstart' in window){
        isTouch=true;
    }else{
        isTouch=false;        
    }
    //イベントを設定
    if(isTouch){
        $("#canv").bind('touchstart',ev_mouseClick)
    }else{
        $("#canv").bind('mousemove ',ev_mouseMove)
        $("#canv").bind('mouseup',ev_mouseClick);
    }
    $("input[name='level']").bind('click',ev_radioChange);
    $("#prevprev").bind('click',move_start);
    $("#prev").bind('click',move_prev);
    $("#next").bind('click',move_next);
    $("#nextnext").bind('click',move_end);
    $("#replay").bind('click',jumpkento);
    $("#newgame").bind('click',reloadnew);
    $("#connect").bind('click',begingame);
    $("#initpeer").bind('click',init_peer);
    
    shuffleBoard();
    
    //連勝記録初期化
    if(!storage.getItem('level_1')){
        storage.setItem('level_1',0);
    }
    if(!storage.getItem('level_2')){
        storage.setItem('level_2',0);
    }
    if(!storage.getItem('level_3')){
        storage.setItem('level_3',0);
    }
    //レベル記憶
    if(storage.getItem('level_save')!=undefined && storage.getItem('level_save')!="undefined"){
         $('input[name=level]').val([ parseInt(storage.getItem('level_save')) ]); 
    }else{
        storage.setItem('level_save',2);
         $('input[name=level]').val([2]); 
    }
    
    
    //パラメータを取得
    var paramObj=getParam();
    //盤面を初期化
    if(paramObj["init"]){
        startMap= getMapByParam(paramObj["init"]);
        thisMap=copyMap(startMap);
    }else{
        startMap=copyMap(thisMap);
    }
    //ログをデコード
    if(paramObj["log"]){
        logArray=decodeLog(paramObj["log"],startMap);
    }
    
    if(logArray.length!=0){
        $("#log").show();
        $("#prevprev").show();
        $("#prev").show();
        $("#next").show();
        $("#nextnext").show();
        $("#replay").hide();
    }else{
        $("#log").hide();
        $("#prevprev").hide();
        $("#prev").hide();
        $("#next").hide();
        $("#nextnext").hide();
        $("#replay").hide();
    }
    
    //描画
    flush();
    updateMessage();

});

//マウス移動時処理
function ev_mouseMove(e){
    getMousePosition(e);
    flush();
}
//マウスクリック時処理
function ev_mouseClick(e){
    getMousePosition(e);
    var target=Math.floor(mouse_x/cellSize)*10
                +Math.floor(mouse_y/cellSize)
    if(thinking==true){
        return true;
    }
    
    if(winner!=null ||logArray.length!=0){
        reloadnew();
        return true;
    }
    if(hover_piece==null){
        if(thisMap[target]*turn_player>0){
            hover_piece=target;
        }
    }else{
        if(target==hover_piece){
            hover_piece=null;
            updateMessage();
            flush();
            return;
        }
        var canm=getCanMovePanel(hover_piece);
        if(canm.indexOf (target)>=0){
            thisMap[target]=thisMap[hover_piece];
            thisMap[hover_piece]=0;
            //turn_player=turn_player*-1;
            logArray2.push([hover_piece,target]);
            hover_piece=null;

            //AIが考える。
            drawFocus();
            message="thinking..."
            thinking=true;
            flush();
            updateMessage();
            connect_peer();
        }        
    }
    drawFocus();
//    updateMessage();
    flush();
}
function ev_radioChange(){
    var num = $("input[name='level']:checked").val();
    storage.setItem('level_save',num);
    if(storage.getItem('level_'+num)>0){
        $("#wins")[0].innerHTML=storage.getItem('level_'+num)+" win!";
    }else{
        $("#wins")[0].innerHTML="";
    }
}

//盤面をシャッフル
function shuffleBoard(){
    //クリア
    for(var num in thisMap){
        thisMap[num]=0;   
    }
    var arr=[1,2,3,4,5,6,7,8];
    var red_num=[0,10,20,30,40,50,11,41];
    var blue_num=[55,45,35,25,15,5,44,14];
    for(var i=0;i<=666;i++){
        arr.sort(function() {
                return Math.random() - Math.random();
            });        
    }
    
    for(var num in blue_num){
        thisMap[blue_num[num]]=arr[num];   
    }
    for(var num in red_num){
        thisMap[red_num[num]]=-1*arr[num];   
    }
}


// マウス位置取得  
function getMousePosition(e) {  
	if(!e.clientX){//SmartPhone
        if(e.touches){
            e = e.touches[0];            
        }else{
            e = event.touches[0];            
        }
    }
    var rect = e.target.getBoundingClientRect();
    mouse_x = e.clientX - rect.left;  
    mouse_y = e.clientY - rect.top;  
}  
//画面描画
function flush(){
    var wkMap=$.extend(true,{},thisMap)
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.width);

    //盤面を描画
    ctx.drawImage(drawBoard(), 0, 0, ctx.canvas.width, ctx.canvas.height);
    
    //テカリを描画
    ctx.drawImage(drawBoard2(), 0, 0, ctx.canvas.width, ctx.canvas.height);
    
    //選択したコマを除外
    if(hover_piece!=null){
        wkMap[hover_piece]=0;
    }
    //コマを表示
    ctx.drawImage(drawPieceAll(wkMap), 0, 0, ctx.canvas.width, ctx.canvas.height);
    
    //選択したコマを表示
    ctx.drawImage(drawHoverPiece(), 0, 0, ctx.canvas.width, ctx.canvas.height);
    
    //フォーカスを描画
    ctx.drawImage(drawFocus(), 0, 0, ctx.canvas.width, ctx.canvas.height);
    
    //メッセージを描画
    ctx.drawImage(drawOverlay(), 0, 0, ctx.canvas.width, ctx.canvas.height);
    
    
    
}
//フォーカスを描画
function drawFocus(){
    //選択マスを強調
    var x=mouse_x- (mouse_x % cellSize);
    var y=mouse_y- (mouse_y % cellSize);
    var ctx_focus=canv_focus.getContext('2d');
    ctx_focus.clearRect(0,0,ctx.canvas.width,ctx.canvas.width);
    ctx_focus.globalAlpha = 0.5;
    ctx_focus.fillStyle=COLOR_SELECT;
    ctx_focus.lineWidth =1;
    ctx_focus.beginPath();
    ctx_focus.fillRect(x, y, cellSize, cellSize);
    
    if(isTouch==true &&hover_piece==null){
        return canv_focus;
    }

    //移動可能マスを強調
    var target=(x/cellSize)*10+(y/cellSize);
    if(thisMap[target]*turn_player>0){
        var canm = getCanMovePanel(target)
        for(var i=0;i<=canm.length-1;i++){
            x=Math.floor(canm[i]/10);
            y=Math.floor(canm[i]%10);
            ctx_focus.strokeStyle  = COLOR_SELECT;
            ctx_focus.lineWidth =5;
            ctx_focus.beginPath();
            ctx_focus.arc(x*cellSize+(cellSize/2), y*cellSize+(cellSize/2)
                          , (cellSize/2)-10, 0, Math.PI*2, false);
            ctx_focus.stroke();
        }        
    }
    return canv_focus;
}



//盤面を描画してCANVASオブジェクトを返す。
function drawBoard(){
    var ctx_board=canv_board.getContext('2d');
    ctx_board.clearRect(0,0,ctx.canvas.width,ctx.canvas.width);

    var grad  = ctx_board.createLinearGradient(0,0,ctx.canvas.width,ctx.canvas.width);
    grad.addColorStop(0,COLOR_PANEL_6);    
    grad.addColorStop(0.3,COLOR_PANEL_5); 
    grad.addColorStop(1,COLOR_PANEL_4);                  

    
    for(var x=0;x<6;x++){
        for(var y=0;y<6;y++){
            //パネル描画
            ctx_board.strokeStyle = COLOR_LINE;
            if(y==0){
                ctx_board.fillStyle=COLOR_PANEL_1;
            }else if(y==5){
                ctx_board.fillStyle=COLOR_PANEL_2;            
            }else if((x+y) % 2 ==0){
                ctx_board.fillStyle=COLOR_PANEL_3;
            }else{
                ctx_board.fillStyle=COLOR_PANEL_4;
                ctx_board.fillStyle   = grad
            }
            ctx_board.beginPath();
            ctx_board.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
            ctx_board.strokeRect(x*cellSize, y*cellSize, cellSize, cellSize);
        }
    }
    
    return canv_board;
}
function drawBoard2(){
    var ctx_board2=canv_board2.getContext('2d');
    ctx_board2.clearRect(0,0,ctx.canvas.width,ctx.canvas.width);
    ctx_board2.globalAlpha = 0.07;
    ctx_board2.fillStyle = COLOR_WHITE;
    ctx_board2.beginPath();
    ctx_board2.arc(cellSize*1, -3*cellSize, 7*cellSize, 0, Math.PI*2, false);
    ctx_board2.fill();

    return canv_board2;
}
//浮遊しているコマを描画する。
function drawHoverPiece(){
    var ctx_hover=canv_hover_piece.getContext('2d');
    ctx_hover.clearRect(0,0,ctx.canvas.width,ctx.canvas.width);
    var x = mouse_x-(cellSize/2)
    var y = mouse_y-(cellSize/2)
    if(hover_piece!=null){
        drawPiece(ctx_hover,x,y,thisMap[hover_piece]
                  ,false)
    }
    return canv_hover_piece;
}
//コマを描画する。
function drawPiece(wkCtx,x,y,number,goal){
    var wkColor;
    
    //外枠を描画
    if(number==0){
        return wkCtx;
    }else if(number>0){
        wkColor=COLOR_BLUE;   
    }else{
        wkColor=COLOR_RED;           
    }
    //wkCtx.fillStyle = wkColor;
    var grad  = ctx.createLinearGradient(x,y, x+cellSize,y+cellSize);
    grad.addColorStop(0,'rgb(255, 255, 255)');    
    grad.addColorStop(0.4,wkColor); 
    grad.addColorStop(1,wkColor);  
    wkCtx.fillStyle   = grad;
    
    
    wkCtx.beginPath();
    wkCtx.fillRect(x+cellSize/10,y+cellSize/10,cellSize-1*cellSize/5,cellSize-1*cellSize/5);
    
    //文字を描画。
    if(goal){
        wkCtx.fillStyle   = COLOR_GOLD;                
    }else{
        wkCtx.fillStyle   = COLOR_WHITE;        
    };        
    
    
    
    var fontsize=Math.round(cellSize*0.18);
    wkCtx.textBaseline ="middle";
    wkCtx.textAlign="center";
    wkCtx.font = fontsize+"pt Arial";
    wkCtx.beginPath();
    
    //数字を印字
    wkCtx.fillText(Math.abs(number), x+(cellSize/2), y+(cellSize/2));

    
    //点を描画
    for(var i =0;i<= PIECES[number].length-1;i++){
        if(PIECES[number][i]==0){
            continue;   
        }
        var x_dot = x+cellSize/4.16+( Math.floor (cellSize-1*cellSize/5)/3)*Math.floor (i % 3.0);
        var y_dot = y+cellSize/4.16+( Math.floor (cellSize-1*cellSize/5)/3)*Math.floor (i / 3.0);

        if(goal){
            wkCtx.fillStyle   = COLOR_GOLD;                
        }else{
            wkCtx.fillStyle   = COLOR_WHITE;        
        }
        wkCtx.beginPath();
        wkCtx.arc(x_dot, y_dot, cellSize*0.06, 0, Math.PI*2, false);
        wkCtx.fill();
    }
    
    
    return wkCtx;
    
}
//コマをすべて描画
function drawPieceAll(wkMap){
    var ctx_pieces=canv_pieces.getContext('2d');
    ctx_pieces.clearRect(0,0,ctx.canvas.width,ctx.canvas.width);
    for(var x=0;x<6;x++){
        for(var y=0;y<6;y++){
            if(wkMap[x*10+y]!=0){
                var goal=false;
                if(y*cellSize,wkMap[x*10+y]>0 & y==0){
                    goal=true;
                }else if(y*cellSize,wkMap[x*10+y]<0 & y==5){
                    goal=true;
                }
                ctx_pieces=drawPiece(ctx_pieces,x*cellSize
                                        ,y*cellSize,wkMap[x*10+y],goal);
            }
        }
    }
    return canv_pieces;
}

//メッセージを描画
function drawOverlay(){
    var ctx_overlay=canv_overlay.getContext('2d');
    var x = cellSize*1.5
    var y = cellSize*2.5
    
    ctx_overlay.clearRect(0,0,ctx.canvas.width,ctx.canvas.width);

    if(message==""){
        return canv_overlay;
    }
    ctx_overlay.globalAlpha = 0.8;
    ctx_overlay.fillStyle = COLOR_WHITE;
    ctx_overlay.beginPath();
    ctx_overlay.fillRect(x,y,cellSize*3,cellSize*1);
    ctx_overlay.fill();
    
    var fontsize=Math.round(cellSize*0.36);    
    ctx_overlay.font = "bold "+fontsize+"px sans-serif";
    ctx_overlay.globalAlpha = 1;
    ctx_overlay.fillStyle = COLOR_LINE;
    ctx_overlay.textBaseline ="middle";
    ctx_overlay.textAlign="center";
    ctx_overlay.beginPath();
    ctx_overlay.fillText(message, cellSize*3, cellSize*3);
    
    return canv_overlay;
}


//動かせるマスを返す。Return:[NN,NN,NN]
function getCanMovePanel(panel_num){
    var number = thisMap[panel_num];
    var x = Math.floor(panel_num / 10);
    var y = Math.floor(panel_num % 10);
    var canMove=new Array;
    if(number==0){
        return canMove;   
    }
    //アガリのコマは動かしたらダメ。
    if(number>0 & y==0){
        return canMove;   
    }else if(number<0 &y==5){
        return canMove;   
    }

    for(var i=0;i<=PIECES[number].length-1;i++){
        var target_x= x + Math.floor(i%3)-1;
        var target_y= y + Math.floor(i/3)-1;
        
        if(PIECES[number][i]==0){
            continue;
        }
        if(target_x<0 || target_y<0|target_x>5|target_y>5 ){
            continue;
        }
        var target_number=thisMap[target_x*10+target_y];
        if(target_number*number>0){
            continue;   
        }
        //アガリのコマはとったらダメ。
        if(target_number>0 & target_y==0){
            continue;   
        }else if(target_number<0 &target_y==5){
            continue;
        }
        canMove.push(target_x*10+target_y);
        
    }
    return canMove;
}

function updateMessage(){
    calcScore();
    if(turn_player>0){
        $("#turn")[0].innerHTML="Blue";
        $("#turn")[0].style.color=COLOR_BLUE;
    }else if(turn_player<0){
        $("#turn")[0].innerHTML="Red";          
        $("#turn")[0].style.color=COLOR_RED;
    }else{
        $("#turn")[0].innerHTML="";                  
    }
    $("#blue")[0].innerHTML=blueScore;                  
    $("#red")[0].innerHTML=redScore;
    //$("#score")[0].innerHTML=score;
    
    $("#time")[0].innerHTML="("+(thinktime)+"sec)";
    if(logArray.length==0){
        if(winner==1){
            message="You Win!"
            storage.setItem('level_'+$("input[name='level']:checked").val(),
                           parseInt(storage.getItem('level_'+$("input[name='level']:checked").val()))+1);
            endgame();
        }else if(winner==-1){
            message="You Lose..."
            storage.setItem('level_'+$("input[name='level']:checked").val(),0);
            endgame();
        }else if(winner==0){
            message="-- Draw --"
            endgame();
        }
    }

    if(storage.getItem('level_'+$("input[name='level']:checked").val())>0){
        $("#wins")[0].innerHTML=storage.getItem('level_'+$("input[name='level']:checked").val())+" win!";
    }else{
        $("#wins")[0].innerHTML="";   
    }
   
}
function endgame(){
    if(logArray.length==0){
        //$("#tweet").show();
        $("#replay").show();   
    }
}

function calcScore(){
    var sum1=0;
    var sum2=0;
    var GoalTop=[0,10,20,30,40,50];
    var GoalBottom=[5,15,25,35,45,55]; 
    //点数勝利        
    for(var i in GoalTop){
        if(thisMap[GoalTop[i]]*1>0){
            sum1+=thisMap[GoalTop[i]];
        }
    }
    for(var i in GoalBottom){
        if(thisMap[GoalBottom[i]]*-1>0){
            sum2+=thisMap[GoalBottom[i]];
        }
    }
    if(sum1>=8){
        winner= 1;
        thinking=false;
    }else if(sum2<=-8){
        winner= -1;
        thinking=false;
    }

    //手詰まりは判定
    if(isNoneNode(thisMap)){
        if(Math.abs(sum1)>Math.abs(sum2)){
            winner= 1;
            thinking=false;
        }else if(Math.abs(sum1)<Math.abs(sum2)){//引き分けは後攻勝利
            winner= -1;
            thinking=false;
        }else if(Math.abs(sum1)==Math.abs(sum2)){
            winner=0;
            thinking=false;
        }
    }
    blueScore=Math.abs(sum1);
    redScore=Math.abs(sum2);
}
function isEnd(wkMap){
 
}
//手詰まり判定
function isNoneNode(wkMap){
    var flag1=false;
    var flag2=false;
    for(var panel_num in wkMap){
        if(wkMap[panel_num]==0){
            continue;
        }
        var canMove=getCanMovePanelX(panel_num,wkMap,false);
        if(canMove.length!=0){
            if(wkMap[panel_num]>0){
                flag1=true;
            }else if(wkMap[panel_num]<0){
                flag2=true;
            }
        }
        if(flag1&&flag2){
            return false;
        }
    }
    return true;
}

//パラメータ取得
function getParam(){
    var obj = new Object();
    if (1 < document.location.search.length) {
        var paramstr = document.location.search.substring(1).split('&');
        for (var i = 0; i < paramstr.length; i++) {
            var entry = paramstr[i].split('=');
            var key = decodeURIComponent(entry[0]);
            var value = decodeURIComponent(entry[1]);
            obj[key] = decodeURIComponent(value);
        }
    }
    return obj;
}
function getMapByParam(initString){
    if(initString){
        var wkMap=copyMap(thisMap);
        //クリア
        for(var num in wkMap){
            wkMap[num]=0;   
        }
        var arr=initString.split(',');
        if(arr.length<8){
            arr=[1,2,3,4,5,6,7,8];
        }
        var red_num=[0,10,20,30,40,50,11,41];
        var blue_num=[55,45,35,25,15,5,44,14];


        for(var num in blue_num){
            wkMap[blue_num[num]]=parseInt(arr[num]);   
        }
        for(var num in red_num){
            wkMap[red_num[num]]=-1*parseInt(arr[num]);   
        }
    }

    return wkMap;
}
//ログをデコードする。
function decodeLog(logstr,wkInitMap){
    var wklogArray=new Array();
    var wkMap=copyMap(wkInitMap);
    var arrow={ "q":0,"w":1,"e":2,
                "a":3,"s":4,"d":5,
                "z":6,"x":7,"c":8};
    logstr=logstr.replace(/q/g,'q,').replace(/w/g,'w,').replace(/e/g,'e,');
    logstr=logstr.replace(/a/g,'a,').replace(/s/g,'s,').replace(/d/g,'d,');
    logstr=logstr.replace(/z/g,'z,').replace(/x/g,'x,').replace(/c/g,'c,');
    var logArr=logstr.split(",");
    
    wklogArray.push(wkMap);
    for(var i=0;i<logArr.length;i++){
        if(logArr[i]===""){continue;}
        var arw=arrow[logArr[i].match(/[qweasdzxc]/)[0]];
        var from=parseInt(logArr[i].match(/\d*/)[0]);
        var to= (Math.floor(from / 10) + Math.floor(arw%3)-1)*10
                +(Math.floor(from % 10) + Math.floor(arw/3)-1);
        wkMap=copyMap(wkMap);
        wkMap[to]=parseInt(wkMap[from]);
        wkMap[from]=0;
        wklogArray.push(wkMap);
    }
    return wklogArray;
}
function encodeLog(wklogArray){
    var logstr="";
    var arrow=[ "q","w","e",
                "a","s","d",
                "z","x","c"];
    for(var i in wklogArray){
        var from=wklogArray[i][0];
        var to=wklogArray[i][1];
        var x_vec=((Math.floor(to / 10))-Math.floor(from / 10));
        var y_vec=((Math.floor(to % 10))-Math.floor(from % 10));
        var arw="";
        if(x_vec==-1 && y_vec==-1){arw="q"}
        if(x_vec== 0 && y_vec==-1){arw="w"}
        if(x_vec== 1 && y_vec==-1){arw="e"}
        if(x_vec==-1 && y_vec== 0){arw="a"}
        if(x_vec== 0 && y_vec== 0){arw="s"}
        if(x_vec== 1 && y_vec== 0){arw="d"}
        if(x_vec==-1 && y_vec== 1){arw="z"}
        if(x_vec== 0 && y_vec== 1){arw="x"}
        if(x_vec== 1 && y_vec== 1){arw="c"}
        logstr+=from+arw;
    }
    return logstr;
}

function move_start(){
    logPointer=0;
    thisMap=copyMap(logArray[logPointer]);
    flush();
    updateMessage();
}
function move_prev(){
    if(logPointer<=0){return;}
    logPointer-=1;
    thisMap=copyMap(logArray[logPointer]);
    flush();
    updateMessage();
}
function move_next(){
    if(logPointer+1>logArray.length-1){return;}
    logPointer+=1;
    thisMap=copyMap(logArray[logPointer]);
    flush();
    updateMessage();
}
function move_end(){
    logPointer=logArray.length-1;
    thisMap=copyMap(logArray[logPointer]);
    flush();
    updateMessage();
}
function reloadnew(){
    location.href =document.location.href.split("?")[0];
}
function jumpkento(){
    var url=document.location.href.split("?")[0];
    var init="?init="+startMap[55]+","
                    +startMap[45]+","
                    +startMap[35]+","
                    +startMap[25]+","
                    +startMap[15]+","
                    +startMap[5]+","
                    +startMap[44]+","
                    +startMap[14];
    var log="&log="+encodeLog(logArray2);
    location.href =url+init+log;
}
            
function init_peer(){
    if(location.host.indexOf("localhost")!=-1){
        apikey='6165842a-5c0d-11e3-b514-75d3313b9d05';
    }else{
        apikey='69faa3ba-f08f-11e3-b507-6fcc8611e424';
    }
    peer = new Peer($('#pid_from').val(),{key   : apikey,debug : 3});
    peer.on('open', function(id){
        $('#pid').text(id);
    });
    peer.on('error', function(e){
        console.log(e.message);
    });
    peer.on('connection', function(conn) {
        // メッセージを受信
        conn.on('data', function(data) {
            thisMap=data.map;
            turn_player=data.turn*-1;
            message=""
            thinking=false;
            updateMessage();
            flush();
        });

    });
}
function connect_peer(initflg){
    var conn = peer.connect($('#pid_to').val());
    conn.on('open', function() {
        var obj=new Object();
        obj.map=thisMap;
        obj.turn=turn_player;
        // メッセージを送信
        conn.send(obj);
});
    conn.on('error', function() {
        alert('xyz');
    });

}
function begingame(){
    thinking=false;
    getPlayer();
    turn_player=1;
    connect_peer();
}
function getPlayer(){
    $.getJSON("https://skyway.io/active/list/"+apikey, function(json){
        alert("JSON Data: " + json);
    });
}
//
// モード：誘う、受ける、継続する
// →誘われたら受けるを返して継続モード。受けるを返されたら継続モード。
//　→継続モード中は誘うを無視。
// ＃BOTくんを用意する。
