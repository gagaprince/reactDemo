var React = require('react');
var LabelText = require('./labelText');


var TextGroup = React.createClass({
    getInitialState: function() {
        var data = [];
        var propsData = this.props.data;
        var dataItem = propsData[0];
        for(var i=0;dataItem;dataItem = propsData[++i]){
            data.push({value:dataItem["value"]||""});
        }
        return {data:data};
    },
    triggerReset:function(){
        this.setState(this.getInitialState());
    },
    render:function(){
        var _this = this;
        var texts = this.props.data.map(function(textItem,index){
            textItem.onValueChange = (function(index){
                return function(value){
                    textItem.vaule=value;
                    var data = _this.state.data;
                    data[index].value = value;
                    _this.setState({data:data});
                }
            })(index);
            var value = _this.state.data[index].value;
            return (
                <LabelText item={textItem} value={value}/>
                );
        });
        return (
            <div>{texts}</div>
            )
    }
});
module.exports = TextGroup;