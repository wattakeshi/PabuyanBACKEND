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
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: env('GMAIL_USER'), 
          pass: env('GMAIL_PASS'), 
        },
      },
      settings: {
        defaultFrom: 'noreply@pabuyan.com',
        defaultReplyTo: 'contato@pabuyan.com',
      },
    },
  },
});