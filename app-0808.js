// setTimeout(()=> {
//   console.log("Hello Cat!");

//   setTimeout(()=> {
//     console.log("and Hello Dog!");

//     setTimeout(()=> {
//     console.log("and Hello Bird!");

//       setTimeout(()=> {
//       console.log("and Hello Cow!");
//       }, 2000);
    
//     }, 100);

//   }, 500);

// }, 1000);


// const first = setTimeout(() => {
//   console.log("첫번째 작성됨");
// },3000);

// const second = setTimeout(() => {
//   console.log("두번째 작성됨");
// },2000);

// const third = setTimeout(() => {
//   console.log("세번째 작성됨");
// },1000);

// console.log("첫번째 작성된 것 3초\n두번째 작성된 것 2초\n세번째 작성된 것 1초 후에 실행됩니다.");






function example() {
  setTimeout(() => {
    console.log("콘솔찍음");
    example();
  }, 1000)
}

example();