import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import fetch from 'node-fetch';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.render('index', { currentRoute: '/' });
});

app.get('/services', (req, res) => {
  res.render('services', { currentRoute: '/services' });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { currentRoute: '/portfolio' });
});

app.get('/about', (req, res) => {
  res.render('about', { currentRoute: '/about' });
});

app.get('/blog', (req, res) => {
  res.render('blog', { currentRoute: '/blog' });
});

app.get('/contact', (req, res) => {
  const success = req.query.success;
  const error = req.query.error;
  res.render('contact', { currentRoute: '/contact', success, error });
});

app.post('/contact', async (req, res) => {
  const { name, email, message, 'g-recaptcha-response': recaptchaResponse } = req.body;

  if (!recaptchaResponse) {
    return res.redirect('/contact?error=captcha_missing');
  }

  try {
    // Verify reCAPTCHA
    const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
    const recaptchaParams = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY || 'placeholder_secret',
      response: recaptchaResponse,
    });

    const verifyResponse = await fetch(`${recaptchaVerifyUrl}?${recaptchaParams.toString()}`, {
      method: 'POST',
    });
    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return res.redirect('/contact?error=captcha_failed');
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Use a default from address for dev
      to: ['delivered@resend.dev'], // Send to resend default or an admin email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.redirect('/contact?error=email_failed');
    }

    res.redirect('/contact?success=true');
  } catch (error) {
    console.error('Server error processing contact form:', error);
    res.redirect('/contact?error=server_error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
