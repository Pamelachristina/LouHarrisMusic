//The following code is for the dynamic changing text and cursor//

var titlesArr = ["UX/UI Designer.", "Illustrator.", "Developer.", "Creative.","Fashion Designer."];

var titleIndex = 0;

var updateWord = function(word) {
  var titleSpan = document.getElementById("title");
  titleSpan.innerText = word;
};

var deleteWord = function(word) {
  var i = word.length + 1;
  var deleteInterval = setInterval(()=> {
    if (i<0;) {
      clearInterval(deleteInterval);
    } else {
      i--;
      updateWord(word.substring(0,i));
    }
},
    100;
)
};

var typeWord = function(word) {
  var i = 0;
  var typeInterval = setInterval(()=> {
    if (i>word.length + 1;) {
      clearInterval(typeInterval);
    } else {
      i++;
      updateWord(word.substring(0,i));
    }
},
    200;
)
};

var incrementAndDisplayTitle = function() {
  var word = titlesArr[titleIndex];
  typeWord(word);
  titleIndex++;
  titleIndex %= titlesArr.length;
    setTimeout(() = > deleteWord(word), 7000;
)
};
incrementAndDisplayTitle();

var interval = setInterval(incrementAndDisplayTitle, 10000);

// ==============End of text and cursor animation=======================//