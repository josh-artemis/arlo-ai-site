# arlohealth.ai — Custom Domain Setup

Guide to connect **arlohealth.ai** (Namecheap) to your Arlo Health site on GitHub Pages.

---

## 1. Enable GitHub Pages

1. Push this repo to GitHub
2. Go to your repo → **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source:** GitHub Actions
4. The `Deploy to GitHub Pages` workflow will run on every push to `main`

---

## 2. Add Custom Domain in GitHub

1. In **Settings** → **Pages**, find **Custom domain**
2. Enter **arlohealth.ai**
3. Click **Save**
4. GitHub will add a DNS check — wait for it to verify (or proceed with DNS first)

---

## 3. Configure DNS in Namecheap

1. Log in to [Namecheap](https://www.namecheap.com)
2. Go to **Domain List** → click **Manage** next to arlohealth.ai
3. Open the **Advanced DNS** tab
4. Remove any conflicting A records or CNAME records for `@` and `www`

Add these records:

| Type   | Host | Value              | TTL        |
|--------|------|--------------------|------------|
| **A**  | `@`  | `185.199.108.153`  | Automatic  |
| **A**  | `@`  | `185.199.109.153`   | Automatic  |
| **A**  | `@`  | `185.199.110.153`   | Automatic  |
| **A**  | `@`  | `185.199.111.153`   | Automatic  |
| **CNAME** | `www` | `YOUR_USERNAME.github.io` | Automatic |

Replace `YOUR_USERNAME` with your GitHub username (or your org name if the repo is under an organization).

---

## 4. Enforce HTTPS

1. In **Settings** → **Pages**, enable **Enforce HTTPS**
2. Wait for DNS to propagate (a few minutes to 48 hours)
3. GitHub will provision a free SSL certificate

---

## 5. Verify

- **Main site:** https://arlohealth.ai
- **Beta page:** https://arlohealth.ai/beta.html

---

## Troubleshooting

- **DNS not resolving:** Allow up to 24–48 hours for propagation. Use [dnschecker.org](https://dnschecker.org) to verify.
- **CNAME already exists:** Namecheap may add a default CNAME for `www` — remove it and add the GitHub Pages CNAME.
- **HTTPS not working:** Ensure "Enforce HTTPS" is checked after DNS has propagated.
