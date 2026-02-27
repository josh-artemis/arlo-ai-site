# Arlo Health Platform Site — Standalone Repo Setup

This is a standalone GitHub Pages site for Arlo Health. Follow these steps to create the repo and deploy.

---

## 1. Create the repo on GitHub

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `arlo-health-platform-site` (or `arlohealth.ai`, etc.)
3. **Visibility:** Public
4. **Do not** initialize with a README (this folder already has one)
5. Click **Create repository**

---

## 2. Push this folder to the new repo

From your terminal:

```bash
cd arlo-health-platform-site   # or the full path to this folder

# Initialize git (if not already)
git init

# Add all files
git add .
git commit -m "Initial commit: Arlo Health platform site"

# Add your new repo as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/arlo-health-platform-site.git

# Push
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username (e.g. `josh-artemis`).

---

## 3. Enable GitHub Pages

1. In your new repo → **Settings** → **Pages**
2. **Source:** GitHub Actions
3. **Custom domain:** Enter `arlohealth.ai` and save

---

## 4. Configure Namecheap DNS

See [DOMAIN_SETUP.md](./DOMAIN_SETUP.md) for the full guide. Summary:

- Add 4 A records for `@` pointing to GitHub's IPs
- Add CNAME for `www` → `YOUR_USERNAME.github.io`
- Enable **Enforce HTTPS** once DNS propagates

---

## 5. Done

Your site will be live at **https://arlohealth.ai** after DNS propagates (usually 5–30 minutes).
