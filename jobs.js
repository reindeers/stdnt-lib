var sorts = function(){
  var mentors = [];
  var cnt_students = 0;
  var cnt_current = 0;
  var cnt_stop = 0;
  var tmp_array = {};
  var sort_array = {};
  var std_current = '';

  return {
    do_sort: function(mentors, lst) {

        tmp_array = lst.clone();
        cnt_students = lst.get_slist()[mentors[0]].length;
        cnt_stop = Math.ceil(cnt_students/mentors.length);

        function nullStudent(m, cnt, ar){
          var ls = tmp_array.get_slist()[m].indexOf(std_current);
          tmp_array.get_slist()[m][ls] = 0;
        }

        function forAllMentors(m, cnt, ar){

            var ls = tmp_array.get_slist()[m][cnt_current];

            if (ls) {
              var lm = tmp_array.get_mlist()[ls][cnt];
              if (!sort_array.hasOwnProperty(lm)) sort_array[lm] = [];

              if (sort_array[lm].length < cnt_stop){
                sort_array[lm].push(ls);
                std_current = ls;

                mentors.forEach(nullStudent);
              }
            }
        };

        for (cnt_current = 0; cnt_current < cnt_students; cnt_current++){
          mentors.forEach(forAllMentors);
        }

        return sort_array;
    }
  }
}
