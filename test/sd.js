describe("sd", function() {

    before(function() {
      sd = task({id: 1, name: 'Task 1'});
      ds = sd.toJson();
    });


    it("Сериализация заданий", function() {
        assert.equal(sd.toJson(), '{"id":1,"nm":"Task 1","dscr":"","flg":false}');
    });

    it("Десериализация заданий", function() {
        assert.deepEqual(sd.fromJson(ds), {id: 1, nm: 'Task 1', dscr:"", flg: false});
    });


    before(function() {
      sd_s = students();
      sd_s.add_student('Петров');
      sd_s.add_student('Иванов');
      t = task({id: 1, name: 'Task 1'});
      sd_s.add_rating('Петров', t, 5);
      sd_s.add_command(['Сидоров', 'Смирнов']);
      ds_s = sd_s.toJson();
    });


    it("Сериализация студентов", function() {
        assert.equal(sd_s.toJson(), '{"clist":[["Сидоров","Смирнов"]],"slist":{"Петров":{"task":{"id":1,"nm":"Task 1","dscr":"","flg":false},"cnt":5},"Иванов":{}}}');
    });

    it("Десериализация студентов", function() {
        assert.equal(sd_s.fromJson(ds_s).get_slist().toString(), sd_s.get_slist().toString());
        assert.deepEqual(sd_s.fromJson(ds_s).get_clist(), [['Сидоров', 'Смирнов']]);
    });

    before(function() {
      sd_m = mentors(['ментор_1','ментор_2','ментор_3']);
      ds_m = sd_m.toJson();
    });


    it("Сериализация менторов", function() {
        assert.deepEqual(sd_m.toJson(), '["ментор_1","ментор_2","ментор_3"]');
    });

    it("Десериализация менторов", function() {
        assert.deepEqual(sd_m.fromJson(ds_m), ['ментор_1','ментор_2','ментор_3']);
    });

    before(function() {
      sd_l = lists();
      sd_l.add_mlist('студент_1', ['ментор_1', 'ментор_2', 'ментор_3']);
      sd_l.add_slist('ментор_1', ['студент_1', 'студент_2']);
      ds_l = sd_l.toJson();
    });


    it("Сериализация списков", function() {
        assert.equal(sd_l.toJson(), '{"slists":{"ментор_1":["студент_1","студент_2"]},"mlists":{"студент_1":["ментор_1","ментор_2","ментор_3"]}}');
    });

    it("Десериализация списков", function() {
        assert.deepEqual(sd_l.fromJson(ds_l).get_slist(), sd_l.get_slist());
        assert.deepEqual(sd_l.fromJson(ds_l).get_mlist(), sd_l.get_mlist());
    });


});
