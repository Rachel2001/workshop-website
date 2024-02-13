document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    alert("Form submitted!\n " + name);
  });

  let map = L.map("map").setView([18.586235, -33.921128], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([18.586235, -33.921128])
    .addTo(map)
    .bindPopup("Business Location")
    .openPopup();
