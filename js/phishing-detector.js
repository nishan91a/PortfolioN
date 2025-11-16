// Phishing Detector JavaScript

function reportPhishing(type) {
    alert(`Thank you for reporting this ${type} as phishing! Your report has been submitted to our security team.`);
}

function markNotPhishing(type) {
    alert(`This ${type} has been marked as legitimate. Thank you for your feedback!`);
}

// Close warning banner
document.querySelectorAll('.close-warning').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.style.display = 'none';
    });
});

// Add smooth animations on page load
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.detector-section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.style.transition = 'all 0.5s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add interactive features to email/message previews
document.querySelectorAll('.email-preview, .message-preview').forEach(preview => {
    preview.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'all 0.3s ease';
    });

    preview.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        this.style.transform = 'translateY(0)';
    });
});
