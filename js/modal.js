const deleteButton = document.getElementById('deleteButton');
    const alertBox = document.querySelector('.alert');
    const dashboard = document.querySelector('.dashboard');
    // Fonction pour afficher le modal
    function onModal() {
            alertBox.style.display = 'block';
            dashboard.classList.add('grayscale');
        }

        // Fonction pour masquer le modal
        function closeModal() {
            alertBox.style.display = 'none';
            dashboard.classList.remove('grayscale');
        }

        deleteButton.addEventListener('click', onModal);


        // Événement pour le bouton Non
        cancelDelete.addEventListener('click', closeModal);