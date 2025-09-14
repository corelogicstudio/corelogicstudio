# Corelogic Studio - Digital Agency Website

A modern, professional website for Corelogic Studio built with React, TypeScript, and Tailwind CSS. Features impressive animations, EmailJS contact forms, and Decap CMS integration for easy content management.

## 🚀 Features

- ✨ Modern React with TypeScript
- 🎨 Beautiful UI with Tailwind CSS and gradient effects
- 🌟 Smooth animations with Framer Motion
- 🎯 Interactive particle background
- 📱 Fully responsive design
- 📧 EmailJS contact form integration
- 🔧 Decap CMS for content management
- 🚀 Optimized for GitHub Pages deployment

## 📋 Quick Setup Guide

### Method 1: GitHub Web Interface (Recommended for beginners)

1. **Fork or Create Repository**
   - Go to GitHub.com and create a new repository
   - Name it something like `corelogic-studio` or `your-agency-name`
   - Make sure it's public (required for free GitHub Pages)

2. **Upload Files**
   - Download all project files from this project
   - In your GitHub repository, click "uploading an existing file"
   - Drag and drop all the project files
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to your repository Settings tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save
   - Your site will be available at: `https://yourusername.github.io/repository-name`

4. **Set up EmailJS (Required for contact form)**
   - Sign up at [EmailJS.com](https://www.emailjs.com/)
   - Create a new service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key
   - In GitHub, edit `src/components/Contact.tsx`
   - Replace the placeholder IDs with your actual EmailJS credentials

### Method 2: Using Git Commands

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔧 Configuration

### EmailJS Setup (Important!)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Update `src/components/Contact.tsx` with your credentials:
   ```javascript
   // Replace these placeholders:
   'YOUR_SERVICE_ID'    // Your EmailJS service ID
   'YOUR_TEMPLATE_ID'   // Your EmailJS template ID  
   'YOUR_PUBLIC_KEY'    // Your EmailJS public key
   ```

### CMS Setup (Optional)
1. After deploying to GitHub Pages, access the CMS at: `https://yourusername.github.io/repository-name/admin`
2. Update `public/admin/config.yml`:
   - Replace `your-username/your-repo-name` with your actual GitHub info
3. Set up GitHub OAuth for CMS authentication (see Decap CMS docs)

## 📝 Content Management

### Using the CMS (Non-technical users)
- Access at `/admin` after deployment
- Manage hero content, services, team members, and company info
- Changes are automatically saved to GitHub

### Manual Content Updates
- Edit files in `src/content/` folder
- Update component files directly for advanced customization

## 🎨 Customization

### Colors & Branding
- Primary colors: Blue (#3B82F6) and Purple (#8B5CF6)
- Update Tailwind classes throughout components
- Replace logo and company name in Header component

### Content
- Hero section: Edit `src/components/Hero.tsx`
- Services: Update `src/components/Services.tsx`
- Team: Replace photos and info in `src/components/Team.tsx`
- Contact: Update company details in `src/components/Contact.tsx`

### Images
- Team photos: Use high-quality professional headshots
- All images are currently sourced from Pexels
- Replace with your actual team photos and company images

## 🛠 Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion, CSS transitions
- **Forms**: EmailJS integration
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with GitHub Actions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Features

- Optimized bundle size with Vite
- Lazy loading for images
- Efficient animations with Framer Motion
- Responsive images and modern CSS

## 📞 Support

For questions or issues:
- Create an issue in this repository
- Email: hello@corelogicstudio.com

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Corelogic Studio**