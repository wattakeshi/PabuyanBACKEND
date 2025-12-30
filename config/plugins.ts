module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },


email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('EMAIL_SMTP_HOST', 'smtp.gmail.com'),
        port: 587, // Mude para 587
        auth: {
          user: env('GMAIL_USER'),
          pass: env('GMAIL_PASS'),
        },
        secure: false, // 'false' para porta 587, 'true' para 465
        rejectUnauthorized: false, // Ajuda a evitar erros de certificado em servidores de hospedagem
      },
      settings: {
        defaultFrom: env('GMAIL_USER'),
        defaultReplyTo: env('GMAIL_USER'),
      },
    },
  },
});