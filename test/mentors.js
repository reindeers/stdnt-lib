describe("mentors", function() {

    before(function() {
      mentors_list = mentors(['ментор_1','ментор_2','ментор_3']);

    });


    it("Добавляет список менторов", function() {
        assert.deepEqual(mentors_list.toString(), 'ментор_1,ментор_2,ментор_3');
        assert.deepEqual(mentors_list.length, 3);
    });

});
