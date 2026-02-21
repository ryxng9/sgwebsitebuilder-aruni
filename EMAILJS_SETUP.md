# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Once logged in, go to the **Email Services** section
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to the **Email Templates** section
2. Click **Create New Template**
3. Set up your template with the following variables (these match your form fields):

```
Subject: New Contact Form Submission from {{name}}

From: {{name}} ({{email}})
Company: {{company}}
Project Type: {{projectType}}
Budget Range: {{budget}}

Message:
{{projectDescription}}
```

4. You can customize the template design as you like
5. **Copy the Template ID** - you'll need this later
6. Click **Save**

## Step 4: Get Your Public Key

1. Go to **Account** (top right corner)
2. Click on **General** tab
3. Find your **Public Key** (also called User ID)
4. **Copy the Public Key** - you'll need this later

## Step 5: Install Dependencies

Run the following command in your project directory:

```bash
npm install
```

This will install the `@emailjs/browser` package that was added to your `package.json`.

## Step 6: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs from EmailJS
4. **Important**: Never commit `.env.local` to git (it's already in `.gitignore`)

## Step 7: Test the Form

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the contact page: `http://localhost:3000/contact`
3. Fill out and submit the form
4. Check your email inbox for the test submission
5. Check the browser console for any errors

## Troubleshooting

### Form not sending emails

1. **Check the browser console** for error messages
2. **Verify your credentials** in `.env.local` are correct
3. **Check EmailJS dashboard** to see if the service is active
4. **Email service limits**: Free tier has 200 emails/month limit

### Template variables not showing

1. Make sure the template variable names match exactly:
   - `{{name}}`
   - `{{email}}`
   - `{{company}}`
   - `{{projectType}}`
   - `{{budget}}`
   - `{{projectDescription}}`

2. The form field `name` attributes must match these variable names

### Emails going to spam

1. Set up a proper "From" email in your EmailJS template
2. Consider using a custom domain email instead of Gmail
3. Add SPF/DKIM records if using a custom domain

## Form Field Mapping

The contact form fields are automatically mapped to EmailJS template variables:

| Form Field | EmailJS Variable |
|------------|------------------|
| Name | `{{name}}` |
| Email | `{{email}}` |
| Company | `{{company}}` |
| Project Type | `{{projectType}}` |
| Budget Range | `{{budget}}` |
| Project Description | `{{projectDescription}}` |

## Features Implemented

✅ Form validation (required fields)
✅ Loading state while sending
✅ Success message on successful submission
✅ Error message on failure
✅ Form reset after successful submission
✅ Disabled submit button during submission
✅ Environment variable configuration

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Dashboard: [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
