// using jQuery library...

$("h1").css("color", "red");

$("h1").addClass("big-title");

$("h1").text("India");

$("button").text("hey don't click me"); // all buttons affected

$("a").attr("href", "https://www.yahoo.com");

// $("button").click(function () {
//   $("h1").css("color", "green");
// });

// $(document).keypress(function (evt) {
//   //   console.log(evt.key); /
//   $("h1").text(evt.key);
// });

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

$("h1").before("<button>before</button>");
// $("h1").after("<button>after</button>");
// $("h1").prepend("<button>prepend</button>");
// $("h1").append("<button>append</button>");

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
