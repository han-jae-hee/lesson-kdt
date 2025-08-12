function state() {
  let handle = true;

  return function toggle() {
    handle = !handle; // true가 아니다 => false
    return handle; // false를 반환
  }
}

const test = state();
console.log(test());
console.log(test());

