/* ==========================================
   EXECUTIVE PORTFOLIO - JAVASCRIPT
   ========================================== */

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const resumeDownload = document.getElementById('resumeDownload');
const contactForm = document.getElementById('contactForm');

// ==========================================
// THEME TOGGLE (Dark/Light Mode)
// ==========================================

const THEME_KEY = 'portfolio-theme';

function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', toggleTheme);

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    updateMenuIcon();
}

function updateMenuIcon() {
    const isActive = navMenu.classList.contains('active');
    menuToggle.classList.toggle('active', isActive);
}

menuToggle.addEventListener('click', toggleMobileMenu);

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        updateMenuIcon();
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const isClickInsideNav = navMenu.contains(e.target);
    const isClickOnToggle = menuToggle.contains(e.target);
    
    if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        updateMenuIcon();
    }
});

// ==========================================
// SMOOTH SCROLLING FOR NAVIGATION
// ==========================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==========================================
// RESUME DOWNLOAD
// ==========================================

resumeDownload.addEventListener('click', () => {
    // Create a sample resume content
    const resumeContent = `
KIRTI VASWANI
Senior Product Manager | Executive Leader
San Francisco, CA | kirti.vaswani@example.com
LinkedIn: linkedin.com/in/kirtivaswani | GitHub: github.com/kirtivaswani

EXECUTIVE SUMMARY
Results-driven Senior Product Manager with 19+ years of comprehensive experience spanning product strategy, business development, and technology leadership. Proven track record of generating $500M+ in revenue impact while reaching 50M+ users globally. Expert in product discovery, roadmapping, A/B testing, and building high-performance teams.

KEY METRICS & ACHIEVEMENTS
• $500M+ Revenue Impact - Direct revenue contribution through product strategy and market expansion
• 50M+ Users Reached - Global user base growth across multiple product lines
• 15+ Products Launched - Successful product launches from conception to market leadership
• 285% Engagement Increase - User engagement improvement through experimentation
• $45M Cost Reduction - Operational efficiency improvements and resource optimization
• 4.8/5.0 Customer Satisfaction - NPS and customer satisfaction ratings
• 68% Retention Growth - Improvement in user retention through personalization initiatives
• 40% Time to Market - Faster product delivery through agile methodologies

PROFESSIONAL EXPERIENCE

Director of Product (2021 - Present)
TechVenture Inc., San Francisco
• Lead product strategy and roadmap for 3 major product lines generating $180M revenue impact
• Manage team of 8 product managers and 15+ cross-functional members
• Established product governance framework and best practices across organization
• Implemented OKR-based planning and execution methodology
• Drove adoption of AI-powered features impacting 50K+ enterprise users

Senior Product Manager (2018 - 2021)
GrowthScale Systems, San Francisco
• Owned end-to-end product strategy for flagship B2B SaaS platform
• Launched 6 major features resulting in 150% increase in Annual Recurring Revenue
• Built and mentored team of 5 product managers and designers
• Conducted extensive customer research with 500+ interviews for product discovery
• Implemented data analytics framework and experimentation culture (30+ tests/month)

Product Manager (2015 - 2018)
Digital Innovations Corp, San Francisco
• Led product discovery and market research initiatives
• Managed product roadmap for mobile and web platforms
• Increased user engagement by 185% through systematic experimentation
• Coordinated go-to-market strategy for 5 product launches
• Drove customer-centric approach through user research programs

Business Analyst / Product Associate (2012 - 2015)
Enterprise Solutions Ltd, San Francisco
• Analyzed market trends and competitive landscape
• Supported product managers in roadmap development
• Conducted user interviews and feedback analysis
• Created documentation and business requirements
• Assisted in 3 product launches and marketing initiatives

Business Development Manager (2007 - 2012)
Strategic Growth Partners, San Francisco
• Managed partnerships and business development initiatives
• Identified market opportunities and growth channels
• Led cross-functional teams for go-to-market strategy
• Negotiated key partnerships generating $50M+ in revenue

CORE COMPETENCIES
Product Strategy | Product Discovery | Roadmapping | Market Analysis | Competitive Analysis
A/B Testing | Growth Strategy | Data Analytics | User Research | Customer Interviews
Team Building | Mentoring & Coaching | Agile/Scrum | Executive Communication
SaaS Products | B2B Strategy | Marketplace Models | Mobile Products | Enterprise Software
Tableau/Looker | SQL | Amplitude/Mixpanel | JIRA | Confluence

CASE STUDIES
1. AI-Powered Personalization Engine (2022-2023)
   - 42% reduction in monthly churn (from 8% to 4.6%)
   - 127% increase in engagement with $28M revenue impact
   - 91% feature adoption rate

2. Enterprise GTM Expansion Strategy (2021-2022)
   - Signed 18 enterprise customers in first 12 months
   - Generated $9.2M annual revenue
   - Increased average deal size from $50K to $156K

3. Product-Led Growth Transformation (2020-2021)
   - 285% improvement in trial-to-paid conversion (12% to 46%)
   - 83% reduction in customer acquisition cost ($5K to $850)
   - $118M revenue impact in Year 1

CERTIFICATIONS & EDUCATION
• Reforge: Product Strategy (2022)
• Reforge: Data Fluency for Product Managers (2021)
• Product School: Product Management Certification (2020)
• Pragmatic Marketing: Advanced Product Management (2019)
• MBA - Business Administration, Stanford University (2010)
• B.Tech - Electronics & Communication, Delhi University (2007)

LANGUAGES
English (Fluent) | Hindi (Native)
    `;
    
    // Create blob and download
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Kirti_Vaswani_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    // Show confirmation
    showNotification('Resume downloaded successfully!', 'success');
});

