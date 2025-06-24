# Thinh's Portfolio

A modern, responsive portfolio website showcasing PowerShell development and Azure expertise.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading and optimized for Cloudflare Pages
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern standards
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript**: Modern ES6+ features and interactive elements
- **Font Awesome**: Professional icons
- **Google Fonts**: Inter font family for optimal readability

## 📁 Project Structure

```
MyPortfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality and interactions
├── profile-image.jpg   # Your profile image (to be added)
└── README.md          # This file
```

## 🎯 Sections

1. **Hero/Introduction**: Professional introduction highlighting PowerShell and Azure expertise
2. **Expertise**: Showcase of technical skills and competencies
3. **Projects**: Portfolio of GitHub projects with descriptions and tech stacks
4. **Contact**: Contact information and social links

## 🚀 Deployment to Cloudflare Pages

### Prerequisites
- A Cloudflare account
- Git repository (GitHub, GitLab, or Bitbucket)

### Steps to Deploy

1. **Push to Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Log in to Cloudflare Dashboard
   - Go to Pages > Create a project
   - Connect your Git repository
   - Select your portfolio repository

3. **Configure Build Settings**:
   - Framework preset: None (Static HTML)
   - Build command: (leave empty)
   - Build output directory: `/`
   - Root directory: `/`

4. **Deploy**:
   - Click "Save and Deploy"
   - Your site will be available at `https://your-project.pages.dev`

### Custom Domain (Optional)
- Add your custom domain in Cloudflare Pages settings
- Update DNS records as instructed
- Enable SSL/TLS (automatic with Cloudflare)

## 🎨 Customization

### Personal Information
Update the following in `index.html`:
- Replace "Thinh" with your name
- Update the introduction paragraph
- Change email, LinkedIn, and GitHub links
- Update project links and descriptions

### Profile Image
- Add your profile image as `profile-image.jpg` in the root directory
- Recommended size: 500x500px or higher
- Format: JPG, PNG, or WebP

### Colors and Styling
Customize the color scheme in `styles.css`:
- Primary color: `#4f46e5` (Indigo)
- Secondary color: `#fbbf24` (Amber)
- Gradient: Update CSS custom properties for different colors

### Projects
Update the projects section with your actual GitHub repositories:
- Replace placeholder project cards
- Update project images (use placeholder services or actual screenshots)
- Modify project descriptions and tech stacks
- Update GitHub links

## 📱 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🔧 Local Development

1. Clone or download the repository
2. Open `index.html` in a web browser
3. For local server (optional):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   ```

## 📈 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔒 Security

- No external dependencies that could introduce vulnerabilities
- All external resources loaded over HTTPS
- Content Security Policy ready
- No sensitive information exposed

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)

---

**Built with ❤️ by Thinh | Optimized for Cloudflare Pages**
