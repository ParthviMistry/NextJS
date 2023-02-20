import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "parthvimistry48@gmail.com",
      from: req.body.email,
      subject: `${req.body.subject}`,
      html: `
          <div>
            <div>Hey!</div>
            <div>Here is your shopping list!</div>
            <br/>
            <div>
                ${req.body.cartItem?.map(
                  (i) =>
                    `<div>Product Id: ${i.data.id}</div>
                    <div>Product Name: ${i.data.name}</div>
                    <div>Product Price: ${i.data.price}</div>
                    <div>Product Quantity: ${i.quantity}</div>`
                )}
            </div>
          </div>
            `,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
