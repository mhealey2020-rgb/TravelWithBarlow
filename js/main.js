/* =====================================================================
   Travel with Barlow — tiny bit of JavaScript
   ---------------------------------------------------------------------
   Two small things happen here:
   1. The mobile menu button opens/closes the navigation.
   2. The email signup form shows a friendly "you're on the list!" message.

   NOTE: The signup form does not send email anywhere yet. To collect real
   sign-ups, connect the form to a free service like Mailchimp, Formspree,
   or Beehiiv (see README.md for step-by-step instructions).
   ===================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* ----- 1. Mobile navigation toggle ----- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu after tapping a link (nice on phones)
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----- 2. Email signup confirmation ----- */
  var forms = document.querySelectorAll(".signup-form");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // remove this line once you hook up a real service
      var email = form.querySelector('input[type="email"]');
      var note = form.parentElement.querySelector(".form-success");
      if (note) {
        note.textContent = "🎉 You're on the list, darling! Check your inbox soon.";
      }
      if (email) email.value = "";
    });
  });
});
