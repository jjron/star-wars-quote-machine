var quotes = [  // STAR WARS object
  {
    quote: "May the Force be with you.",
    character: "Obi-wan Kenobi"
  },
  {
    quote: "Do... or do not. There is no try.",
    character: "Yoda"
  },
  {
    quote: "Hokey religions and ancient weapons are no match for a good blaster at your side, kid.",
    character: "Han Solo"
  },
  {
    quote: "Grrraaaaarrrrgh!",
    character: "Chewbacca"
  },
  {
    quote: "If only you knew the power of the dark side.",
    character: "Darth Vader"
  },
  {
    quote: "So this is how liberty dies...with thunderous applause.",
    character: "Padme Amidala"
  },
  {
    quote: "Do what must be done, Lord Vader. Do not hesitate. Show no mercy.",
    character: "Darth Sidious"
  },
  {
    quote: "Help me, Obi-wan Kenobi. You're my only hope.",
    character: "Leia Organa"
  },
  {
    quote: "Never tell me the odds!",
    character: "Han Solo"
  },
  {
    quote: "These are not the droids you're looking for.",
    character: "Obi-wan Kenobi"
  },
  {
    quote: "You couldn't hit the broadside of a moisture evaporator.",
    character: "Luke Skywalker"
  },
  {
    quote: "You underestimate my power!",
    character: "Anakin Skywalker"
  },
  {
    quote: "Twice the pride, double the fall.",
    character: "Count Dooku"
  }
];

function pickQuoteNum(val){  // chooses quote and avoids consecutive repeats
  var num = Math.floor(Math.random()*(quotes.length+1));
  while (num === val){
    num = Math.floor(Math.random()*(quotes.length+1));
  }
  val = num;
  return val;
}

function generateColor(){ // chooses random rgb color
  var rNum = Math.floor(Math.random()*256);
  var gNum = Math.floor(Math.random()*256);
  var bNum = Math.floor(Math.random()*256);
  return "rgba("+String(rNum)+", "+String(gNum)+", "+String(bNum)+", 0.5)"; // string return agrees with jQuery UI color animation, 0.5 alpha
}

function tweetURL(str){
  str = str.replace(/\s/g, "%20"); // use URL spaces
  str = str.replace(/\./g, "%2E"); // periods
  str = str.replace(/,/g, "%2C");  // commas
  str = str.replace(/'/g, "%27");  // apostrophes
  str = str.replace(/-/g, "%2D");  // hyphens
  str = str.replace(/!/g, "%21");  // exclamations
  return str;
}

$(document).ready(function(){
  var val = pickQuoteNum(0); // random quote number
  var phrase = quotes[val].quote;
  var phraseAuthor = quotes[val].character;
  var randColor = generateColor();
  var twPhrase = tweetURL(phrase);  // URL-friendly
  var twAuthor = tweetURL(phraseAuthor); //^^
  
  $("body").animate({backgroundColor: randColor}, {duration: 2000, queue: true});
  $("button").animate({backgroundColor: randColor}, {duration: 2000, queue: true});
  $("#twitter")
    .animate({color: randColor}, {duration: 2000, queue: true})
    .attr("href", "https://twitter.com/intent/tweet?text=%22"+twPhrase+"%22%20%2D%20"+twAuthor); //also adds a hyphen between phrase and author
  $("#phrase")
    .animate({color: randColor}, {duration: 2000, queue: true})
    .html("<b>\""+phrase+"\"</b>");
  $("#phraseAuthor")
    .animate({color: randColor}, {duration: 2000, queue: true})
    .html("<em>- "+phraseAuthor+"</em>");
  
  $("#getQuote").on("click", function(){
    val = pickQuoteNum(val); // next quote is not same
    phrase = quotes[val].quote;
    phraseAuthor = quotes[val].character;
    randColor = generateColor();
    twPhrase = tweetURL(phrase);
    twAuthor = tweetURL(phraseAuthor);
    
    $("body").animate({backgroundColor: randColor}, {duration: 2000, queue: true});
    $("button").animate({backgroundColor: randColor}, {duration: 2000, queue: true});
    $("#twitter")
      .animate({color: randColor}, {duration: 2000, queue: true})
      .attr("href", "https://twitter.com/intent/tweet?text=%22"+twPhrase+"%22%20%2D%20"+twAuthor);
    $("#phrase")
      .animate({color: randColor}, {duration: 2000, queue: true})
      .html("<b>\""+phrase+"\"</b>");
    $("#phraseAuthor")
      .animate({color: randColor}, {duration: 2000, queue: true})
      .html("<em>- "+phraseAuthor+"</em>");
  });
});