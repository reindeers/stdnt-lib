describe("mentors", function() {

    before(function() {
      mentors_list = mentors(['ментор_1','ментор_2','ментор_3']);
    });


    it("Добавляет список менторов", function() {
        assert.deepEqual(mentors(['ментор_1','ментор_2','ментор_3']), ['ментор_1','ментор_2','ментор_3']);
    });

});
