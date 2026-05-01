# 🚀 QUICK START GUIDE: Email Configuration for Portfolio

## ⏱️ Time Required: 5 Minutes

## Step 1: Create EmailJS Account (2 minutes)

1. Visit https://www.emailjs.com/
2. Click **"Sign Up"** (top right)
3. Choose your preferred method:
   - Google (fastest)
   - GitHub
   - Email + Password
4. Verify your email address
5. Log into your dashboard

## Step 2: Add Email Service (1 minute)

1. In dashboard, click **"Services"** (left menu)
2. Click **"Add Service"** (green button)
3. Select your provider:
   - **Gmail** (recommended - easy setup)
   - **Outlook**
   - **SMTP** (any custom email)
4. Follow the connection steps
5. Name it "Portfolio Email" or similar
6. Click **"Save"**

## Step 3: Create Email Template (1 minute)

1. Click **"Email Templates"** (left menu)
2. Click **"Add New Template"** (green button)
3. Select the service you just created
4. Name: **"Portfolio Contact Form"**
5. Template Content - paste this:

```
📬 New Message from Portfolio!

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

## Step 4: Copy Your Credentials (30 seconds)

You need 3 IDs (they all start with codes):

1. **User ID** → Account → User ID (look for "user_...")
2. **Service ID** → Services → click your service (look for "service_...")
3. **Template ID** → Email Templates → your template (look for "template_...")

**Example:**
```
User ID:     user_1234567890abcdef
Service ID:  service_0987654321zyx
Template ID: template_abcdef123456
```

## Step 5: Update Your Code (1 minute)

### Edit `contact.html`

Find these lines near the bottom (~line 168):

```javascript
emailjs.init("YOUR_EMAILJS_USER_ID");
```

Replace with YOUR User ID:

```javascript
emailjs.init("user_1234567890abcdef");
```

Find line 211:

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

Replace with YOUR IDs:

```javascript
emailjs.send('service_0987654321zyx', 'template_abcdef123456', templateParams)
```

### ✅ Save the file!

## Step 6: Test It! (30 seconds)

1. Open `contact.html` in your browser
2. Fill out the form:
   - First Name: Test
   - Email: your@email.com
   - Topic: Testing
   - Message: "This is a test message"
3. Click **"Send Message"**
4. Watch for:
   - Button changes to "Sending..." with spinner
   - Then "✓ Message Sent!" in green
5. Check your email inbox

## 🎉 Success!

If you received the email, you're all set! 

If not, check the troubleshooting below.

---

## 🚨 Troubleshooting

### Issue: "EmailJS is not defined" error
**Solution:** Check your script tag order
```html
<!-- Must be in this order -->
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script src="main.js"></script>
```

### Issue: Emails going to spam
**Solutions:**
1. Check spam folder
2. Add SPF record to your domain (advanced)
3. Ask recipients to whitelist your email
4. Use a more professional "From" name in template

### Issue: "Authentication failed" error
**Solutions:**
1. Re-check your IDs (copy-paste carefully)
2. Ensure EmailJS service is connected (green checkmark)
3. Try logging out/in to EmailJS

### Issue: Form not submitting
**Solutions:**
1. Open browser console (F12)
2. Check for red error messages
3. Verify all fields have `required` attribute if needed
4. Ensure no JavaScript errors

---

## 💰 Pricing Reminder

- **Free:** 50 emails/month ✅ (get started)
- **Basic:** $5/month (500 emails)
- **Pro:** $15/month (unlimited)

For a portfolio, 50/month is usually enough.

---

## 📞 Need More Help?

**Resources:**
- EmailJS Documentation: https://emailjs.com/docs/
- Video Tutorial: Search "EmailJS setup tutorial" on YouTube
- EmailJS Discord: https://discord.gg/emailjs

**Common Issues:**
- Check Console (F12) - Look for red errors
- Verify IDs - They must match exactly
- Test Connection - Use EmailJS test feature
- Check Spam - Sometimes emails hide there

---

## ✅ Checklist Before Going Live

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Email template created
- [ ] User ID copied to code
- [ ] Service ID copied to code
- [ ] Template ID copied to code
- [ ] Tested with real submission
- [ ] Received test email
- [ ] Checked for errors in console
- [ ] Deployed to GitHub Pages

## 🎬 What's Next?

1. Deploy to GitHub Pages
2. Share your portfolio link
3. Watch the emails roll in! 📬

---

**Setup Time:** ~5 minutes  
**Difficulty:** ⭐ Easy (1/5)  
**Last Updated:** May 2026

*Good luck with your portfolio! It looks amazing!* 🌟