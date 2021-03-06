describe("lists", function() {

    before(function() { lst = lists(); lst.add_mlist('студент_1', ['ментор_1', 'ментор_2', 'ментор_3']); });
    before(function() { lst.add_slist('ментор_1', ['студент_1', 'студент_2']); });

    it("Добавляет приоритезированный список студентов - ментору", function() {
        assert.deepEqual(lst.get_mlist()['студент_1'],  ['ментор_1', 'ментор_2', 'ментор_3']);
    });

    it("Добавляет приоритезированный список менторов - студенту", function() {
      assert.deepEqual(lst.get_slist()['ментор_1'], ['студент_1', 'студент_2']);
    });


});
