# 📧 Email Setup Guide for Portfolio Contact Form

## Overview
This guide will help you set up automatic email sending from your portfolio contact form using **EmailJS**, a free service that allows you to send emails directly from static websites without a backend server.

## Why EmailJS?
- ✅ No backend server required
- ✅ Free tier available (up to 50 emails/month)
- ✅ Works with GitHub Pages and static sites
- ✅ Easy to set up
- ✅ Supports Gmail, Outlook, and custom email providers

## Setup Instructions

### Step 1: Create an EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (you can use Google, GitHub, or email)
3. Verify your email address

### Step 2: Add Your Email Service
1. Log into your EmailJS dashboard: https://dashboard.emailjs.com/
2. Click on **Services** in the left sidebar
3. Click **Add Service**
4. Select your email provider:
   - **Gmail** (recommended) - requires OAuth connection
   - **Outlook** - requires OAuth connection
   - **SMTP** - use any custom email
5. Follow the prompts to connect your email account

### Step 3: Create Email Template
1. Go to **Email Templates** in the left sidebar
2. Click **Add New Template**
3. Select the service you just created
4. Name it "Portfolio Contact" or similar
5. Use this template structure:

**Template Content:**
```
New message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

--- 
Please reply to: {{reply_to}}
```

6. Click **Save**

### Step 4: Get Your Credentials
You'll need three pieces of information:

1. **User ID** (found in Account → User ID)
2. **Service ID** (found in Services → your service)
3. **Template ID** (found in Email Templates → your template)

### Step 5: Update Your Contact Form

Edit `contact.html` and replace the placeholder values:

```javascript
// In the initialization script (around line 320)
emailjs.init("YOUR_USER_ID_HERE"); // Replace with your actual User ID

// In the send function (around line 340)
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
  .then(function(response) {
    // success
  }, function(error) {
    // error
  });
```

### Step 6: Test Your Form
1. Open your contact page locally or on GitHub Pages
2. Fill out the form
3. Submit it
4. Check your email - you should receive the message!

## Alternative: Web3Forms (Simpler Setup)

If EmailJS seems complex, you can use **Web3Forms** instead:

1. Go to https://web3forms.com/
2. Create an account
3. Add your email address
4. Copy the Access Key
5. Update your form to use Web3Forms API

**Web3Forms Integration:**
```javascript
// Replace the emailjs.send() call with:
fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    access_key: 'YOUR_ACCESS_KEY',
    subject: subject || 'Portfolio Contact Form',
    from_name: fname + (lname ? ' ' + lname : ''),
    email: email,
    message: message
  })
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    // Show success
  }
});
```

## Troubleshooting

### Form Not Working?
1. Check browser console (F12) for errors
2. Verify all IDs are replaced with your actual EmailJS credentials
3. Ensure the EmailJS script is loaded before your form handler
4. Check EmailJS dashboard for failed attempts

### Emails Going to Spam?
1. Add SPF/DKIM records to your domain (if using custom domain)
2. Use a recognizable "From" name
3. Ask recipients to whitelist your email

### Rate Limiting?
- Free tier: 50 emails/month
- Upgrade to Pro for more: https://emailjs.com/pricing

## Security Considerations

⚠️ **Important:** With client-side email sending, your User ID is visible in the source code. This is why:
1. Use the free tier (limited to 50 emails/month per account)
2. Monitor your usage regularly
3. Consider upgrading if you get spam
4. You can set up email validation in your EmailJS template

## Cost
- **Free Tier:** 50 emails/month
- **Basic:** $5/month (500 emails)
- **Pro:** $15/month (unlimited)

## Support
- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Stack Overflow: Use #emailjs tag

## Quick Test

To test without setting up everything:

1. Use this **public test service ID**: `"service_6l3e5a2"` (for testing only)
2. This will send to a test inbox (not your personal email)
3. Replace with your own ID when ready

## Need Help?

If you get stuck:
1. Check the EmailJS documentation
2. Join their Discord community
3. Open an issue on GitHub
4. Contact me for help! 💬

---

**Last Updated:** May 2026
**Compatible with:** EmailJS v2.x