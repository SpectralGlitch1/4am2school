export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { code } = req.body;
  const SECRET_CODE = "v9#Tq4R!z7uL2pX8sWmE";

  if (code === SECRET_CODE) {
    return res.status(200).json({ ok: true });
  } else {
    return res.status(200).json({ ok: false });
  }
}
