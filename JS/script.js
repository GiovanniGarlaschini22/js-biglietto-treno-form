document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ticket-form");

    function handleForm(event) {
        event.preventDefault();

        /* raccolta input */
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const kmInput = document.getElementById("kilometers").value;
        const ageInput = document.getElementById("age").value;

        const km = Number(kmInput);
        const age = Number(ageInput);

        /* validazione degli input */
        if (kmInput.trim() === '' || ageInput.trim() === '' || km <= 0 || age <= 0) {
            console.log("Inserire valori validi!");
            return;
        }

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

        /* output */
        console.log(`Nominativo del Biglietto: ${firstName}, ${lastName}`);
        console.log(`Prezzo del biglietto: €${totalPrice.toFixed(2)}`);
    }

    form.addEventListener("submit", handleForm);
});