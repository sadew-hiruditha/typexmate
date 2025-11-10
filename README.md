# TypexMate 🚀

## Description

TypexMate is a web application that helps you create custom keyboard shortcuts for frequently typed text. Stop typing the same information repeatedly - create shortcuts that automatically expand to your full text! Built with React and generates AutoHotkey scripts.

## ✨ Features

- **🎨 Dark/Light Mode** - Switch between themes with a single click
- **📝 Custom Shortcuts** - Create unlimited custom text shortcuts
- **📋 Live Preview** - See your script in real-time as you type
- **📁 Import/Export** - Drag & drop existing AHK files to edit
- **⌨️ Built-in Shortcuts** - Pre-configured shortcuts for days, months, and more
- **💾 Auto-Save Theme** - Your theme preference is remembered

## 🚀 Quick Start

### For Users (Just want to use it)

1. Visit the live website: [TypexMate](https://typexmates.web.app)
2. Fill in your information (name, email, address, etc.)
3. Add custom shortcuts if needed
4. Click "Download Script"
5. Run the downloaded `.ahk` file
6. Start typing shortcuts!

### For Developers (Want to contribute)

1. Clone the repository:
   ```bash
   git clone https://github.com/sadew-hiruditha/typexmate.git
   ```

2. Navigate to the directory:
   ```bash
   cd typexmate
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## 📖 How to Use

### Step 1: Fill in Your Information
Enter your frequently used information:
- Full Name
- Address
- Email
- Mobile Number
- Degree Name

### Step 2: Add Custom Shortcuts (Optional)
Create your own shortcuts:
1. Type a shortcut word (e.g., "sig")
2. Type the replacement text (e.g., "Best regards, John Smith")
3. Click "Add Shortcut"
4. Repeat for more custom shortcuts

### Step 3: Download Your Script
- Click the "📥 Download Script" button
- Save the `AutoHotkeyScript.ahk` file

### Step 4: Install AutoHotkey
If you don't have AutoHotkey installed:
1. Download from [AutoHotkey.com](https://www.autohotkey.com/)
2. Install on your Windows computer
3. Double-click your downloaded script file

### Step 5: Use Your Shortcuts!

**Built-in Shortcuts (with `;`):**
- `name;` → Your full name
- `add;` → Your address
- `email;` → Your email
- `num;` → Your phone number
- `degree;` → Your degree name

**Date Shortcuts (with space):**
- `mon` → Monday
- `tue` → Tuesday
- `jan` → January
- `feb` → February
- *(and more...)*

**Your Custom Shortcuts:**
- Whatever you created! (e.g., `sig` → "Best regards, John")

## 🎯 Example Use Cases

- **Email Signatures**: Create `sig` shortcut for your full signature
- **Addresses**: Use `home` for home address, `work` for office
- **Phone Numbers**: Quick access with `cell`, `office`
- **Common Phrases**: "Thank you for your consideration"
- **Code Snippets**: Frequently used code patterns
- **Meeting Links**: Zoom or Teams meeting URLs

## 🛠️ Technologies Used

- React 18
- Vite
- Tailwind CSS
- AutoHotkey (generated scripts)
- Firebase Hosting

## 📱 Features in Detail

### Theme Toggle
- Click the sun/moon icon to switch themes
- Preference is saved automatically
- Smooth transitions between modes

### Custom Hotstring Builder
- Add unlimited custom shortcuts
- Edit existing shortcuts
- Delete shortcuts you no longer need
- Real-time preview

### Drag & Drop Import
- Import existing AHK scripts
- Automatically extracts your data
- Updates form fields instantly

### Live Preview
- See your script as you type
- Copy to clipboard with one click
- Syntax-highlighted code view

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

[MIT](https://choosealicense.com/licenses/mit/)

## 🙏 Acknowledgments

- AutoHotkey for the amazing scripting language
- React community for excellent tools and libraries
- All contributors and users of TypexMate

## 📧 Contact

Project Link: [https://github.com/sadew-hiruditha/typexmate](https://github.com/sadew-hiruditha/typexmate)

---

**Made with ❤️ by the TypexMate Team**
