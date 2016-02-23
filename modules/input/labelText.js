var React = require('react');


var LabelText = React.createClass({
    getInitialState:function(){
        var item = this.props.item;
        return {value:item.value};
    },

    render:function(){
        var item = this.props.item;
        var value = this.props.value;
        return (
            <div className="timeitem"><span className="lb">{item.label}</span><span className="lbi"><input type="text" value={value} placeholder={item.placeholder} className="money-input" day={item.day} onChange={this.handleChange}/></span></div>
            );
    },
    handleChange:function(e){
        var item = this.props.item;
        var value = e.target.value;
        console.log(item.label+"的值改变为："+e.target.value);
        item.onValueChange(value);
//        item.value = value;
    }
});

module.exports = LabelText;