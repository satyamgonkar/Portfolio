/* ============================================================
   EMAILJS CONFIGURATION - Portfolio Contact Form
   ==================================================== */

// EmailJS User ID - Get from: https://dashboard.emailjs.com/account
const EMAILJS_USER_ID = "AmyD0iR5vMTu2djlA"; // ✅ CONFIGURED

// EmailJS Service ID - From your Services page
const EMAILJS_SERVICE_ID = "service_0lgc3c2"; // ✅ CONFIGURED  

// EmailJS Template ID - From your Templates page
const EMAILJS_TEMPLATE_ID = "template_d62t139"; // ✅ CONFIGURED

// ============================================================
// DO NOT EDIT BELOW THIS LINE (unless you know what you're doing)
// ============================================================

// Form success/error message settings
const FORM_CONFIG = {
  successMessage: "✅ Message sent successfully! I've received your email and will reply within 24 hours.",
  errorMessage: "❌ Failed to send message. Please try again or email me directly.",
  buttonLoadingText: "Sending…",
  buttonSuccessText: "✓ Message Sent!",
  buttonFailedText: "✗ Failed to Send",
  resetDelay: 3000 // milliseconds
};

// Email template parameters mapping
function getTemplateParams(formData) {
  return {
    from_name: formData.fullName,
    from_email: formData.email,
    subject: formData.subject || "No topic selected",
    message: formData.message,
    to_name: 'Satyam',
    reply_to: formData.email,
    phone: formData.phone || 'Not provided',
    timestamp: new Date().toLocaleString()
  };
}

// Form validation rules
const VALIDATION = {
  requiredFields: ['fname', 'email', 'message'],
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  maxMessageLength: 1000,
  maxNameLength: 100
};

/* ============================================================
   CONFIGURATION STATUS: ✅ ALL SET!
   
   ✅ User ID:    AmyD0iR5vMTu2djlA
   ✅ Service ID: service_0lgc3c2
   ✅ Template ID: template_d62t139
   
   READY TO TEST! 🚀
   ============================================================ */