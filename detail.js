document
  .getElementById("showCountButton")
  .addEventListener("click", function () {
    fetch("http://localhost:3000/donors")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        var donorCount = data.length;
        document.getElementById("donorCount").textContent =
          "Number of donors: " + donorCount;
        var ml = donorCount * 25;
        document.getElementById("bloodstored").textContent =
          "ammount of blood stored in ml=" + ml;
      })
      .catch(function (error) {
        console.log("Error fetching donor data:", error);
      });
  });
