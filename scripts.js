// script.js

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle Form Submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // You can add your form processing logic here, e.g., sending data to a server

    // Displaying a message after form submission
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset(); // Reset the form fields
});

// Project Modal Functionality
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').innerText;
        const description = item.querySelector('p').innerText;

        showModal(title, description);
    });
});

function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}


function showModal(title, description) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking the close button
    modal.querySelector('.close-button').addEventListener('click', () => {
        modal.remove();
    });
    
    // Close modal when clicking outside of the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}
