const API_URL = "https://b4a0b0bf-1bf0-4dcd-9284-f7445bdab625-00-39xjq7sgktbi3.kirk.replit.dev/api/contrats";


fetch(API_URL)
  .then(response => response.json())
  .then(contrats => {
    const tableHeader = document.getElementById("table-header");
    const tableBody = document.getElementById("table-body");

    if (contrats.length === 0) {
      tableBody.innerHTML = "<tr><td colspan='5'>Aucun contrat trouvé</td></tr>";
      return;
    }

    // Générer les en-têtes de colonnes
    const columns = Object.keys(contrats[0]);
    columns.forEach(col => {
      const th = document.createElement("th");
      th.textContent = col;
      tableHeader.appendChild(th);
    });

    // Générer les lignes du tableau
    contrats.forEach(contrat => {
      const tr = document.createElement("tr");
      columns.forEach(col => {
        const td = document.createElement("td");
        td.textContent = contrat[col];
        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
    });
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des contrats :", error);
  });
