// 无缝轮播图
// function wheel(win,opts,runOpts){
//     var win=document.querySelector(win);

//     console.log(win);
//     if(!(win&&win.nodeType==1)){
//         console.error("窗口元素not find");
//         return;
//     }
//     //图片添加
//     opts.imgs.push(opts.imgs[0]);
//     opts.links.push(opts.links[0]);//链接
//     opts.imgColor.push(opts.imgColor[0]);//背景颜色

//     var imgLength=opts.imgs.length+1;//图片个数

//     if(imgLength==0){
//         console.error("没有传入相应轮播内容");
//         return;
//     }
//     var imgSize=opts.imgSize;
//     if(!imgSize instanceof Array){
//         console.error("请传入合法的尺寸类型");
//     }
//     if(imgSize.length==0){
//         imgSize[0]=document.documentElement.clientWidth;//图片宽度等于窗口宽度
//         imgSize[1]=400;//图片高度400
//     }
//     if(imgSize.some(function(val){//
//         return val==0;
//     })){
//         for( var i=0;i<2;i++){
//             if(imgSize[i]==0){
//                 imgSize[i]==500;
//             }
//         }
//     }
//     var btnColor=opts.btnColor||"pink";//按钮颜色
//     var btnActive=opts.btnActive||"yellow";//选中按钮的颜色
//     var btnPos=opts.btnPos||["center","20"];//按钮位置

//     var runOpts=runOpts||{};
//     var time=0;
//     if(runOpts.time){
//         time=runOpts.time*1000;
//     }else{
//         time=5000;
//     }

//     var eachtime=0;
//     if(runOpts.eachtime){
//         time=runOpts.eachtime*1000;
//     }else{
//         eachtime=500;
//     }

//     var runStyle=null;
//     if(runOpts.runStyle=="Linner"||(!runOpts.runStyle)){
//         runStyle=Tween.Linear;
//     }else if(runOpts.runStyle=="in"){
//         runStyle=Tween.Quad.easeIn;
//     }else if(runOpts.runStyle=="out"){
//         runStyle=Tween.Quad.easeOut;
//     }

//     win.style.cssText="width: 100%;height: "+imgSize[1]+"px;position: relative;overflow:hidden";//div的样式
//     var box=document.createElement("div");//创建div
//     box.style.cssText="width:"+imgLength*100+"%;height:100%;"
//     win.appendChild(box);

//     //创建tupian
//     for(var i=0;i<imgLength;i++){
//         var divList=document.createElement("div");
//         divList.style.cssText="float: left;width: "+100/imgLength+"%;height: 100%;background:"+opts.imgColor[i]+";"
//         var link=document.createElement("a");
//         link.href=opts.links[i];
//         link.style.cssText="display=block;margin:auto;background:url("+opts.imgs[i]+") no-repeat 0 0";
//         divList.appendChild(link);

//     box.appendChild(divList);
//     }

//     //创建按钮
//     var btnBox=document.createElement("div");
//     btnBox.style.cssText="width:300px;height:20px;position:absolute;left:0;right:0;margin:auto;bottom:"+btnPos[1]+"px; boder:1px solid red;"

//     var btns=[];
    

//     for(var i=0;i<imgLength-1;i++){

//         if(i==0){
//             var bgcolor=btnActive;
//         }else{
//             var bgcolor=btnColor;
//         }

//         var btn=document.createElement("div");
//         btn.style.cssText="width:10px;height:10px;background:"+bgcolor+";border-radius: 50%;margin:0 10px;cursor:point;float:left;"
//         btnBox.appendChild(btn);
//         btns.push(btn);
//     }

//     win.appendChild(btnBox);

//     //lunbo
//         var width=parseInt(getComputedStyle(win,null).width);
//         var num=0;

