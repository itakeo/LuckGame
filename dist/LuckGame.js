const LuckGame = (function(win,doc){
	class Luck{
		constructor(obj) {
            this.setting = {
                len : 5,  //奖品个数
                speed : 5000, //滚动时间
                circle : 5, //循环几圈
            };
            this.extend( this.setting, obj );
            this.$ul = doc.querySelectorAll('.game_wrap ul');
            this.$height = doc.querySelector('.game_item').offsetHeight;
            this.setList();
        }
        setList(){
        	//填充li
        	let html = '';
        	for(let n = 0;n < this.setting.circle;n++){
        		for(let i = 0;i< this.setting.len;i++){
	        		html+='<li>'+i+'</li>'; //图片这里自己添加img以及修改样式
	        	};
        	};
        	;[].forEach.call(this.$ul,(o,i)=>{
        		o.innerHTML = html;
        		//设置默认随机显示
        		o.style['transform']=o.style['-webkit-transform'] = 'translate(0px, -'+Math.floor(Math.random() * this.setting.len) * this.$height+'px) translateZ(0px)';
        	});
        }
        start(arr,fn){
        	let that = this,countNum = 0;
        	//开始抽奖
        	;[].forEach.call(that.$ul,(o,i)=>{
				setTimeout(()=>{
					var y=(arr[i]+that.setting.len *(that.setting.circle-1))*that.$height;
					o.style['-webkit-transition'] = that.setting.speed+'ms ease';
					o.style['-webkit-transform'] = 'translate(0px, -'+y+'px) translateZ(0px)'
				},i * 300);
				o.addEventListener('webkitTransitionEnd',function(){
					this.style['-webkit-transition'] = '0ms ease';
					this.style['-webkit-transform'] = 'translate(0px, -'+arr[i]*that.$height+'px) translateZ(0px)';
					countNum++;
					if(countNum == that.$ul.length){
						fn && fn();
					}
				},false);
			})
        }
        extend (n,n1){ 
            for(let i in n1){n[i] = n1[i]};
        }
	}
	return Luck;
})(window,document);