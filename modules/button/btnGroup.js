var React = require('react');
var SimpleBtn = require('./simplebtn.js');

var BtnGroup = React.createClass({
    render:function(){
        var btns = this.props.data.map(function (btnItem) {
            var html;
            switch (btnItem.type){
                case "simple":
                    console.log(btnItem.click)
                    html = <SimpleBtn onclick={btnItem.click} btnName={btnItem.btnName}/>
                    break;
                case "big":
                    html = <div>{btnItem.btnName}</div>
                    break;
            }
            return (
                html
                );
        });
        return (
            <div className="btn-group">
            {btns}
            </div>
            );
    }
});

module.exports = BtnGroup;
