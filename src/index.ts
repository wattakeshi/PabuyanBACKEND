export default {
  register({ strapi }) {},

  bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ['api::wishlist.wishlist'], 

      async afterCreate(event) {
        const { result } = event;
        console.log('WEBHOOK SENT!');
        if (result.publishedAt === null) {
        return;
    }
        try {
           strapi.plugin('email').service('email').send({
            to: 'pabuyanservice@gmail.com',
            from: 'pabuyanservice@gmail.com',
            subject: `🚀 New Order Received! ID: ${result.documentId.substring(0, 8)}`,
            text: `You have a new wishlist! ID: ${result.documentId}`, 
            html: `
          <div style="font-family: sans-serif; line-height: 1.5;">
            <h2 style="color: #7b1fa2;">New Wishlist at Pabuyan!</h2>
            <p>A new order has been registered in the system.</p>
            <ul>
              <li><strong>Order ID:</strong> ${result.documentId}</li>
              <li><strong>Initial Status:</strong> ${result.orderstatus || 'Pending'}</li>
            </ul>
            <p>Please log in to the admin panel to check the requested products.</p>
            <br />
            <a href="${process.env.STRAPI_ADMIN_URL || 'https://pabuyanbackend.onrender.com/'}/admin/content-manager/collection-types/api::wishlist.wishlist/${result.documentId}" 
               style="background-color: #7b1fa2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
               Open in Dashboard
            </a>
            <br />
            <br />
          </div>
        `,
          });
          console.log('E-mail sent via Bootstrap!');
        } catch (err) {
          console.error('Fail to send email:', err);
        }
      },
    });
  },
};