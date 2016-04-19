Object.prototype.clone = function() {
    var f = function () {};
    f.prototype = this;
    var g = new f();
    g.prototype = this;
    return g;
};

function toJson(o){
  return JSON.stringify(o);
};

function fromJson(o){
  return JSON.parse(o);

};
