/**
 * Theme Switcher for Thesis Website
 * Supports Light/Dark mode with localStorage persistence
 * Version: 1.0
 * Last Updated: 2026-03-10
 */

// Theme Configuration
const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

const STORAGE_KEY = 'thesis-website-theme';

// Initialize theme on page load
function initTheme() {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const preferredTheme = savedTheme || THEMES.DARK;
    
    // Apply theme immediately to prevent flash
    applyTheme(preferredTheme);
    
    // Update toggle button state
    updateToggleButton(preferredTheme);
}

// Apply theme to document
function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === THEMES.LIGHT) {
        root.classList.remove('dark-theme');
        root.classList.add('light-theme');
    } else {
        root.classList.remove('light-theme');
        root.classList.add('dark-theme');
    }
    
    // Store preference
    localStorage.setItem(STORAGE_KEY, theme);
    
    // Dispatch custom event for theme change
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
}

// Toggle between themes
function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.classList.contains('light-theme') ? THEMES.LIGHT : THEMES.DARK;
    const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    
    applyTheme(newTheme);
    updateToggleButton(newTheme);
    
    // Add smooth transition animation
    root.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        root.style.transition = '';
    }, 300);
}

// Update toggle button appearance
function updateToggleButton(theme) {
    const toggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (!toggleBtn || !sunIcon || !moonIcon) return;
    
    if (theme === THEMES.LIGHT) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        toggleBtn.setAttribute('title', 'Switch to dark mode');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        toggleBtn.setAttribute('aria-label', 'Switch to light mode');
        toggleBtn.setAttribute('title', 'Switch to light mode');
    }
}

// Get current theme
function getCurrentTheme() {
    const root = document.documentElement;
    return root.classList.contains('light-theme') ? THEMES.LIGHT : THEMES.DARK;
}

// Initialize theme when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}

// Export functions for global access
window.themeManager = {
    toggle: toggleTheme,
    getCurrent: getCurrentTheme,
    set: applyTheme,
    THEMES: THEMES
};
