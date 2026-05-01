# 🎯 EXACT INSTRUCTIONS - Where to Paste EmailJS IDs

## ⚠️ CORRECT FILE

**File to edit:** `/tmp/portfolio/contact.html`

**DO NOT edit:** any other HTML files

---

## 📍 EXACT LOCATIONS (Verified)

### Location 1: Line 167

**Current Code (Line 167):**
```javascript
emailjs.init("YOUR_EMAILJS_USER_ID");
```

**Change To:**
```javascript
emailjs.init("user_your_actual_user_id");
```

**Example:**
```javascript
emailjs.init("user_1234567890abcdef12345678");
```

---

### Location 2: Line 208

**Current Code (Line 208):**
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**Change To:**
```javascript
emailjs.send('service_your_service_id', 'template_your_template_id', templateParams)
```

**Example:**
```javascript
emailjs.send('service_abcdefghijklmnopqrstuv', 'template_xyz123abc', templateParams)
```

---

## 🔍 HOW TO GET YOUR IDs

### 1. User ID (for Line 167)

1. Go to https://dashboard.emailjs.com/
2. Click your profile icon (top right)
3. Click **"Account"**
4. Find **"User ID"**
5. Copy it (starts with `user_`)

**Example:** `user_1234567890abcdef12345678`

---

### 2. Service ID (for Line 208)

1. In dashboard, click **"Services"** (left menu)
2. Click your **Gmail** service
3. Find **"Service ID"**
4. Copy it (starts with `service_`)

**Example:** `service_abcdefghijklmnopqrstuv`

---

### 3. Template ID (for Line 208)

1. In dashboard, click **"Email Templates"** (left menu)
2. Click your **"Portfolio Contact"** template
3. Find **"Template ID"**
4. Copy it (starts with `template_`)

**Example:** `template_xyz123abc`

---

## ✏️ STEP-BY-STEP EDITING

### Step 1: Open the File

```bash
nano /tmp/portfolio/contact.html
```

Or use any text editor (VS Code, Notepad++, etc.)

---

### Step 2: Make the Changes

**Change 1 (Line 167):**
```diff
- emailjs.init("YOUR_EMAILJS_USER_ID");
+ emailjs.init("user_1234567890abcdef12345678");
```

**Change 2 (Line 208):**
```diff
- emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
+ emailjs.send('service_abcdefghijklmnopqrstuv', 'template_xyz123abc', templateParams)
```

---

### Step 3: Save the File

- **nano:** Press `Ctrl+O`, `Enter`, then `Ctrl+X`
- **VS Code:** Press `Ctrl+S`
- **Notepad++:** Press `Ctrl+S`

---

### Step 4: Verify Your Changes

Search for any remaining placeholders:

```bash
grep -n "YOUR_" /tmp/portfolio/contact.html
```

**If nothing appears → All changes made correctly! ✅**

**If something appears → You missed a replacement!**

---

## ✅ QUICK REFERENCE

| Line | What to Replace | With What |
|------|----------------|-----------|
| 167 | `YOUR_EMAILJS_USER_ID` | Your User ID (from Account) |
| 208 | `YOUR_SERVICE_ID` | Your Service ID (from Services) |
| 208 | `YOUR_TEMPLATE_ID` | Your Template ID (from Templates) |

---

## 📋 EXAMPLE - Complete Edit

### Before (Lines 167 & 208):

```javascript
// Line 167
emailjs.init("YOUR_EMAILJS_USER_ID");

// Line 208
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

### After (With Real IDs):

```javascript
// Line 167
emailjs.init("user_1234567890abcdef12345678");

// Line 208
emailjs.send('service_abcdefghijklmnopqrstuv', 'template_xyz123abc', templateParams)
```

---

## 🚀 TESTING

### After Editing:

1. Open `contact.html` in your browser
2. Fill out the form
3. Click "Send Message"
4. Check your email inbox
5. You should receive the message! ✉️

---

## 💡 IMPORTANT NOTES

### ✅ DO:
- Keep the quotes around IDs: `"user_xxx"` not `user_xxx`
- Verify all 3 replacements
- Test after editing

### ❌ DON'T:
- Edit other HTML files
- Remove the quotes
- Forget to save
- Copy extra characters

### 🔒 Security:
- Your IDs will be visible in the code (normal)
- This is how EmailJS works
- Free tier (50 emails/month) protects against spam
- Monitor usage in EmailJS dashboard

---

## 📄 DOCUMENTATION

- **GMAIL_SETUP_GUIDE.md** - Connect Gmail to EmailJS
- **QUICK_START.md** - Quick setup guide
- **EMAIL_TEMPLATE.md** - Email templates
- **README.md** - Project overview

---

## 🎯 SUMMARY

**File to edit:** `/tmp/portfolio/contact.html`  
**Lines to change:** 167 and 208  
**Number of replacements:** 3  
**Time required:** 2 minutes  

**After editing:** Test the form and start receiving emails! 🎉📧

---

*Last updated: May 2026*  
*Status: Production Ready* ✅

