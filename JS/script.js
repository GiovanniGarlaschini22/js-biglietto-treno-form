document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ticket-form");
    const errorAlert = document.getElementById("error-alert");

    const ticketCard = document.getElementById("ticket-card");
    const cardTitle = document.getElementById("card-title");
    const cardText = document.getElementById("card-text");

    function handleForm(event) {
        event.preventDefault();

        /* raccolta input */
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const kmInput = document.getElementById("kilometers").value;
        const ageInput = document.getElementById("age").value;

        /* trasformazione stringa in numero in base decimale */
        const km = parseInt(kmInput, 10);
        const age = parseInt(ageInput, 10);

        /* validazione degli input */
        if (kmInput.trim() === '' || ageInput.trim() === '' || km <= 0 || age <= 0) {
            errorAlert.classList.remove("d-none");
            ticketCard.classList.add("d-none");
            return;
        }

        errorAlert.classList.add("d-none");

        /* calcolo del prezzo base del biglietto */
        const pricePerKm = 0.21;
        let totalPrice = km * pricePerKm;

        /* assegnazione sconto in base alle condizioni */
        if (age < 18) {
            totalPrice *= 0.8;
        } else if (age >= 65) {
            totalPrice *= 0.6;
        } else if (age >= 18) {
            totalPrice *= 0.6;
        }

        /* Inserimento dati nella card */
        cardTitle.textContent = `Nominativo: ${firstName} ${lastName}`;
        cardText.textContent = `Prezzo del biglietto: €${totalPrice.toFixed(2)} per ${km} km`;
        ticketCard.classList.remove("d-none");

        /* Reset form */
        form.reset();

        /* output */
        console.log(`Nominativo del Biglietto: ${firstName} ${lastName}`);
        console.log(`Prezzo del biglietto: €${totalPrice.toFixed(2)}`);
    }

    form.addEventListener("submit", handleForm);
});