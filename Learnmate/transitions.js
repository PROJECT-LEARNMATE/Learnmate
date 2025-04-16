document.addEventListener('DOMContentLoaded', function() {
    // Fade in when page loads
    document.body.style.opacity = '1';
});

// Handle link clicks for smooth transitions
document.querySelectorAll('a').forEach(link => {
    if (link.href && !link.href.startsWith('javascript') && !link.href.startsWith('#')) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = link.href;
            }, 300); // Match this with your transition duration
        });
    }
});