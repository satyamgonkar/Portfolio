# 🚀 Quick Email Setup for Portfolio

## What This Does
This setup enables your portfolio contact form to **send emails directly to your inbox** without users needing to open an email client.

## Step-by-Step Setup (5 Minutes)

### 1. Sign Up for EmailJS (Free)
- Visit: https://www.emailjs.com/
- Click "Sign Up" (use Google or email)
- Verify your email

### 2. Add Email Service
- In dashboard, click **Services** → **Add Service**
- Choose: **Gmail** (recommended) or your email provider
- Follow OAuth setup (sign in to authorize)

### 3. Create Email Template
- Click **Email Templates** → **Add New Template**
- Name: "Portfolio Contact"
- Paste this template:

```
New message from your portfolio!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

--- 
Reply to: {{reply_to}}
```

### 4. Get Your IDs
- **User ID**: Account → User ID (starts with "user_")
- **Service ID**: Services → click your service (starts with "service_")
- **Template ID**: Templates → your template (starts with "template_")

### 5. Update contact.html

Find these lines in `contact.html` (near the bottom):

```javascript
emailjs.init("YOUR_EMAILJS_USER_ID"); // ← Replace with your User ID
```

Change to:
```javascript
emailjs.init("user_YourActualUserID");
```

And find:
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

Change to:
```javascript
emailjs.send('service_YourServiceID', 'template_YourTemplateID', templateParams)
```

### 6. Test It!
1. Open `contact.html` in your browser
2. Fill out the form
3. Click "Send Message"
4. Check your email inbox

## Troubleshooting

### "Email not sending"
- Check browser console (F12) for errors
- Verify all three IDs are correct
- Ensure EmailJS script loaded (look for network errors)

### "Emails in spam"
- Add SPF records to your domain
- Ask contacts to whitelist your email

### "Rate limit exceeded"
- Free tier: 50 emails/month
- Upgrade at https://emailjs.com/pricing

## Alternative Services

If EmailJS doesn't work for you:

1. **Web3Forms** - https://web3forms.com/ (Easier)
2. **Formspree** - https://formspree.io/ (Simple)
3. **Getform** - https://getform.io/ (Good for forms)

## Cost
- **Free**: 50 emails/month
- **Basic**: $5/month (500 emails)
- **Pro**: $15/month (unlimited)

## Need Help?

1. Read EmailJS docs: https://www.emailjs.com/docs/
2. Join Discord: https://discord.gg/emailjs
3. Stack Overflow: #emailjs tag

## Security Note

Your User ID will be visible in the code (it's public anyway). The free tier limit protects you from spam. Monitor usage in your EmailJS dashboard.

---
**Setup Time:** ~5 minutes  
**Difficulty:** Beginner  
**Last Updated:** May 2026