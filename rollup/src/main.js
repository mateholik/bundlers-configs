// import { sayHelloTo } from "./greetingsHelper";

// module.exports = function () {
//   const result = sayHelloTo("Vladis");
//   console.log(result);
// };

module.exports = function () {
  import("./greetingsHelper").then(({ sayHelloTo }) =>
    console.log(sayHelloTo("Lukas"))
  );
};

// import "./style.css";
