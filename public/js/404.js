document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón y la imagen
    const button = document.querySelector('.dog-button');
    const dogImage = document.querySelector('.dog-image');
    const hiddenText = document.querySelector('.hide');

    let count = 0;

    // Define el evento click para el botón
    button.addEventListener('click', function() {
        count++;
        // Realiza el fetch para obtener una nueva imagen de perro
        fetch('https://dog.ceo/api/breed/dachshund/images/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Actualiza el src de la imagen con la nueva URL
                dogImage.src = data.message;
            })
            .catch(error => {
                console.error('Error fetching random dog image:', error);
            });
        if (count >= 3) {
            hiddenText.classList.remove('hide');
        }
    });
});