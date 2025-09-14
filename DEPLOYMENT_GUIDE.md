# 🚀 GitHub Pages Deployment Guide

This guide will walk you through deploying your Corelogic Studio website to GitHub Pages using only the GitHub web interface - no command line required!

## Step 0: Download All Project Files

Before you can deploy to GitHub, you need to download all the project files to your computer:

### Method 1: Download as ZIP (Recommended)
1. **Look for the green "Code" button** at the top of this project
2. **Click "Download ZIP"**
3. **Save the ZIP file** to your computer (e.g., Desktop or Downloads folder)
4. **Extract/Unzip the file** - this will create a folder with all project files
5. **You now have all files ready** for upload to GitHub!

### Method 2: Save Files Individually (Alternative)
If the ZIP download isn't available:
1. **Right-click on each file** in the project file list
2. **Select "Save As" or "Save Link As"**
3. **Create a folder** on your computer called "corelogic-studio"
4. **Save each file** in the correct folder structure
5. **Make sure to maintain** the folder structure (src/, public/, etc.)

### What You Should Have
After downloading, your folder should contain:
- 📁 `src/` folder (with components, content subfolders)
- 📁 `public/` folder (with admin subfolder)
- 📁 `.github/` folder (with workflows subfolder)
- 📄 `package.json`
- 📄 `index.html`
- 📄 `vite.config.ts`
- 📄 `tailwind.config.js`
- 📄 And other config files

✅ **Once you have all files downloaded, proceed to Step 1 below!**

---

## Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in repository details:**
   - Repository name: `corelogic-studio` (or your preferred name)
   - Description: "Modern digital agency website"
   - Make sure it's **Public** (required for free GitHub Pages)
   - ✅ Check "Add a README file"
5. **Click "Create repository"**

## Step 2: Upload Your Website Files

1. **Download all project files** from your development environment
2. **In your new GitHub repository**, click "uploading an existing file"
3. **Drag and drop all files** from the project folder
   - Include all folders: `src/`, `public/`, etc.
   - Include all config files: `package.json`, `vite.config.ts`, etc.
4. **Scroll down to "Commit changes"**
5. **Add commit message**: "Initial website upload"
6. **Click "Commit changes"**

## Step 3: Enable GitHub Pages

1. **Go to your repository's "Settings" tab** (top navigation)
2. **Scroll down and click "Pages"** in the left sidebar
3. **Under "Source"**, select "Deploy from a branch"
4. **Choose "main" branch** from the dropdown
5. **Select "/ (root)"** as the folder
6. **Click "Save"**

🎉 **Your site will be available at:** `https://yourusername.github.io/repository-name`

*Note: It may take 5-10 minutes for your site to be live*

## Step 4: Set Up EmailJS (Required for Contact Form)

### 4.1 Create EmailJS Account
1. **Go to [EmailJS.com](https://www.emailjs.com/)**
2. **Sign up for a free account**
3. **Verify your email address**

### 4.2 Create Email Service
1. **Go to "Email Services"** in your EmailJS dashboard
2. **Click "Add New Service"**
3. **Choose your email provider** (Gmail, Outlook, etc.)
4. **Follow the setup instructions**
5. **Copy your Service ID** (you'll need this)

### 4.3 Create Email Template
1. **Go to "Email Templates"** in your dashboard
2. **Click "Create New Template"**
3. **Use this template content:**
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   From: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
4. **Save and copy your Template ID**

### 4.4 Get Your Public Key
1. **Go to "Account"** in your EmailJS dashboard
2. **Copy your Public Key**

### 4.5 Update Your Website
1. **In your GitHub repository**, navigate to `src/components/Contact.tsx`
2. **Click the pencil icon** to edit the file
3. **Find these lines** (around line 35):
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',    // Replace with your Service ID
     'YOUR_TEMPLATE_ID',   // Replace with your Template ID
     {
       from_name: formData.name,
       from_email: formData.email,
       subject: formData.subject,
       message: formData.message,
     },
     'YOUR_PUBLIC_KEY'     // Replace with your Public Key
   );
   ```
4. **Replace the placeholders** with your actual EmailJS credentials
5. **Scroll down and commit changes**

## Step 5: Set Up Content Management (Optional)

### 5.1 Update CMS Configuration
1. **Navigate to `public/admin/config.yml`** in your repository
2. **Click the pencil icon** to edit
3. **Find this line:**
   ```yaml
   repo: your-username/your-repo-name
   ```
4. **Replace with your actual GitHub username and repository name**
5. **Commit the changes**

### 5.2 Access Your CMS
- **Your CMS will be available at:** `https://yourusername.github.io/repository-name/admin`
- **First-time setup may require GitHub OAuth configuration**

## Step 6: Customize Your Website

### Update Company Information
1. **Edit `src/content/company.md`** for contact details
2. **Edit `src/content/home.md`** for hero section content
3. **Update team photos** in `src/components/Team.tsx`

### Customize Branding
1. **Replace company name** in `src/components/Header.tsx`
2. **Update colors** by modifying Tailwind classes
3. **Add your logo** by replacing the Code2 icon in Header

## 🔧 Troubleshooting

### Site Not Loading?
- Wait 10-15 minutes after enabling GitHub Pages
- Check that your repository is public
- Verify all files were uploaded correctly

### Contact Form Not Working?
- Double-check your EmailJS credentials
- Make sure you've verified your email service in EmailJS
- Test your EmailJS template in their dashboard

### CMS Not Accessible?
- Ensure the `public/admin/` folder was uploaded
- Check that the config.yml has correct repository information
- GitHub OAuth setup may be required for authentication

## 📞 Need Help?

If you encounter any issues:
1. **Check the repository's Actions tab** for build errors
2. **Create an issue** in your repository
3. **Contact support** at hello@corelogicstudio.com

---

**🎉 Congratulations! Your professional website is now live on GitHub Pages!**