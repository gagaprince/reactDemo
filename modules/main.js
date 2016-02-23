var React = require('react');
//var Event = require('./event/event');

var BtnGroup = require('./button/btnGroup');

var SimpleBtn = require('./button/simplebtn');

var LabelText = require('./input/labelText');

var TextGroup = require('./input/TextGroup');

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

var btnData = [
    {
        click:function(e){
            console.log(data);
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