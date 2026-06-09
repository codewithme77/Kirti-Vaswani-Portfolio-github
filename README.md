# Executive Product Manager Portfolio Website

A modern, professional, single-page portfolio website designed for Senior Product Managers and Executive Product Leaders. Features a sleek SaaS-style design with dark/light mode toggle, smooth animations, and comprehensive case studies.

## 🎯 Features

### Design & UX
- ✨ **Modern SaaS Design** - Clean, professional aesthetic suitable for executive applications
- 🌓 **Dark/Light Mode Toggle** - Persistent theme preference with system preference detection
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Smooth Animations** - Subtle, professional animations and transitions
- 🎯 **Scroll Spy Navigation** - Active section highlighting while scrolling

### Sections
1. **Hero Section** - Eye-catching introduction with key metrics and CTA buttons
2. **About Me** - Professional background and core competencies
3. **Key Achievements** - 8 KPI cards showcasing metrics-driven impact
4. **Professional Experience** - Timeline view of career progression with details
5. **Product Management Skills** - 6 skill categories with 35+ competencies
6. **Case Studies** - 3 in-depth case studies with problem, analysis, solution, metrics
7. **Certifications** - Education and professional certifications
8. **Contact Section** - Contact information and contact form
9. **Footer** - Quick links and social connections

### Functionality
- 📥 **Resume Download** - Generate and download resume as text file
- 📧 **Contact Form** - Functional contact form with validation
- 🔔 **Notifications** - Toast notifications for user actions
- ⌨️ **Keyboard Navigation** - Full keyboard accessibility
- 📊 **Analytics Ready** - Built-in event tracking capabilities
- 🖨️ **Print Optimized** - Resume-ready print styles

### Technology Stack
- **HTML5** - Semantic structure
- **CSS3** - Advanced styling with CSS variables and Grid/Flexbox
- **Vanilla JavaScript** - No dependencies, pure JS functionality
- **Font Awesome 6** - Icon library (CDN)

## 📋 Content Sections

### Hero Metrics
- $500M+ Revenue Impact
- 50M+ Users Reached
- 15+ Products Launched
- 8 Direct Reports

### Professional Experience (19+ years)
- Director of Product (2021 - Present)
- Senior Product Manager (2018 - 2021)
- Product Manager (2015 - 2018)
- Business Analyst/Associate (2012 - 2015)
- Business Development Manager (2007 - 2012)

### Skills (6 Categories)
- Product Strategy
- Product Discovery
- Growth & Analytics
- Leadership & Execution
- Specializations
- Tools & Technologies

### Case Studies
1. **AI-Powered Personalization Engine** - 42% churn reduction, $28M revenue impact
2. **Enterprise GTM Expansion** - $9.2M annual revenue, 18 new customers
3. **Product-Led Growth Transformation** - 285% conversion improvement, $118M impact

### Certifications
- Reforge: Product Strategy
- Reforge: Data Fluency
- Product School Certification
- Pragmatic Marketing Advanced PM
- MBA - Stanford University
- B.Tech - Delhi University

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or backend required

### Installation
1. Clone the repository:
```bash
git clone https://github.com/codewithme77/Kirti-Vaswani-Portfolio-github.git
cd Kirti-Vaswani-Portfolio-github
```

2. Open in browser:
```bash
# Simply open index.html in your web browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

### File Structure
```
Kirti-Vaswani-Portfolio-github/
├── index.html       # HTML structure (46 KB)
├── styles.css       # Complete styling (30 KB)
├── script.js        # Interactivity & features (17 KB)
└── README.md        # Documentation
```

## 🎨 Customization

### Update Personal Information
Edit these sections in `index.html`:
- Name and title in hero section
- About me description
- Experience details in timeline
- Skills and certifications
- Contact information
- Social media links

### Change Color Scheme
Edit CSS variables in `styles.css` (line ~10):
```css
:root {
    --primary-color: #007aff;      /* Main brand color */
    --secondary-color: #5e5ce6;    /* Secondary accent */
    --accent-color: #ff9500;        /* Tertiary accent */
    /* ... more variables ... */
}
```

### Modify Content
All content uses placeholder text that can be easily edited:
- Replace company names and titles
- Update metrics and achievements
- Modify case study details
- Change skill tags
- Update certification list

### Customize Typography
Adjust font sizes, weights, and spacing:
```css
/* In styles.css */
--spacing-lg: 1.5rem;
--radius-lg: 16px;
/* Update as needed */
```

## 🌐 Deployment

### Deploy to GitHub Pages
```bash
# Push to main branch
git add .
git commit -m "Update portfolio content"
git push origin main

# Enable GitHub Pages in repository settings
# Select 'main' branch as source
```

### Deploy to Netlify
1. Connect GitHub repository
2. Set build command: (leave empty)
3. Set publish directory: /
4. Deploy

### Deploy to Vercel
1. Import project from GitHub
2. Framework: Other
3. Deploy

### Deploy to Any Static Host
- Firebase Hosting
- AWS S3 + CloudFront
- Azure Static Web Apps
- Any web server

## 💡 Features Breakdown

### Dark Mode
- Toggle via moon/sun icon
- Persistent storage (localStorage)
- Respects system preference on first load
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Breakpoints: 1024px, 768px, 600px
- Touch-friendly on all devices
- Optimized navigation for mobile

### Performance
- No external dependencies (except Font Awesome icons)
- CSS variables for efficient theming
- Optimized animations (60fps)
- Lazy loading ready
- Print-optimized styles

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus states for interactive elements

## 📱 Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## 🎯 Using This Template

### For Your Portfolio
1. Update all personal information
2. Customize colors to match your brand
3. Replace case studies with your own
4. Update metrics and achievements
5. Modify skills section
6. Update contact information

### Tips for Best Results
- Keep content concise and impactful
- Use real metrics and achievements
- Update case studies with measurable results
- Keep skills section focused on top competencies
- Use professional language throughout
- Test on multiple devices before publishing

## 📊 Analytics Integration

The portfolio includes hooks for analytics:
```javascript
trackEvent('portfolio_load', { theme: 'dark' });
trackEvent('nav_click', { target: '#about' });
trackEvent('resume_download', { timestamp: '...' });
trackEvent('contact_form_submit', { timestamp: '...' });
```

Uncomment the Google Analytics integration in `script.js`:
```javascript
if (window.gtag) window.gtag('event', eventName, eventData);
```

## 🔧 Maintenance

### Updating Content
- Edit `index.html` directly for content changes
- Changes are immediate; no build process needed
- Test locally before deploying

### Version Control
- Commit meaningful changes with clear messages
- Keep a backup of original content
- Use branches for major redesigns

### SEO Optimization
Add meta tags to `index.html` head:
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="Kirti Vaswani">
```

## 📧 Contact & Support

For questions or issues:
- Email: kirti.vaswani@example.com
- LinkedIn: linkedin.com/in/kirtivaswani
- GitHub: github.com/codewithme77

## 📄 License

This portfolio template is provided as-is for personal use. Feel free to customize and deploy as needed.

## 🙏 Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Design Inspiration: Modern SaaS websites
- Typography: System fonts with fallbacks

## 📈 Next Steps

1. ✅ Download/clone the repository
2. ✅ Customize all content with your information
3. ✅ Update colors to match your brand
4. ✅ Test responsiveness on all devices
5. ✅ Deploy to your preferred hosting
6. ✅ Share with recruiters and contacts

---

**Created:** June 2024
**Portfolio Version:** 1.0
**Last Updated:** 2024

Built with ❤️ for Product Leaders
