// import { sayHelloTo } from "./greetingsHelper";

// module.exports = function () {
//   const result = sayHelloTo("Rokas");
//   console.log(result);
// };

import "./../scss/main.scss";
import laughing from "./../img/laughing.svg";

const laughtImg = document.getElementById("laughtImg");
laughtImg.src = laughing;

module.exports = function () {
  import("./greetingsHelper").then(({ sayHelloTo }) =>
    console.log(sayHelloTo("Rokas"))
  );
};