//         function move(){
//             num++;
//             if(num>btns.length-1){
//                 animate(box,{
//                     "marginLeft":-num*width
//                 },eachtime,runStyle,function(){
//                     box.style.marginLeft=0;
//                 })
//                 num=0;
//             }else{
//             animate(box,{
//                 "marginLeft":-num*width
//             },eachtime,runStyle)
//             }
//             for(var i=0;i<btns.length;i++){
//                     btns[i].style.background=btnColor;
//                     btns[i].style.opacity=".2";
//                 }
//                 btns[num].style.background=btnActive;
//                 btns[num].style.opacity="1";
            
//         }
//         var t=setInterval(move,time);

//         for(let i=0;i<btns.length;i++){
//             btns[i].onclick=function(){
//                 num=i;
//                 animate(box,{
//                 marginLeft:-num*width
//             },eachtime,runStyle)
//             for(var j=0;j<btns.length;j++){
//                     btns[j].style.background=btnColor;
//                     btns[j].style.opacity=".2";
//                 }
//                 btns[num].style.background=btnActive;
//                 btns[num].style.opacity="1";
//             }
//         }

//         win.onmouseover=function(){
//             clearInterval(t);
//         }
//         win.onmouseout=function(){
//             t=setInterval(move,time);
//         }

    
// }
/*
无缝轮播图
wins 要放入轮播图的窗口
opts json 实现轮播图各种选项
    imgs 数组 包含轮播图图片数组
    links 数组 图片链接地址
    imgColor Array 图片的颜色，用于全屏显示的颜色拼接
    imgSize 数组 第一个参数代表宽 第二个代表高
    btnColor String 按钮的颜色
    btnActive String 获得焦点的按钮颜色
    btnPos 数组 第一个参数代表x位置 第二个代表y位置
*/

function wheel(wins, opts, runOpts) {
    //数据初始化
    var wins = document.querySelector(wins);
    if (!(wins && wins.nodeType == 1)) {
        console.error("窗口元素not find");
        return;
    }
    //图片地址添加一个
    opts.imgs.push(opts.imgs[0]);
    //链接地址添加一个
    opts.links.push(opts.links[0]);
    //图片颜色添加一个
    opts.imgColor.push(opts.imgColor[0]);
    
    var imgLength = opts.imgs.length;
    if (imgLength == 0) {
        console.error("没有传入相应的轮播内容");
        return;
    }

    var imgSize = opts.imgSize;
    if (!(imgSize instanceof Array)) {
        console.error("请传入合法尺寸类型");
    }

    if (imgSize.length == 0) {
        imgSize[0] = document.documentElement.clientWidth;
        imgSize[1] = 400;
    }

    if (imgSize.some(function (val) {
        return val = 0;
    })) {
        for (var i = 0; i < imgSize.length; i++) {
            if (imgSize[i] == 0) {
                imgSize[i] = 500;
            }
        }
    }
    //设置按钮
    var btnColor = opts.btnColor || "green";
    var btnActive = opts.btnActive || "red";
    var btnPos = opts.btnPos || ["center", "20"];

    var run0pts = runOpts||{};
    //图片轮播时间
    var time=0;
    if(runOpts.time){
        time=runOpts.time*1000;
    }else{
        time=5000;
    }
    //每张图片过渡时间
    var eachTime=0;
    if(runOpts.eachTime){
        eachTime=runOpts.eachTime*1000;
    }else{
        eachTime=500;
    }
    //图片轮播方式
    var runStyle=null;
    if(runOpts.runStyle=="linear"||run0pts.runStyle){
        runStyle=Tween.linear;
    }else if(run0pts.runStyle=="in"){
        runStyle=Tween.easein;
    }else if(run0pts.runStyle=="out"){
        runStyle=Tween.easeout;
    }

    //创建HTML结构和样式
    //1.win样式
    wins.style.cssText = "width:100%;height:" + imgSize[1] + "px;overflow:hidden;position:relative;";
    //2.添加容器
    var box = document.createElement("div");
    box.style.cssText = "width:" + imgLength * 100 + "%;height:100%;"
    wins.appendChild(box);
    //3.创建每一个轮播图
    for (var i = 0; i < imgLength; i++) {
        var divList = document.createElement("div");
        divList.style.cssText = `float:left; width:${100/imgLength}%;
        height: 100%;background:${opts.imgColor[i]}`;
        
        var link = document.createElement("a");
        link.href = opts.links[i];
        link.style.cssText = "width:" + imgSize[0] + "px;height:" + imgSize[1] + "px;display:block;margin:auto;background:url(" + opts.imgs[i] + ") no-repeat 0 0"

        divList.appendChild(link);
        box.appendChild(divList);
    }
    //创建按钮
    var btnBox = document.createElement("div");
    btnBox.style.cssText = "width:150px;height:20px;position:absolute;left:0;right:0;margin:auto;bottom:" + btnPos[1] + "px";
    var btns=[];

    for(var i=0;i<imgLength-1;i++){
        if(i==0){
            var bgColor = btnActive;
        }else{
            var bgColor = btnColor;
        }
        var btn=document.createElement("div");
        btn.style.cssText = "width:10px;height:10px;background:" + bgColor + ";border-radius:50%;margin:0 20px;float:left;cursor:pointer;";
        btnBox.appendChild(btn);
        btns.push(btn);
    }
    wins.appendChild(btnBox);

    //实现自动轮播
    //获得窗口大小
    var winW = parseInt(getComputedStyle(wins, null).width);
    var num = 0;
    function move() {
        num++;
        if (num > btns.length - 1) {
            animate(box, {
                "margin-left": -num * winW
            }, eachTime, runStyle, function () {
                
                box.style.marginLeft = 0;
            })
            num = 0;

        } else {
            animate(box, {
                "margin-left": -num * winW
            }, eachTime)
        }
        for (var i = 0; i < btns.length; i++) {
            btns[i].style.background = "black";
        }
        btns[num].style.background = "red";
    }
    var t = setInterval(move, time)
    
    //实现点击播放
    for (let i = 0; i < btns.length; i++) {

        btns[i].onclick = function () {
            num = i;
            animate(box,{
                "margin-left": -num * winW
            },eachTime)
            for (var j = 0; j < btns.length; j++) {
                btns[j].style.background = "black";
            }
            btns[num].style.background = "red";
        }
    }

    wins.onmouseover=function(){
        clearInterval(t);
    }
    wins.onmouseout=function(){
        t=setInterval(move,time);
    }

}

