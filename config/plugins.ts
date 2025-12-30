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
        host: 'smtp-relay.brevo.com', // Host do Brevo
        port: 587,
        auth: {
          user: env('GMAIL_USER'), // Seu login do Brevo
          pass: env('GMAIL_PASS'), // Sua chave SMTP do Brevo
        },
      },
      settings: {
        defaultFrom: 'pabuyanservice@gmail.com', // Seu e-mail verificado no Brevo
        defaultReplyTo: 'pabuyanservice@gmail.com',
      },
    },
  },
});
