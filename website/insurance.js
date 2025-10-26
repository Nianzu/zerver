document.getElementById("insurance-form").addEventListener("submit", async (e) => {
	  e.preventDefault();
	  const data = Object.fromEntries(new FormData(e.target).entries());

	  const res = await fetch("/api/calculate_insurance", {
		      method: "POST",
		      headers: { "Content-Type": "application/json" },
		      body: JSON.stringify(data),
		    });

	  const result = await res.json();
	  document.getElementById("A_total_cost").textContent = `$${result.A_total_cost}`;
	  document.getElementById("A_personal_cost").textContent = `$${result.A_personal_cost}`;
	  document.getElementById("B_personal_cost").textContent = `$${result.B_personal_cost}`;

	  updateChart(result.breakdown);
});