// ==========================================
// CONTACT FORM HANDLING
// ==========================================

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelector('input[type="text"]:nth-of-type(2)').value || 'Portfolio Inquiry';
    const message = contactForm.querySelector('textarea').value;
    
    // Validate form
    if (!name || !email || !message) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate API call
    setTimeout(() => {
        // In a real application, you would send this data to your backend
        console.log('Form submitted:', { name, email, subject, message });
        
        // Reset form
        contactForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    }, 1500);
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: 'white',
        fontSize: '14px',
        fontWeight: '500',
        zIndex: '2000',
        animation: 'slideInUp 0.3s ease-out',
        maxWidth: '300px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
    });
    
    // Set background color based on type
    const colors = {
        success: '#34C759',
        error: '#FF3B30',
        info: '#007AFF'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.achievement-card, .timeline-item, .cert-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==========================================
// ACTIVE NAVIGATION INDICATOR
// ==========================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Update active link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// ==========================================
// TYPING ANIMATION FOR HERO
// ==========================================

function addTypingAnimation() {
    const subtitle = document.querySelector('.hero-subtitle');
    const originalText = subtitle.textContent;
    
    subtitle.textContent = '';
    let index = 0;
    let isTyping = true;
    
    const typeText = () => {
        if (isTyping && index < originalText.length) {
            subtitle.textContent += originalText[index];
            index++;
            setTimeout(typeText, 50);
        }
    };
    
    typeText();
}

// ==========================================
// PAGE LOAD INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Add typing animation
    addTypingAnimation();
    
    // Add event listener for window resize to handle responsive menu
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            updateMenuIcon();
        }
    });
    
    // Log portfolio loaded
    console.log('🎯 Executive Portfolio loaded successfully!');
});

// ==========================================
// ADD CSS ANIMATIONS
// ==========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll listener
window.addEventListener('scroll', debounce(updateActiveNavLink, 100));

// ==========================================
// ANALYTICS TRACKING (Optional)
// ==========================================

function trackEvent(eventName, eventData = {}) {
    console.log(`📊 Event: ${eventName}`, eventData);
    
    // Integrate with your analytics service (Google Analytics, Mixpanel, etc.)
    // Example: if (window.gtag) window.gtag('event', eventName, eventData);
}

// Track page load
trackEvent('portfolio_load', {
    timestamp: new Date().toISOString(),
    theme: document.body.classList.contains('dark-mode') ? 'dark' : 'light'
});

// Track link clicks
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('nav_click', {
            target: link.getAttribute('href')
        });
    });
});

// Track resume download
resumeDownload.addEventListener('click', () => {
    trackEvent('resume_download', {
        timestamp: new Date().toISOString()
    });
});

// Track contact form submission
contactForm.addEventListener('submit', () => {
    trackEvent('contact_form_submit', {
        timestamp: new Date().toISOString()
    });
});

// ==========================================
// PRINT STYLES (For Resume Printing)
// ==========================================

window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
    document.querySelectorAll('nav, footer').forEach(el => el.style.display = 'none');
});

window.addEventListener('afterprint', () => {
    document.body.style.backgroundColor = '';
    document.querySelectorAll('nav, footer').forEach(el => el.style.display = '');
});
