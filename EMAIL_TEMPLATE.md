# 📧 ESSENTIAL EMAIL TEMPLATE FOR PORTFOLIO

## Copy This Template to EmailJS

Go to: **Email Templates → Add New Template → Paste This**

---

## Basic Template (Simple & Clean)

```
📬 New Portfolio Message

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

---

## Professional Template (Recommended)

```
📬 New Message from Portfolio Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 SENDER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:    {{from_name}}
Email:   {{from_email}}
Subject: {{subject}}
Date:    {{timestamp}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📎 REPLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Click here to reply: mailto:{{reply_to}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 Location: Ashoka Garden, Bhopal, M.P.
⏰ Time Zone: IST (UTC +5:30)
📞 Phone: +91 74405 06686

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an automated message from Satyam's Portfolio
Website. Please do not reply to this system email.

---
Template ID: {{template_id}}
Service: {{service_id}}
```

---

## HTML Template (Styled - For Email Clients That Support HTML)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(130deg, #00e5ff, #16a34a); color: white; padding: 20px; border-radius: 8px; }
    .section { background: #f5f5f5; padding: 15px; margin: 15px 0; border-radius: 5px; }
    .label { font-weight: bold; color: #555; display: inline-block; width: 100px; }
    .message { background: white; padding: 15px; border-left: 4px solid #00e5ff; margin: 10px 0; }
    .footer { text-align: center; color: #888; font-size: 12px; margin-top: 30px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📬 New Portfolio Message</h2>
    </div>
    
    <div class="section">
      <span class="label">From:</span> {{from_name}}<br>
      <span class="label">Email:</span> {{from_email}}<br>
      <span class="label">Subject:</span> {{subject}}<br>
      <span class="label">Date:</span> {{timestamp}}
    </div>
    
    <div class="section">
      <h3>💬 Message</h3>
      <div class="message">
        {{message}}
      </div>
    </div>
    
    <div class="section">
      <p><strong>Quick Reply:</strong> <a href="mailto:{{reply_to}}">Reply to {{from_name}}</a></p>
    </div>
    
    <div class="footer">
      <p>This is an automated message from Satyam's Portfolio Website</p>
      <p>Location: Bhopal, M.P. • Phone: +91 74405 06686</p>
    </div>
  </div>
</body>
</html>
```

---

## Minimal Template (Ultra-Simple)

```
New Portfolio Contact

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

{{message}}

---
Reply: {{reply_to}}
```

---

## 🔧 Template Variables Available

Based on your form, you can use these variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Sender's full name | "John Doe" |
| `{{from_email}}` | Sender's email | "john@example.com" |
| `{{subject}}` | Selected topic | "Internship Opportunity" |
| `{{message}}` | Message content | "Hello, I'm interested..." |
| `{{reply_to}}` | Reply email address | "john@example.com" |
| `{{timestamp}}` | When sent | "2026-05-01 23:30" |

---

## 💡 Template Tips

### ✅ DO:
- Keep it simple and readable
- Include all relevant information
- Make it easy to identify sender
- Include reply information
- Add your contact details

### ❌ DON'T:
- Make it too long
- Use excessive formatting
- Forget important details
- Overcomplicate the layout

### 🎨 Customization Ideas:
- Add your portfolio URL
- Include social media links
- Add your photo/logo
- Customize colors to match brand
- Add signature

---

## 📝 Which Template Should You Use?

**Use Basic Template if:**
- You want something simple
- You check email on mobile
- You prefer plain text

**Use Professional Template if:**
- You want organized sections
- You like clear formatting
- You want to look professional

**Use HTML Template if:**
- Your email client supports HTML
- You want styled emails
- You want the best visual presentation

**Use Minimal Template if:**
- You want ultra-simple
- You prefer quick scanning
- You check on small screens

---

## 🚀 Quick Setup

### Step 1: Create Template in EmailJS

1. Go to **Email Templates** in EmailJS dashboard
2. Click **"Add New Template"**
3. Name it: **"Portfolio Contact"**
4. Paste one of the templates above
5. Click **"Save"**

### Step 2: Copy Template ID

1. After saving, look at the template
2. Copy the **Template ID** (starts with `template_`)
3. You'll need this for your code

### Step 3: Test It

1. Use a test submission
2. Check how it looks in your email
3. Adjust if needed

---

## 🎯 My Recommendation

**Use the Professional Template** - It's:
- Clean and organized
- Easy to read
- Professional looking
- Has all the info you need
- Easy to customize

---

## 📧 Example Output

With: `{{from_name}} = "John Smith"`

```
📬 New Message from Portfolio Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 SENDER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:    John Smith
Email:   john@example.com
Subject: Internship Opportunity
Date:    2026-05-01 23:30:00

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hi Satyam,

I'm interested in potential internship opportunities
at your organization. I saw your portfolio and was
impressed by your projects.

Would you be available for a brief chat next week?

Best regards,
John

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📎 REPLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Click here to reply: mailto:john@example.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 Location: Ashoka Garden, Bhopal, M.P.
⏰ Time Zone: IST (UTC +5:30)
📞 Phone: +91 74405 06686

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an automated message from Satyam's Portfolio
Website. Please do not reply to this system email.
```

---

## ✨ Bonus: Custom Template Ideas

### With Star Rating
```
How did you find my portfolio?
⭐⭐⭐⭐⭐
```

### With Budget Range
```
Budget: {{budget}} (if you add this field)
```

### With Timeline
```
Timeline: {{timeline}} (if you add this field)
```

---

## 🛠️ Adding More Fields

Want to add more fields? Update your form and template:

### In Form (HTML):
```html
<input type="text" name="budget" placeholder="Budget">
```

### In Template (EmailJS):
```
Budget: {{budget}}
```

### In Code (JavaScript):
```javascript
const budget = document.getElementById('budget').value;
// Add to templateParams object
```

---

## 📚 Template Resources

- **EmailJS Variables:** Any field in your form can be used
- **Date Format:** Use `{{timestamp}}` for automatic date
- **Conditional Logic:** EmailJS supports some logic
- **Custom Fields:** Add as many as you need

---

## 🎯 Quick Start

**Copy this right now:**

```
📬 New Portfolio Message

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

**Paste in EmailJS → Save → Done!** 🎉

---

## 📞 Need Help?

- **EmailJS Templates:** https://emailjs.com/docs/templates/
- **Template Variables:** See your form fields
- **Testing:** Always send a test email
- **Updates:** Edit template anytime

---

## 🏁 Summary

**Best Template:** Professional Template (recommended)  
**Easiest:** Basic Template  
**Fanciest:** HTML Template  
**Simplest:** Minimal Template

**My Pick:** Professional - Looks great, easy to read, professional!

--- 🎉 ---

**Ready to use!** Copy your favorite template, paste in EmailJS, and you're done! 🚀📧✨

*Template created: May 2026*