// Simple in-memory signaling for WebRTC
let offerSDP = null;

export default function handler(req, res) {
  if (req.method === "POST") {
    const { sdp } = req.body;
    if (sdp) offerSDP = sdp;
    return res.status(200).json({ sdp: offerSDP });
  } else {
    // GET request → return the latest offer
    return res.status(200).json({ sdp: offerSDP });
  }
}
