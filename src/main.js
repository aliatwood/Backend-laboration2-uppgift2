// variabel som innehåller api-url till backend
const API_URL = "https://backend-laboration2-uppgift1-production.up.railway.app/api/workexperience";

// om containern på startsidan finns så körs getworkExperience funktionen
if (document.querySelector(".container")) {
  getWorkExperience();
}
// Om formuläret finns på add sidan så körs handleForm funktionen
if (document.querySelector("#cvForm")) {
  handleForm();
}

// Hämtar alla arbetserfarenheter från API:et och visar dem
async function getWorkExperience() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const container = document.querySelector(".container");
    container.innerHTML = "";

    // Loopar igenom datan och skapar ett li-element för varje post
    data.forEach(item => {
      const li = document.createElement("li");

      li.innerHTML = `
        <h3>${item.companyName}</h3>
        <p class="role">${item.jobTitle}</p>
        <p class="date">${formatDate(item.startDate)} - ${item.endDate ? formatDate(item.endDate) : "Nuvarande"}</p>
        <p class="desc">${item.description}</p>
        <button data-id="${item.id}">Ta bort</button>
      `;

       // Lägger till event listener för ta bort-knappen
      li.querySelector("button").addEventListener("click", () => {
        deleteItem(item.id);
      });

      container.appendChild(li);
    });

  } catch (err) {
    console.error("Fel vid hämtning:", err);
  }
}

// Formaterar datum till svenskt format
function formatDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("sv-SE");
}

// Hanterar formuläret för att lägga till en ny arbetserfarenhet
function handleForm() {
  const form = document.querySelector("#cvForm");
  const errorMsg = document.querySelector("#errorMsg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // Skapar ett objekt med formulärdatan
    const newItem = {
    companyName: formData.get("companyname"),
    jobTitle: formData.get("jobtitle"),
    location: formData.get("location"),
    startDate: formData.get("startdate"),
    endDate: formData.get("enddate") || null,
    description: formData.get("description")
    };

    // Validering, kontrollerar att alla obligatoriska fält är fyllda
    if (
    !newItem.companyName ||
    !newItem.jobTitle ||
    !newItem.location ||
    !newItem.startDate ||
    !newItem.description
    ) {
    errorMsg.textContent = "Fyll i alla obligatoriska fält!";
    return;
    }

    errorMsg.textContent = "";

    // Skickar POST-anrop till APIet
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
      });

      form.reset();
      window.location.href = "index.html";

    } catch (err) {
      console.error("Fel vid post:", err);
    }
  });
}

// Tar bort en arbetserfarenhet baserat på id
async function deleteItem(id) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    getWorkExperience();

  } catch (err) {
    console.error("Fel vid delete:", err);
  }
}