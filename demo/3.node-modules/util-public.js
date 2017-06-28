var util = {
    isType:function(obj,type){
        if(Object.prototype.toString.call(obj)==="[object "+type+"]"){
            return true;
        }
        return false;
    },
    isArray:function(obj){
        return this.isType(obj,'Array');
    }
};


util.isArray([]);







