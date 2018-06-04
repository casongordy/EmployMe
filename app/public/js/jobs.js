/* global moment */

// When user clicks add-btn
$("#job-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var job = {
    author: $("#author").val().trim(),
    body: $("#job-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(job);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", job)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("job");

      row.append("<p>" + job.author + " jobs: </p>");
      row.append("<p>" + job.body + "</p>");
      row.append("<p>At " + moment(job.created_at).format("h:mma on dddd") + "</p>");

      $("#job-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#job-box").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("job");

      row.append("<p>" + data[i].author + " jobs.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#job-area").prepend(row);

    }

  }

});