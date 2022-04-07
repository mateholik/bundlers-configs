import { sayHelloTo } from "./greetingsHelper";

module.exports = function () {
  const result = sayHelloTo("Rokas");
  console.log(result);
};
