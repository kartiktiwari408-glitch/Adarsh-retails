export default async function handler(req, res) {
  const { email } = req.body;
  
  await fetch('https://api.ultramsg.com/instance167682/messages/chat', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `token=1on72jsfc8kneal9&to=918298827509&body=Login: ${email}`
  });
  
  res.status(200).json({ success: true });
}
