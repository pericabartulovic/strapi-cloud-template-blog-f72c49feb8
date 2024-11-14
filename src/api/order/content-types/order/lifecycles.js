module.exports = {
    async afterCreate(event) {
        const { result } = event;

        // Extract the relevant information from the new entry
        const { email, imePrezime, gradDrzava } = result;

        try {
            await strapi.plugins["email"].services.email.send({
                to: "pericab35@gmail.com", // Admin's email address
                cc: "pbartul@hotmail.com",
                subject: "New Order Submitted",
                text: `A new order has been submitted:\n\nName: ${imePrezime}\nEmail: ${email}\nLocation: ${gradDrzava}`,
                html: `<p>A new order has been submitted:</p>
               <p><strong>Name:</strong> ${imePrezime}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Location:</strong> ${gradDrzava}</p>`,
            });
        } catch (error) {
            console.error("Error sending email notification:", error);
        }
    },
};
