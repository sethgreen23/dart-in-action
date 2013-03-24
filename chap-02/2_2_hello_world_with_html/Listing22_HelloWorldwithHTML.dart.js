// Generated by dart2js, the Dart to JavaScript compiler.
// The code supports the following hooks:
// dartPrint(message)   - if this function is defined it is called
//                        instead of the Dart [print] method.
// dartMainRunner(main) - if this function is defined, the Dart [main]
//                        method will not be invoked directly.
//                        Instead, a closure that will invoke [main] is
//                        passed to [dartMainRunner].
function Isolate() {}
init();

var $ = Isolate.$isolateProperties;
// Bound closures
$.main = function() {
  $.Primitives_printString("Hello World");
  return;
};

$.Primitives_printString = function(string) {
  if (typeof dartPrint == "function") {
    dartPrint(string);
    return;
  }
  if (typeof window == "object") {
    if (typeof console == "object")
      console.log(string);
    return;
  }
  if (typeof print == "function") {
    print(string);
    return;
  }
  throw "Unable to print message: " + String(string);
};

$.String = {builtin$cls: "String"};
var $ = null;
Isolate = Isolate.$finishIsolateConstructor(Isolate);
var $ = new Isolate();

// BEGIN invoke [main].
if (typeof document !== "undefined" && document.readyState !== "complete") {
  document.addEventListener("readystatechange", function () {
    if (document.readyState == "complete") {
      if (typeof dartMainRunner === "function") {
        dartMainRunner(function() { $.main(); });
      } else {
        $.main();
      }
    }
  }, false);
} else {
  if (typeof dartMainRunner === "function") {
    dartMainRunner(function() { $.main(); });
  } else {
    $.main();
  }
}
// END invoke [main].
function init() {
  Isolate.$isolateProperties = {};
  Isolate.$finishIsolateConstructor = function(oldIsolate) {
    var isolateProperties = oldIsolate.$isolateProperties;
    isolateProperties.$currentScript = typeof document == "object" ? document.currentScript || document.scripts[document.scripts.length - 1] : null;
    var isolatePrototype = oldIsolate.prototype;
    var str = "{\n";
    str += "var properties = Isolate.$isolateProperties;\n";
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for (var staticName in isolateProperties) {
      if (hasOwnProperty.call(isolateProperties, staticName)) {
        str += "this." + staticName + "= properties." + staticName + ";\n";
      }
    }
    str += "}\n";
    var newIsolate = new Function(str);
    newIsolate.prototype = isolatePrototype;
    isolatePrototype.constructor = newIsolate;
    newIsolate.$isolateProperties = isolateProperties;
    return newIsolate;
  };
}
//@ sourceMappingURL=Listing22_HelloWorldwithHTML.dart.js.map
