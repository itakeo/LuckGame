# LuckGame
LuckGame.js 老虎机抽奖

![image](https://github.com/Takeos/LuckGame/blob/master/demo.gif)


##DEMO基础css，可根据项目自己修改
```
.game_wrap{width: 240px; height: 80px;box-sizing:  content-box; border-radius: 15px; border: 20px solid #ffcc21;overflow: hidden;margin: 10px; box-shadow: 0px 0px 15px  rgba(0,0,0,.5) inset}
.game_item{width: 33.333%;height: 80px; float: left; border-left: 5px solid #ffcc21}
.game_item:first-child{ border-left: none }
.game_item li{ list-style: none;width: 100%; height: 80px; line-height: 80px;text-align: center; position: relative; font-size: 50px; }
```

##DOM结构
```
<div class="game_wrap">
    <div class="game_item">
        <ul></ul>
    </div>
    <div class="game_item">
        <ul></ul>
    </div>
    <div class="game_item">
        <ul></ul>
    </div>
</div>
```

##js调用
```
var game = new LuckGame({
    len : 5,  //奖品个数
    speed : 5000, //滚动时间
    circle : 5, //循环几圈
});
game.start([1,1,1],function(){
    //第一个参数，设置中奖信息，第二个为回调
    alert('恭喜你中奖了')
})
```
