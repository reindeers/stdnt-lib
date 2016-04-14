/*

— организуйте процесс сериализации/десериализации в разных форматах данных;



es6
*/
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
      clist.push(nm);
    },
    get_slist: function(){
      return slist;
    },
    get_clist: function(){
      return clist;
    }
  }

};

var lists = function(){
  var slists = {};
  var mlists = {};

  return {
    add_slist: function(mntr, lst){
      slists[mntr] = lst; /*ToDo copy*/
    },

    add_mlist: function(std, lst){
      mlists[std] = lst;
    },

    get_slist:  function(mntr){
      return slists[mntr];
    },
    get_mlist:  function(std){
      return mlists[std];
    }
  }
};


var sorts = function(){
  var mentors  = ['ментор_1','ментор_2','ментор_3']; /*ToDo*/
  var ind = 0;
  var input = [];
  var stts = [];
  var slst = {};
  var cnt = 0;
  var val = 0;

  return {
    do_sort: function(lst) {

      function cheackStudent(s, ii, lst_s){
        var l = lst.get_mlist(s);
        var i = l.indexOf(ind);
        val = Math.floor(l.length/lst_s.length)-1;
        if (i > val ){
          input.push(s);
        } else if (stts.indexOf(s)==-1 && cnt <= val){
          slst[ind].push(s);
          stts.push(s); /*ToDo*/
          cnt++;

        }
      };

      function forAllMentors(m, i, ar){

        var l = lst.get_slist(m);
        slst[m]=[];
        ind = m;
        cnt = 0;
        l.forEach(cheackStudent);

      }

/*delete double*/
      mentors.forEach(forAllMentors);
      function studentsRule(m, i, ar){
        console.log(slst[m].length);
        if (slst[m].length <= val){
        /*  lst.get_slist(l[0])*/
        console.log(m);
          slst(l[0]).push(m);
        }

      }

      mentors.forEach(studentsRule);
        console.log(input);
  console.log(slst);
      return input;

    }


  }
}
