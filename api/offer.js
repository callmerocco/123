let offerSDP = null;

export default function handler(req, res) {
  if (req.method === 'POST') {
    offerSDP = req.body.sdp || offerSDP;
    return res.status(200).json({ sdp: offerSDP });
  } else {
    return res.status(200).json({ sdp: offerSDP });
  }
}
