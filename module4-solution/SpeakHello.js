(function (window) {
    var speakword = "Hello";
    var sayHello = function (name) {
        console.log(speakword + " " + name);
    }

    window.sayHello = sayHello;
})(window);