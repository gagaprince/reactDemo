var React = require('react');
var SimpleText = React.createClass({
//    getInitialState:function(){
//        return {value:this.props.value}
//    },
//    setValue:function(){
//
//    },
    render:function(){
        var value = this.props.value;
        return (
            <span className="result-text">{value}</span>
            );
    }
});

module.exports = SimpleText;