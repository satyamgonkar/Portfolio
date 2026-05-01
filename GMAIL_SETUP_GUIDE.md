# 📧 How to Connect Gmail Email Service to EmailJS

## Overview
This guide will walk you through connecting your Gmail account to EmailJS so your portfolio contact form can send emails directly to your inbox.

## Prerequisites
- EmailJS account (free at https://www.emailjs.com/)
- Gmail account (the one you want to receive emails)
- 5 minutes of time

---

## Step 1: Log into EmailJS

1. Go to https://www.emailjs.com/
2. Click **"Sign In"** (top right corner)
3. Log in with your Google, GitHub, or EmailJS account
4. You'll be taken to your **Dashboard**

---

## Step 2: Add Gmail Service

1. In the left sidebar, click **"Services"**
   ![Services menu location]

2. Click the **"Add Service"** button (green, top right)
   ![Add Service button]

3. You'll see a list of email providers. Look for **"Google Mail"** or **"Gmail"** and click it
   ![Select Gmail option]

4. A popup will appear asking you to **"Sign in with Google"**
   - Click the Google sign-in button
   - Select the Google account that matches your Gmail
   - Grant permissions when prompted

5. EmailJS will now try to connect to your Gmail

---

## Step 3: Authorize the Connection ⚠️

### Important Security Note
EmailJS needs permission to send emails on your behalf. This is safe and standard.

When you click to connect Gmail, you'll see a Google permissions screen:

```
EmailJS is asking for permission to:
✓ View and manage your Gmail settings
✓ Send email as you
✓ View your email address
```

**What this means:**
- EmailJS can send emails from your Gmail account
- EmailJS CANNOT read your existing emails
- EmailJS CANNOT change your password
- EmailJS CANNOT access other Google services

### If You See an Error

**Error: "App isn't verified"**
This happens because EmailJS is requesting sensitive permissions.

**To fix:**
1. Click **"Advanced"** at the bottom
2. Click **"Go to EmailJS (unsafe)"**
3. Click **"Allow"** to confirm

**Why this is safe:**
- EmailJS is a legitimate service (100k+ users)
- They only use the permission to send emails
- You can revoke access anytime

### Alternative: Use App Password (More Secure)

If you don't want to grant full permissions:

1. Enable 2-Step Verification in your Google Account
   - Go to https://myaccount.google.com/security
   - Turn on "2-Step Verification"

2. Create an App Password
   - In Security settings, find "App passwords"
   - Select "Mail" as the app
   - Select your device
   - Google will generate a 16-character password

3. In EmailJS Services:
   - Choose **"SMTP"** instead of Gmail
   - Server: smtp.gmail.com
   - Port: 587 (TLS) or 465 (SSL)
   - Username: your full Gmail address
   - Password: The 16-character app password

---

## Step 4: Configure Email Settings

After connecting, you'll be prompted to configure the service:

### Required Fields

1. **Service Name**
   - Enter: "Portfolio Email" or "Portfolio Gmail"
   - This is just for your reference

2. **From Email**
   - Enter: yourname@gmail.com
   - This is the email that will appear as the sender

3. **From Name**
   - Enter: "Satyam Gonkar" or similar
   - This is the name that will appear as the sender

4. **Reply-To** (Optional)
   - You can set this to: yourname@gmail.com
   - Or leave blank (will use From Email)

### Optional Settings

- **Priority**: Normal (default)
- **CC**: Add other emails to receive copies
- **BCC**: Add hidden recipients

Click **"Save"** when done.

---

## Step 5: Verify Connection ✅

Look for these signs of success:

1. **Green Checkmark** ✅
   - Your service should show a green checkmark
   - In the Services list, you'll see "Connected" status

2. **Service Name**
   - You should see "Portfolio Email" (or your chosen name)
   - Listed in your Services

3. **Test Email**
   - Click the three dots (⋮) next to your service
   - Select "Send test email"
   - Check your Gmail inbox for the test

---

## Step 6: Create Email Template

Now that Gmail is connected, create the template for your portfolio:

1. In the left sidebar, click **"Email Templates"**

2. Click **"Add New Template"** (green button)

3. Select your Gmail service from the dropdown

4. Name it: **"Portfolio Contact Form"**

5. In the email body, paste this template:

```
📬 New Message from Portfolio Website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent at: {{timestamp}}
Reply to: {{reply_to}}
```

6. Click **"Save"**

---

## Step 7: Get Your Credentials

You'll need 3 IDs for your contact form:

### 1. User ID
- Click your profile icon (top right)
- Select **"Account"**
- Look for **"User ID"** (starts with "user_")
- Copy it: `user_1234567890abcdef12345678`

### 2. Service ID
- Go to **"Services"** in sidebar
- Click your Gmail service
- Look for **"Service ID"** (starts with "service_")
- Copy it: `service_abcdefghijklmnopqrstuv`

### 3. Template ID
- Go to **"Email Templates"**
- Click your Portfolio template
- Look for **"Template ID"** (starts with "template_")
- Copy all three

---

## Step 8: Update Your Contact Form

Now update your portfolio's contact.html:

### Line 168 - Initialize EmailJS
```javascript
// Change this:
emailjs.init("YOUR_EMAILJS_USER_ID");

// To this (use YOUR User ID):
emailjs.init("user_1234567890abcdef12345678");
```

### Line 211 - Configure Send Function
```javascript
// Change this:
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)

// To this (use YOUR IDs):
emailjs.send('service_abcdefghijklmnopqrstuv', 'template_xyz123', templateParams)
```

---

## Step 9: Test Your Setup

### Test 1: Local Testing
1. Open contact.html in your browser
2. Fill out the form:
   - Name: "Test User"
   - Email: your@gmail.com
   - Topic: "Testing"
   - Message: "This is a test"
3. Click **"Send Message"**
4. Watch for success message
5. Check your Gmail inbox

### Test 2: Verify Delivery
- You should receive the email within 10-30 seconds
- Check spam folder if you don't see it
- The email should show you as the sender (FROM field)

### Test 3: Multiple Tests
- Try different topics
- Test with your actual email
- Test with different names

---

## Troubleshooting Gmail Connection

### Issue: "Failed to send email"
**Solutions:**
1. Check Gmail connection status (green checkmark?)
2. Re-authorize the connection in EmailJS
3. Wait 1-2 minutes after connecting
4. Check Gmail spam folder

### Issue: "App isn't verified" error
**This is normal for Gmail OAuth:**
1. Click **"Advanced"** at bottom
2. Click **"Go to EmailJS (unsafe)"**
3. Click **"Allow"**
4. This is safe - EmailJS only sends emails

### Issue: Emails going to spam
**Fixes:**
1. Wait a few days (Gmail needs to learn your pattern)
2. Move emails from spam to inbox
3. Add yourself to contacts
4. Set up SPF records (advanced, optional)

### Issue: Connection keeps disconnecting
**Solutions:**
1. Check Google Security settings
2. Remove and re-add the service
3. Use App Password method instead (more secure)
4. Ensure you have 2FA enabled

---

## Alternative: SMTP Setup (More Secure)

If you prefer not to use OAuth:

1. In EmailJS, choose **"SMTP"** instead of Gmail

2. Enter these settings:
   - **Host:** smtp.gmail.com
   - **Port:** 587 (TLS) or 465 (SSL)
   - **User:** your.email@gmail.com
   - **Password:** Your Gmail password OR App Password

3. For App Password:
   - Enable 2FA in Google Account
   - Create App Password in Security settings
   - Use the 16-character code as password

----

## Best Practices

### ✅ DO:
- Keep your EmailJS credentials secure
- Monitor email usage in dashboard
- Set up email filters for portfolio messages
- Test regularly
- Update template as needed

### ❌ DON'T:
- Share your User ID publicly (it's okay if you do, but be aware)
- Send spam through the service
- Ignore Google security warnings
- Use for bulk email marketing

---

## Security Checklist

Before going live:
- [ ] Gmail service connected with green checkmark ✅
- [ ] Test email received successfully ✅
- [ ] Template created and saved ✅
- [ ] Credentials added to contact.html ✅
- [ ] Form tested multiple times ✅
- [ ] No console errors (F12) ✅
- [ ] Mobile version works ✅

---

## Need Help?

### EmailJS Support
- Documentation: https://emailjs.com/docs/
- Support: support@emailjs.com
- Discord: https://discord.gg/emailjs

### Gmail-Specific Issues
- Gmail Help: https://support.google.com/mail
- OAuth Issues: https://support.google.com/accounts

### Common Questions

**Q: Is this safe?**
A: Yes. EmailJS only has permission to send emails, not read them.

**Q: Can I use a different email service?**
A: Yes! EmailJS supports Outlook, Yahoo, and custom SMTP.

**Q: What if I hit the free limit?**
A: Upgrade to Basic ($5/mo) for 500 emails/month.

**Q: Can I see sent emails in my Sent folder?**
A: Usually yes, unless you enable "Save to Sent" in EmailJS settings.

---

## Quick Reference

### Gmail Service Setup Steps:
1. Login to EmailJS → Services → Add Service → Gmail
2. Sign in with Google → Allow permissions
3. Configure → Save
4. Create Template → Save
5. Get IDs (User, Service, Template)
6. Update contact.html
7. Test!

### Troubleshooting Flow:
- Can't connect? → Check Google permissions, try "unsafe" option
- Emails not sent? → Check console (F12), verify IDs
- Emails in spam? → Wait, whitelist sender
- Rate limited? → Upgrade plan or wait

---

## Success! 🎉

You've connected Gmail to EmailJS! Your portfolio contact form is ready to:
- Receive submissions automatically
- Send emails directly to your inbox
- Provide a professional user experience
- Convert visitors into opportunities

**Next:** Test it, then deploy and share your portfolio! 🚀📬✨

---

*Last Updated: May 2026*  
*Documentation Version: 1.0*  
*Tested with: EmailJS + Gmail*

---

## Additional Resources

### Video Tutorials
- Search YouTube: "EmailJS Gmail Setup Tutorial"
- Look for 2024+ videos (current version)

### Related Guides
- EMAIL_SETUP_GUIDE.md - Full EmailJS setup
- QUICK_START.md - 5-minute setup
- EmailJS Blog - Tips and updates

### Community
- EmailJS Twitter: @emailjs
- GitHub: Check examples and issues
- Stack Overflow: Tag #emailjs

---

**Good luck with your portfolio!** 🌟📧🚀