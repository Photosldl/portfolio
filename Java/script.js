// Récupérer toutes les images de la galerie
const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const body = document.body;

// Fonction pour ouvrir la modale
images.forEach(image => {
    image.addEventListener('click', function () {
        modal.style.display = "flex"; // Affiche la modale
        modalImage.src = this.src; // Définit l'image de la modale avec l'image cliquée
        body.classList.add('blur-background'); // Ajoute le flou à l'arrière-plan
    });
});

// Fonction pour fermer la modale
function closeModal(event) {
    if (event.target === modal || event.target.className === 'close') {
        modal.style.display = "none"; // Cache la modale
        body.classList.remove('blur-background'); // Supprime le flou de l'arrière-plan
    }
}