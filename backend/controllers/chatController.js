export const chatWithBot = (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  const text = message.toLowerCase();
  let reply = "Sorry, I didn't understand that. Can you rephrase?";

  // Greetings
  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    reply = "Hello! I'm your assistant bot. How can I help you today?";
  }

  // Event info
  else if (text.includes("event") && text.includes("what")) {
    reply = "We have the following events:\n\n" +
            "🎯 Technical Events:\n- Coding Workshop\n- Hackathon\n- Robotics Challenge\n- Paper Presentation\n\n" +
            "🎨 Non-Technical Events:\n- Tech Quiz\n- Treasure Hunt\n- Cultural Dance\n- Music Competition";
  }
  else if (text.includes("when") && text.includes("event")) {
    reply = "Here are the event dates:\n- Tech Fest: Feb 20, 10:00 AM - 5:00 PM\n- Coding Workshop: Feb 25, 9:00 AM - 4:00 PM\n- Hackathon: Feb 28, 9:00 AM - 6:00 PM";
  }

  // Registration
  else if (text.includes("register") || text.includes("signup")) {
    reply = "You can register for events via /api/register endpoint. The registration fee is ₹500 for each event.";
  }
  else if (text.includes("amount") || text.includes("fee")) {
    reply = "The registration fee for each event is ₹500.";
  }

  // Bus service
  else if (text.includes("bus") || text.includes("transport") || text.includes("pickup")) {
    reply = "Yes, we provide bus services from the following locations:\n" +
            "- Chidambaram (Bus 101)\n" +
            "- Sirkali (Bus 102)\n" +
            "- Mayiladuthurai (Bus 103)\n" +
            "- Cuddalore (Bus 104)\n" +
            "- Puthur (Bus 105)\n" +
            "- Kollidam (Bus 106)\n\n" +
            "You need to register first to use the bus service.";
  }

  // Food
  else if (text.includes("food") || text.includes("meal") || text.includes("lunch")) {
    reply = "Yes, food and refreshments will be provided to all participants during the events.";
  }

  // Contact / Help
  else if (text.includes("contact") || text.includes("help")) {
    reply = "You can contact us at admin@college.edu or call +91-9876543210 for assistance.";
  }

  // Location / Venue
  else if (text.includes("location") || text.includes("venue")) {
    reply = "All events will take place at the Main Auditorium, College Campus, North Street, Tamil Nadu.";
  }

  // Schedule / Timing
  else if (text.includes("schedule") || text.includes("timing") || text.includes("duration")) {
    reply = "Tech Fest: 10:00 AM - 5:00 PM on Feb 20\nCoding Workshop: 9:00 AM - 4:00 PM on Feb 25\nHackathon: 9:00 AM - 6:00 PM on Feb 28";
  }

  // Organizer
  else if (text.includes("who") && text.includes("organize")) {
    reply = "The events are organized by the College Cultural and Tech Committee.";
  }

  // Rules / Guidelines
  else if (text.includes("rules") || text.includes("guidelines")) {
    reply = "Participants must bring their ID card, follow the schedule, and adhere to event rules. No outside food or beverages are allowed.";
  }

  // Paper presentation specific
  else if (text.includes("paper") && text.includes("presentation")) {
    reply = "Paper Presentation Event: Submit your papers by Feb 15. Each paper should be max 5 pages. Presentation date: Feb 25.";
  }

  res.json({ reply });
};
