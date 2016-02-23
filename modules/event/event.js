
var myEvents = {};

var Event = {
    addEventListener:function(type,callback){
        if(!myEvents[type]){
            myEvents[type] = [];
        }
        myEvents[type].push(callback);
    },
    trigger:function(type){
        var callbacks = myEvents[type];
        if(callbacks){
            var callback = callbacks[0];
            for(var i=0;callback;callback=callbacks[++i]){
                callback.apply(null,[].splice.call(arguments,1));
            }
        }
    }
}

module.exports = Event;