# 🕹️ ARCADE ZONE — Free Online Games Portal

A sleek, dark-themed games website with 16 free online games across 4 categories.

## 🎮 Games Included

**Sports:** Basketball Stars, Soccer Random, Table Tennis World Tour, Boxing Random  
**Action:** Shell Shockers, Stickman Fighter, Agar.io, Slither.io  
**Puzzle:** 2048, Wordle, Sudoku, Mahjong  
**Classic:** Frogger, Pac-Man, Dino Runner, Tetris  

## 🚀 How to Host on GitHub Pages (Free!)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up if you don't have an account.

### Step 2 — Create a new repository
1. Click the **+** button → **New repository**
2. Name it: `arcade-zone` (or anything you like)
3. Make sure it's set to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
1. Click **Upload files** on your new repo page
2. Drag and drop all 4 files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, choose `main` → `/ (root)`
5. Click **Save**

### Step 5 — Your site is live! 🎉
After ~1 minute, your site will be at:
```
https://YOUR-USERNAME.github.io/arcade-zone
```

## ✏️ How to Add More Games

In `index.html`, copy any `game-card` block and change:
- The emoji and gradient colors
- The category (`data-category="sports"`)
- The game name and description
- The URL in the `onclick` handler

## 📝 Notes

- Some games will open in a new tab instead of embedding — this is normal and expected due to browser security policies (X-Frame-Options headers).
- All games are free to play and property of their respective owners.
