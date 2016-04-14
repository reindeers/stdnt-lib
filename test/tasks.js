describe("task", function() {
  before(function() { t = task({id: 1, name: 'Task 1'}); });
  before(function() { t2 = task({id:2}); });
  before(function() { t3 = task({id: 3, name: 'Task 2', description: 'new task', flag: false}); });

  describe("Создание объекта task", function() {

    it("Создает первое задание", function() {
      assert.equal(t.get_inf(), '1 Task 1  false');
    });

    it("Создает второе задание", function() {
      assert.equal(t.get_inf(), '1 Task 1  false');
      assert.equal(t2.get_inf(), '2 Новое задание  false');
    });

    it("Создает третье задание", function() {
      assert.equal(t.get_inf(), '1 Task 1  false');
      assert.equal(t2.get_inf(), '2 Новое задание  false');
      assert.equal(t3.get_inf(), '3 Task 2 new task false');
    });

  });

  describe("Изменение объекта task", function() {
    before(function() {
      t
        .set_name('Super task')
        .set_id(3)
        .set_flag(false)
        .set_desc('super task');
    });

    before(function() { t2.set_flag(true)});


    it("Изменили все параметры, одиночное задание", function() {
      assert.equal(t.get_inf(), '3 Super task super task false');
    });

    it("Изменили все параметры, командное задание", function() {
      assert.equal(t2.get_inf(), '2 Новое задание  true');
    });

  });

});
