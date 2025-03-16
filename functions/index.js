const functions = require("firebase-functions");
const {Resend} = require("resend");
const resend = new Resend("re_BitCGhjP_F6uYAkRrHQXFdw2Z1G2gTF5K");

exports.sendEmail = functions.https.onRequest(async (req, res) => {
  try {
    const {name, email, age, phone, deviceType} = req.body;

    const {error} = await resend.emails.send({
      from: "TaPago <onboarding@resend.dev>",
      to: "leoctaschin@gmail.com",
      subject: "Nova Inscrição TaPago",
      html: `
        <h2>Nova inscrição recebida!</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Idade:</strong> ${age}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Dispositivo:</strong> ${deviceType}</p>
      `,
    });

    if (error) {
      res.status(500).json({error: "Erro ao enviar email"});
      return;
    }

    res.status(200).json({message: "Email enviado com sucesso!"});
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({error: "Erro ao processar requisição"});
  }
});
