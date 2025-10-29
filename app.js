$(document).ready(function () {
  $("#registrationForm").submit(function (e) {
    e.preventDefault(); // Prevent form from reloading page

    $.ajax({
      url: "process.php",
      type: "POST",
      data: $(this).serialize(),
      success: function (response) {
        $("#result").html(response).fadeIn();
        $("#registrationForm")[0].reset(); // Clear the form
      },
      error: function () {
        $("#result").html("<p style='color:red;'>Error submitting form.</p>").fadeIn();
      },
    });
  });
});
