const form = document.getElementById("leadForm");
const tableBody = document.getElementById("leadTable");

// ADD
form.addEventListener("submit", async (e) => {
    e.preventDefault();

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const sourceInput = document.getElementById("source");

    const lead = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        source: sourceInput.value
    };


    if (!/^\d{10}$/.test(lead.phone)) {
        alert("Phone must be 10 digits");
        return;
    }

    await fetch("http://localhost:3000/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead)
    });

    form.reset();
    loadLeads();
});

// LOAD
async function loadLeads() {
    const res = await fetch("http://localhost:3000/leads");
    const data = await res.json();

    tableBody.innerHTML = "";

    data.forEach(lead => {
        tableBody.innerHTML += `
        <tr>
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td>${lead.phone}</td>
            <td>${lead.source}</td>
            <td>${lead.date}</td>
            <td>
                <button onclick="editLead('${lead.id}')">Edit</button>
                <button onclick="deleteLead('${lead.id}')">Delete</button>
            </td>
        </tr>`;
    });
}

// DELETE
async function deleteLead(id) {
    if (confirm("Delete this lead?")) {
        await fetch(`http://localhost:3000/leads/${id}`, {
            method: "DELETE"
        });
        loadLeads();
    }
}

// EDIT
async function editLead(id) {
    const newName = prompt("Enter new name:");
    const newEmail = prompt("Enter new email:");
    const newPhone = prompt("Enter new phone:");
    const newSource = prompt("Enter new source:");

    if (!newName || !newEmail || !newPhone || !newSource) {
        alert("All fields required");
        return;
    }

    await fetch(`http://localhost:3000/leads/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: newName,
            email: newEmail,
            phone: newPhone,
            source: newSource
        })
    });

    loadLeads();
}

loadLeads();