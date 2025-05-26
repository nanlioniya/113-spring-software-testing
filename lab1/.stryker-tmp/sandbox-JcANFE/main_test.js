// @ts-nocheck
const { test, assert } = require('node:test');
const { MyClass, Student } = require('./main');

test('Test MyClass\'s addStudent', (t) => {
  const myClass = new MyClass();
  const student = new Student(1, 'John');
  
  // 測試正常添加學生
  myClass.addStudent(student);
  assert.strictEqual(myClass.students.length, 1);
  assert.strictEqual(myClass.students[0], student);
  
  // 測試添加非 Student 類型
  assert.throws(() => {
    myClass.addStudent({id: 2, name: 'Not a student'});
  }, /Not a Student object/);
});

test('Test MyClass\'s getStudentById', (t) => {
  const myClass = new MyClass();
  const student1 = new Student(1, 'John');
  const student2 = new Student(2, 'Jane');
  
  myClass.addStudent(student1);
  myClass.addStudent(student2);
  
  // 測試找到學生
  assert.strictEqual(myClass.getStudentById(1), student1);
  assert.strictEqual(myClass.getStudentById(2), student2);
  
  // 測試找不到學生
  assert.strictEqual(myClass.getStudentById(3), null);
});

test('Test Student\'s setName', (t) => {
  const student = new Student(1, 'John');
  
  // 測試正常設置名字
  student.setName('Jane');
  assert.strictEqual(student.getName(), 'Jane');
  
  // 測試設置非字串名字
  assert.throws(() => {
    student.setName(123);
  }, /Name must be a string/);
});

test('Test Student\'s getName', (t) => {
  const student = new Student(1, 'John');
  
  // 測試獲取名字
  assert.strictEqual(student.getName(), 'John');
  
  // 測試更改名字後獲取
  student.setName('Jane');
  assert.strictEqual(student.getName(), 'Jane');
});
