var names = ["yaakov", " nasradin", "jon", "joe" ];

for (var i = 0; i < names.length; i++) {
    console.log( "hello" + names[i]);
}
(function(window){
    var byeSpeaker = {};
    var speakWord = "Good Bye"
    byeSpeaker.speak= function (name){
        console.log(speakWord + "goodbye " + name);
    }

    window.byeSpeaker = byeSpeaker
})(window);