describe("students", function() {

    before(function() { std = students(); std.add_student('Петров'); });

    it("Добавляет студента", function() {
      assert.equal(std.get_slist().hasOwnProperty('Петров'), true);
      assert.equal(std.get_slist().hasOwnProperty('Семенов'), false);
    });


    before(function() { t = task({id: 1, name: 'Task 1'}); });
    before(function() {std.add_rating('Петров', t, 5); });

    it("Добавляет рейтинг", function() {
      assert.equal(std.get_slist()['Петров']['task'].get_inf(), '1 Task 1  false');
      assert.equal(std.get_slist()['Петров']['cnt'], 5);
    });

    before(function() { std.add_student('Сидоров'); });
    before(function() { std.add_student('Смирнов'); });
    before(function() { std.add_command(['Сидоров', 'Смирнов']); });

    it("Добавляет команду", function() {
      assert.equal(std.get_clist()[0][0], 'Сидоров');
      assert.equal(std.get_clist()[0].length, 2);
    });

});
