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
  const info = await strapi.plugin('email').service('email').send({
    to: 'pabuyanservice@gmail.com',
    from: 'pabuyanservice@gmail.com',
    subject: 'New Order - Pabuyan',
    text: `ID: ${result.documentId}`,
  });
  console.log('✅ E-MAIL ENTREGUE AO SERVIDOR SMTP:', info);
} catch (err) {
  console.error('❌ ERRO REAL DO GMAIL:', err.errors || err); 
}
      },
    });
  },
};