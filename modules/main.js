var React = require('react');
//var Event = require('./event/event');

var BtnGroup = require('./button/btnGroup');

var SimpleBtn = require('./button/simplebtn');

var LabelText = require('./input/labelText');

var TextGroup = require('./input/TextGroup');

var SimpleText = require('./input/simpleText');

//console.log(SimpleBtn)
//var myBody = <SimpleBtn btnName={"hello"}/>;

/*var groupData = [
    {type:"simple",btnName:"this is simple"},
    {type:"big",btnName:"this is big"}
];*/

//var myBtnGroup = <BtnGroup data={groupData}/>

//var data = {
//    label:"45天业绩",
//    placeholder:"请输入45天业绩",
//    day:45
//}
//var lable = <LabelText item={data}/>

var data = [
    {
        label:"45天业绩",
        placeholder:"请输入45天业绩",
        day:45
    },
    {
        label:"90天业绩",
        placeholder:"请输入90天业绩",
        day:90
    },
    {
        label:"180天业绩",
        placeholder:"请输入180天业绩",
        day:180
    },
    {
        label:"360天业绩",
        placeholder:"请输入360天业绩",
        day:360
    },
    {
        label:"复投业绩",
        placeholder:"请输入复投业绩",
        day:-1
    }
];

var texts = <TextGroup data={data}/>
var textsReactDom = React.render(texts, document.getElementById('timeTransform'));

function calresultfirst(currentData){
    var dataItem = currentData[0];
    var total = 0;
    for(var i=0;dataItem;dataItem=currentData[++i]){
        var moneyStr = dataItem["value"];
        if(!moneyStr||moneyStr=="")moneyStr=0;
        var money = parseFloat(moneyStr);
        var day = parseInt(dataItem["day"]);
        if(day>0)
            total += money/360*day;
    }

    if(total<100000){
        return 0;
    }
    if(total<600000){
        return 0.0015*total- 150;
    }
    if(total<1100000){
        return 0.002*total - 450;
    }
    return 0.0025*total - 1000;
}

function calresultScecond(currentData){
    var dataItem = currentData[0];
    for(var i=0;dataItem;dataItem=currentData[++i]){
        var moneyStr = dataItem["value"];
        if(!moneyStr||moneyStr=="")moneyStr=0;
        var money = parseFloat(moneyStr);
        var day = parseInt(dataItem["day"]);
        if(day<0)
            return money * 0.0007;
    }
    return 0;
}

function calresult(currentData){
    var t1 = calresultfirst(currentData);
    var t2 = calresultScecond(currentData);
    console.log(t1);
    console.log(t2);
    return t1+t2;
}

var btnData = [
    {
        click:function(e){
            var currentData = textsReactDom.getCurrentData();
            var money = calresult(currentData);
            console.log(money);
            resultReactDom.setProps({value:money});
            console.log(currentData)
        },
        type:"simple",
        btnName:"开始计算"
    },
    {
        click:function(){
//            Event.trigger("needReset");
            textsReactDom.triggerReset();

        },
        type:"simple",
        btnName:"重置"
    }
];
var btns = <BtnGroup data={btnData}/>
React.render(btns, document.getElementById('btnGroup'));

var resultDom = <SimpleText />
var resultReactDom = React.render(resultDom,document.getElementById('resultText'));