var React = require('react');
var SimpleBtn= React.createClass({
    handleClick:function(e){
        console.log(this.props.btnName+"被点击了");
        this.props.onclick(e);
    },
    render:function(){
        return (
            <div className="btn" onClick={this.handleClick}>
                {this.props.btnName}
            </div>
            )
    }
});

//console.log(SimpleBtn);
module.exports = SimpleBtn;
