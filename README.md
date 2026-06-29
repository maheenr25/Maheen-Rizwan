# Maheen Rizwan Professional Dashboard Website

This is a pastel, professional, GitHub Pages-ready personal dashboard website.

## Included files

- `index.html`
- `style.css`
- `script.js`
- `README.md`

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload these files to the root folder:
   - `index.html`
   - `style.css`
   - `script.js`
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
5. Save.

## How to add your profile image later

1. Create a folder called:

```text
assets
```

2. Add your image inside it. Example:

```text
assets/maheen-profile.jpg
```

3. Open `index.html`.

4. Find this part:

```html
<div class="photo-placeholder">MR</div>
```

5. Replace it with:

```html
<img src="assets/maheen-profile.jpg" alt="Maheen Rizwan profile photo" class="profile-photo" />
```

6. Save and upload again.

## What to edit

You can easily edit:

- Intro paragraph
- Project descriptions
- Experience text
- Contact details
- GitHub links
- LinkedIn link
- Skills
- Colours in `style.css`

## Main colour variables

Open `style.css` and edit:

```css
--primary: #c46aa5;
--secondary: #8b7ed8;
--rose: #ffd9ea;
--lavender: #eee8ff;
--mint: #c9efe6;
```
