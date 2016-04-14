describe("lists", function() {

    before(function() { lst = lists(); lst.add_mlist('студент_1', ['ментор_1', 'ментор_2', 'ментор_3']); });
    before(function() { lst.add_slist('ментор_1', ['студент_1', 'студент_2']); });

    it("Добавляет приоритезированный список студентов - ментору", function() {
        assert.equal(lst.get_mlist('студент_1')[0], 'ментор_1');
        assert.equal(lst.get_mlist('студент_1').length, 3);
    });



    it("Добавляет приоритезированный список менторов - студенту", function() {
      assert.equal(lst.get_slist('ментор_1')[0], 'студент_1');
      assert.equal(lst.get_slist('ментор_1').length, 2);
    });


});
