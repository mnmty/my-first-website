// Download Button Functionality
document.querySelector('.download-btn').addEventListener('click', function() {
    // Create a fake download simulation
    const button = this;
    const originalText = button.innerHTML;
    
    // Show loading state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing Download...';
    button.disabled = true;
    
    // Simulate download process
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Download Starting...';
        
        // Create fake download link
        setTimeout(() => {
            // Create a temporary link for download simulation
            const link = document.createElement('a');
            link.href = '#'; // In real site, put actual file URL here
            link.download = 'ShellBreaker-Demo-1.0.0.exe';
            
            // Show success message
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #00ff88;
                color: #0f2027;
                padding: 15px 25px;
                border-radius: 10px;
                z-index: 10000;
                font-weight: 600;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                animation: slideIn 0.3s ease;
            `;
            
            // Add CSS for animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
            
            notification.innerHTML = '<i class="fas fa-check-circle"></i> Download started! Check your downloads folder.';
            document.body.appendChild(notification);
            
            // Auto-remove notification after 5 seconds
            setTimeout(() => {
                notification.style.animation = 'slideIn 0.3s ease reverse';
                setTimeout(() => notification.remove(), 300);
            }, 5000);
            
            // Reset button after 2 seconds
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 2000);
            
            // Trigger download (in real site, this would actually download)
            // link.click(); // Uncomment for real download
            
        }, 1000);
        
    }, 1500);
});

// FAQ Toggle Functionality
document.querySelectorAll('.faq-item h4').forEach(question => {
    question.style.cursor = 'pointer';
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = document.createElement('i');
        icon.className = 'fas fa-chevron-down';
        icon.style.cssText = 'float: right; transition: transform 0.3s ease;';
        
        // Remove existing icon if any
        const existingIcon = this.querySelector('i');
        if (existingIcon) {
            existingIcon.remove();
        }
        
        this.appendChild(icon);
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.style.transform = 'rotate(0deg)';
        } else {
            answer.style.display = 'block';
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

// Initialize FAQ answers as hidden
document.querySelectorAll('.faq-item p').forEach(answer => {
    answer.style.display = 'none';
});

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add current year to footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2024', new Date().getFullYear());
    }
});
