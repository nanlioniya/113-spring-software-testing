const { test } = require('node:test');
const assert = require('node:assert');
const { MyClass, Student } = require('./main');

test('Test MyClass\'s addStudent', (t) => {
  const myClass = new MyClass();
  const student = new Student();
  student.setName('John');
  
  // 測試正常添加學生
  const index = myClass.addStudent(student);
  assert.strictEqual(myClass.students.length, 1);
  assert.strictEqual(myClass.students[0], student);
  assert.strictEqual(index, 0); // 應該返回索引 0
  
  // 測試添加非 Student 類型
  const result = myClass.addStudent({id: 2, name: 'Not a student'});
  assert.strictEqual(result, -1); // 應該返回 -1
});

test('Test MyClass\'s getStudentById', (t) => {
  const myClass = new MyClass();
  const student1 = new Student();
  student1.setName('John');
  const student2 = new Student();
  student2.setName('Jane');
  
  const index1 = myClass.addStudent(student1);
  const index2 = myClass.addStudent(student2);
  
  // 測試找到學生
  assert.strictEqual(myClass.getStudentById(index1), student1);
  assert.strictEqual(myClass.getStudentById(index2), student2);
  
  // 測試找不到學生
  assert.strictEqual(myClass.getStudentById(99), null);
});

test('Test Student\'s setName', (t) => {
  const student = new Student();
  
  // 測試正常設置名字
  student.setName('Jane');
  assert.strictEqual(student.getName(), 'Jane');
  
  // 測試設置非字串名字
  student.setName(123);
  // 不應該改變名字
  assert.strictEqual(student.getName(), 'Jane');
});

test('Test Student\'s getName', (t) => {
  const student = new Student();
  
  // 測試初始名字
  assert.strictEqual(student.getName(), '');
  
  // 測試設置名字後獲取
  student.setName('Jane');
  assert.strictEqual(student.getName(), 'Jane');
});
