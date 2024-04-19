document.addEventListener("DOMContentLoaded", function () {
  const name = document.getElementById("name");
  const password = document.getElementById("password");
  const blood = document.getElementById("blood");
  const gender = document.getElementById("gender");
  const age = document.getElementById("age");
  const button = document.getElementById("signup");

  button.addEventListener("click", () => {
    const dataObj = {
      name: name.value,
      password: password.value,
      blood: blood.value,
      gender: gender.value,
      age: age.value,
    };

    fetch("http://localhost:3000/donors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Account created");
        window.location.href = "signin.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
