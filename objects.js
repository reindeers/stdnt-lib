var task = function(dsc){
  var that = {
    id: dsc.id || 0,
    nm: dsc.name || 'Новое задание',
    dscr: dsc.description || '',
    flg: dsc.flag || false
  };

  that.get_inf = function(){
    return that.id + ' ' + that.nm + ' ' + that.dscr + ' ' + that.flg;
  };

  that.set_name = function(nm){
    that.nm = nm;
    return that;
  };

  that.set_id = function(id){
    that.id = id;
    return that;
  };

  that.set_desc = function(dscr){
    that.dscr = dscr;
    return that;
  };

  that.set_flag = function(flg){
    that.flg = flg;
    return that;
  };

  that.toJson = function(){
    return JSON.stringify(that);
  };

  that.fromJson = function(json){
    return JSON.parse(json);
  };

  return that;
};


var students = function(){
  var slist = {};
  var clist = [];

  return {
    add_student: function (std) {
      slist[std] = {};
    },

    add_rating: function (std, tsk, rt){
      slist[std] = {task: tsk, cnt: rt};
    },

    add_command: function(nm){
      clist.push(nm.slice());
    },

    get_slist: function(){
      return slist;
    },

    get_clist: function(){
      return clist;
    },

    toJson: function(){
      return JSON.stringify({clist: this.get_clist(), slist: this.get_slist()});
    },

    fromJson: function(json){
      var data = JSON.parse(json);
      var tmp = students();

      var name;
      for (name in data.slist){

        if (typeof data.slist[name] !== 'function'){
          tmp.add_student(name);
          tmp.add_rating(name, data.slist[name]);
        }
      }

      for (var i = 0; i < data.clist.length; i++){
        tmp.add_command(data.clist[i]);
      }

      return tmp;
    }
  }

};

var mentors = function(list){
  var mntrs = list;

  mntrs.toJson = function(){
    return JSON.stringify(mntrs);
  };

  mntrs.fromJson = function(json){
    return JSON.parse(json);
  };
  return mntrs;
};

var lists = function(){
  var slists = {};
  var mlists = {};

  return {
    add_slist: function(mntr, lst){
      slists[mntr] = lst.slice();
    },

    add_mlist: function(std, lst){
      mlists[std] = lst.slice();
    },

    get_slist: function(){
      return slists;
    },

    get_mlist: function(){
      return mlists;
    },

    toJson: function(){
      return JSON.stringify({slists: this.get_slist(), mlists: this.get_mlist()});
    },

    fromJson: function(json){
      var data = JSON.parse(json);
      var tmp = lists();

      var name;
      for (name in data.slists){
        if (typeof data.slists[name] !== 'function'){
          tmp.add_slist(name, data.slists[name]);
        }
      }

      for (name in data.mlists){
        if (typeof data.mlists[name] !== 'function'){
          tmp.add_mlist(name, data.mlists[name]);
        }
      }

      return tmp;
    }
  }
};
