// let application = function () {
//   let components = new Array();
//   // components.push(new BaseComponent());
//   return {
//     getComponentCount() {
//       return components.length;
//     },
//     registerComponent(component) {
//       if (typeof component == 'object') {
//         components.push(component);
//       }
//     }
//   };
// }()

// let singleton = function () {
//   // ຳᆶՎଉࢅຳᆶࡧຕ
//   let privateVariable = 10;
//   function privateFunction() {
//     return false;
//   }
//   let object = new CustomType();
//   // ཁे༬඄/ࠅᆶຌႠݛࢅ݆
//   object.publicProperty = true;
//   object.publicMethod = function () {
//     privateVariable++;
//     return privateFunction();
//   };
//   return object;
// }();