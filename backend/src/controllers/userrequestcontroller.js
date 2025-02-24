const UserRequest = require('../models/userrequest'); // Path to userrequest.js
const Event = require('../models/events'); // Path to events.js

exports.submitrequest = async (req, res) => {
  try {
    const { event_id, full_name, email, phone, message } = req.body;

    // Check if the event exists
    const event = await Event.findByPk(event_id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Create a new user request
    const newRequest = await UserRequest.create({
      event_id,
      full_name,
      email,
      phone,
      message,
    });

    res.status(201).json({ message: 'Request submitted successfully', request: newRequest });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};