document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for Reveal on Scroll
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Simple auto-update year (optional)
    console.log("Portfolio loaded successfully.");
});
// Back to Top functionality
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    
    // Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's a progress bar inside a skill card
                if (entry.target.classList.contains('skill-card')) {
                    const progress = entry.target.querySelector('.progress');
                    // This triggers the CSS transition
                    progress.style.width = progress.getAttribute('style').split(': ')[1];
                }
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));
});
// Counter Animation for Stats
const stats = document.querySelectorAll('.stat-number');

const countUp = (element) => {
    const target = +element.getAttribute('data-target');
    const count = +element.innerText;
    const speed = 200; // Change this to adjust speed
    const inc = target / speed;

    if (count < target) {
        element.innerText = Math.ceil(count + inc);
        setTimeout(() => countUp(element), 1);
    } else {
        element.innerText = target + (element.innerText.includes('%') ? '%' : '+');
    }
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            countUp(entry.target);
            statsObserver.unobserve(entry.target); // Run only once
        }
    });
}, { threshold: 1.0 });

stats.forEach(stat => statsObserver.observe(stat));
// Contact Form Submission Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading state
        formStatus.innerText = "Sending your message...";
        formStatus.style.color = "var(--primary)";

        // Simulate an API call
        setTimeout(() => {
            formStatus.innerText = "Thank you! Your message has been sent successfully.";
            formStatus.style.color = "#10b981"; // Success Green
            contactForm.reset();
        }, 1500);
    });
}
function initMap() {
    // Coordinates for Dhaka, Bangladesh
    const location = { lat: 23.8103, lng: 90.4125 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        // Custom Styles (Light/Clean Theme)
        styles: [
            { "featureType": "landscape", "stylers": [{ "color": "#f5f5f5" }] },
            { "featureType": "water", "stylers": [{ "color": "#e9e9e9" }] },
            { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }
        ]
    });

    // Custom Marker
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Krisno Bormon",
        animation: google.maps.Animation.DROP
    });

    // Info Window
    const infoWindow = new google.maps.InfoWindow({
        content: '<div style="padding:10px;"><strong>Krisno Bormon</strong><br>Full-Stack Developer</div>'
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}
function initMap() {
  // Center coordinates (e.g., London)
  const centerPos = { lat: 51.5074, lng: -0.1278 };
  
  // Initialize map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: centerPos,
  });

  // Optional: Add a marker
  new google.maps.Marker({
    position: centerPos,
    map: map,
    title: "Hello London!"
  });
}
