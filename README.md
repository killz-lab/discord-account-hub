# Discord Account Hub - Website Only

## Description
A professional Discord server management and growth platform with tools, guides, and resources for Discord server owners.

## Features
- **Home**: Landing page with Discord account generator download
- **Tools**: Discord utilities (ID lookup, username generator, role generator, server templates)
- **Templates**: Pre-built server setups and configurations
- **Guides**: Comprehensive Discord server management guides
- **Dashboard**: User dashboard for logged-in users
- **Discord Login**: OAuth2 integration with user authentication

## Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: CSS Variables, Grid/Flexbox, Animations
- **Icons**: Font Awesome
- **Design**: Dark theme with Discord blurple accents
- **Responsive**: Mobile-first design approach

## File Structure
```
website-only/
├── index.html          # Home page with download section
├── tools.html          # Discord utilities and tools
├── templates.html       # Server templates and setups
├── guides.html          # Comprehensive guides and tutorials
├── dashboard.html       # User dashboard (requires login)
├── styles.css           # Complete styling system
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Features Included

### 🏠 Home Page
- Hero section with call-to-action
- Features showcase
- Discord account generator download
- Multiple download methods (direct, text file instructions)
- Discord contact integration
- Professional footer with social links

### 🛠️ Tools Page
- **ID Lookup**: Real Discord ID validation and information extraction
- **Username Generator**: Creative username suggestions
- **Role Generator**: Server role names and permissions
- **Template Generator**: Custom server setups

### 📚 Guides Page
- Categorized guides (Growth, Moderation, Management, etc.)
- Interactive modal system
- Filter and search functionality
- 46+ comprehensive guides

### 🎨 Design System
- CSS variables for consistent theming
- Dark mode optimized
- Discord brand colors (#5865F2 blurple)
- Smooth animations and transitions
- Mobile-responsive design

### 🔐 Authentication
- Discord OAuth2 integration ready
- User session management
- Avatar and profile display
- User menu with logout

## Setup Instructions

1. **Download** these files to your web server
2. **Configure** your web server to serve the directory
3. **Access** via your domain or localhost
4. **Optional**: Add your Discord OAuth credentials to `script.js`

## Customization

### Discord OAuth Setup
In `script.js`, replace:
```javascript
const DISCORD_CLIENT_ID = 'YOUR_CLIENT_ID';
const REDIRECT_URI = 'YOUR_REDIRECT_URI';
```

### Branding
Update colors in `styles.css`:
```css
:root {
    --primary-color: #5865F2;  /* Discord blurple */
    --secondary-color: #7289DA; /* Discord blue */
}
```

## Browser Support
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## License
This project is open source and available under the MIT License.

## Support
For support or questions, add me on Discord: **nyx.r4c**

---

**Note**: This contains only the website files. The actual Discord account generator executable is not included for security reasons.
