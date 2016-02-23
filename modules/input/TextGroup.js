var React = require('react');
var LabelText = require('./labelText');


var TextGroup = React.createClass({
    triggerReset:function(){
        var _this = this;
        this.props.data.map(function(item,index){
            _this.refs["text"+index].reset();
        });
    },
    render:function(){
        var _this = this;
        var texts = this.props.data.map(function(textItem,index){
            var refvalue = "text"+index;
            return (
                <LabelText ref={refvalue} item={textItem}/>
                );
        });
        return (
            <div>{texts}</div>
            )
    }
});
module.exports = TextGroup;