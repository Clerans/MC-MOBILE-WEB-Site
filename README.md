# MC Mobile Web Site

**MC Mobile Web Site** is a responsive e-commerce front-end for browsing and purchasing mobile phones and accessories.  
Built with **HTML**, **CSS (Tailwind)**, and **Vanilla JavaScript**. Includes admin pages and Firebase integration for authentication (client-side).

---

## 🚀 Live Demo
If you enable GitHub Pages for this repository, your site will be available at:  
`https://clerans.github.io/MC-MOBILE-WEB-Site/`  

---

## 🔧 Features
- Responsive product listing and hero pages
- Product detail cards and "Add to Cart" UI
- Shopping cart and checkout UI (frontend only)
- User authentication (Firebase Auth) — register & login pages
- Admin dashboard pages for managing products & orders (static UI)
- Tailwind CSS for rapid styling and responsiveness

---

## 📂 Project Structure
```
MC-MOBILE-WEB-Site/
├─ index.html
├─ products.html
├─ cart.html
├─ contact.html
├─ about.html
├─ login.html
├─ register.html
├─ my-orders.html
├─ admin/
│  ├─ admin.html
│  ├─ admin-products.html
│  ├─ admin-orders.html
│  └─ admin-login.html
├─ js/
│  ├─ firebase-config.js
│  ├─ login.js
│  ├─ register.js
│  └─ admin-login.js
├─ assets/ (images, icons, screenshots)
└─ README.md
```

---

## ⚙️ Setup & Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/Clerans/MC-MOBILE-WEB-Site.git
cd MC-MOBILE-WEB-Site
```

2. **Open locally**
- Open `index.html` in your browser  
  OR  
- Use VS Code Live Server:

```bash
# In VS Code, right-click index.html → Open with Live Server
```

3. **Firebase Setup**
- Replace the Firebase config values in `js/firebase-config.js` with your own.  
- Avoid committing real Firebase private keys to public repos.

---

## 🔐 Authentication
- `register.html` + `register.js` → user creation  
- `login.html` + `login.js` → user login  
- `admin-login.js` → simple admin email check  
  - ⚠️ *Not secure for production!* Must be enforced server-side.

---

## 📸 Add Screenshots
Add images and reference them like:

```markdown
![Homepage Screenshot](screenshot-home.png)
```

---

## 🚀 Deploy to GitHub Pages

1. Go to **Settings → Pages**  
2. Set:
   - Branch: **main**
   - Directory: **/** (root)
3. Wait 30–60 seconds for deployment.

---

## 👨‍💻 Author
**MICHAEL CLERANS**  
GitHub: https://github.com/Clerans