function wheel1(wins, opts, runOpts) {
    //参数初始化
    this.init(wins, opts, runOpts);
    //获取窗口
    this.getWin();
    //创建盒子
    this.createBox();
    //创建轮播图列表
    this.createList();
    //创建按钮列表
    this.createBtn();
    //自动轮播
    this.autoRun();
    //点击播放
    //this.clickRun();
}
//防止全局变量污染
wheel1.prototype = {
    //参数初始化
    init(wins, opts, runOpts) {
        this.opts = opts;
        this.run0pts = runOpts;

        var wins = document.querySelector(wins);
        if (!(wins && wins.nodeType == 1)) {
            console.error("窗口元素not find");
            return;
        }
        this.wins = wins;
        //图片地址添加一个
        opts.imgs.push(opts.imgs[0]);
        //链接地址添加一个
        opts.links.push(opts.links[0]);
        //图片颜色添加一个
        opts.imgColor.push(opts.imgColor[0]);

        this.imgLength = opts.imgs.length;
        if (this.imgLength == 0) {
            console.error("没有传入相应的轮播内容");
            return;
        }

        this.imgSize = opts.imgSize;
        if (!(this.imgSize instanceof Array)) {
            console.error("请传入合法尺寸类型");
        }

        if (this.imgSize.length == 0) {
            this.imgSize[0] = document.documentElement.clientWidth;
            this.imgSize[1] = 400;
        }

        if (this.imgSize.some(function (val) {
            return val = 0;
        })) {
            for (var i = 0; i < imgSize.length; i++) {
                if (this.imgSize[i] == 0) {
                    this.imgSize[i] = 500;
                }
            }
        }
        //设置按钮
        this.btnColor = opts.btnColor || "green";
        this.btnActive = opts.btnActive || "red";
        this.btnPos = opts.btnPos || ["center", "20"];

        this.run0pts = runOpts || {};
        //图片轮播时间
        this.time = 0;
        if (runOpts.time) {
            this.time = runOpts.time * 1000;
        } else {
            this.time = 5000;
        }
        //每张图片过渡时间
        this.eachTime = 0;
        if (runOpts.eachTime) {
            this.eachTime = runOpts.eachTime * 1000;
        } else {
            this.eachTime = 500;
        }
        //图片轮播方式
        this.runStyle = null;
        if (runOpts.runStyle == "linear" || run0pts.runStyle) {
            this.runStyle = Tween.linear;
        } else if (run0pts.runStyle == "in") {
            this.runStyle = Tween.easein;
        } else if (run0pts.runStyle == "out") {
            this.runStyle = Tween.easeout;
        }
    },
    //获取窗口
    getWin() {
        this.wins.style.cssText = "width:100%;height:" + this.imgSize[1] + "px;overflow:hidden;position:relative;";
    },
    //创建盒子
    createBox() {
        this.box = document.createElement("div");
        this.box.style.cssText = "width:" + this.imgLength * 100 + "%;height:100%;"
        this.wins.appendChild(this.box);
    },
    //创建轮播图列表
    createList() {
        for (var i = 0; i < this.imgLength; i++) {
            var divList = document.createElement("div");
            divList.style.cssText = `float:left; width:${100 / this.imgLength}%;
            height: 100%;background:${this.opts.imgColor[i]}`;

            var link = document.createElement("a");
            link.href = this.opts.links[i];
            link.style.cssText = "width:" + this.imgSize[0] + "px;height:" + this.imgSize[1] + "px;display:block;margin:auto;background:url(" + this.opts.imgs[i] + ") no-repeat 0 0"

            divList.appendChild(link);
            this.box.appendChild(divList);
        }
    },
    //创建按钮列表
    createBtn() {
        var btnBox = document.createElement("div");
        btnBox.style.cssText = "width:150px;height:20px;position:absolute;left:0;right:0;margin:auto;bottom:" + this.btnPos[1] + "px";
        this.btns = [];

        for (var i = 0; i < this.imgLength - 1; i++) {
            if (i == 0) {
                var bgColor = this.btnActive;
            } else {
                var bgColor = this.btnColor;
            }
            var btn = document.createElement("div");
            btn.style.cssText = "width:10px;height:10px;background:" + bgColor + ";border-radius:50%;margin:0 20px;float:left;cursor:pointer;";
            btnBox.appendChild(btn);
            this.btns.push(btn);
        }
        this.wins.appendChild(btnBox);
    },
    //自动轮播
    autoRun() {
        var winW = parseInt(getComputedStyle(this.wins, null).width);
        num = 0;
        function move() {
            num++;
            if (num > this.imgLength-2) {
                animate(this.box, {
                    "margin-left": -num * winW
                }, this.eachTime, Tween.Linear, function () {

                    this.box.style.marginLeft = 0;
                })
                num = 0;

            } else {
                animate(this.box, {
                    "margin-left": -num * winW
                }, this.eachTime)
            }
            for (var i = 0; i < this.imglength-1; i++) {
                this.btns[i].style.background = "black";
            }
            this.btns[num].style.background = "red";
        }
        var t = setInterval(move, 3000)

        this.wins.onmouseover=function(){
            clearInterval(t);
        }
        this.wins.onmouseout=function(){
            t=setInterval(move,3000);
        }
    },
    //点击播放
    clickRun() {
        for (let i = 0; i < this.imgslength-1; i++) {

            this.btns[i].onclick = function () {
                num = i;
                animate(this.box, {
                    "margin-left": -num * winW
                }, this.eachTime)
                for (var j = 0; j < btns.length; j++) {
                    this.btns[j].style.background = "black";
                }
                this.btns[num].style.background = "red";
            }
        }
    }
}       