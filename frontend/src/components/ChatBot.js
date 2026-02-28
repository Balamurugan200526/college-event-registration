import { useState, useRef, useEffect } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋 Welcome to the Event Assistant!" }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const questions = [
    {
      question: "Hello",
      answer: "Hi there 👋 How can I help you today?"
    },
    {
      question: "What is the event name?",
      answer: "The event name is Tech Fest 2026."
    },
    {
      question: "What is the event date?",
      answer: "The event will be held on March 10, 2026."
    },
    {
      question: "What is the event time?",
      answer: "The event starts at 9:00 AM and ends at 4:00 PM."
    },
    {
      question: "Where is the venue?",
      answer: "The event venue is Main Auditorium, ABC College."
    },
    {
      question: "Is registration free?",
      answer: "Yes ✅ Registration is completely free."
    },
    {
      question: "What is the last date to register?",
      answer: "The last date to register is March 5, 2026."
    },
    {
      question: "Who can participate?",
      answer: "All college students are eligible to participate."
    },
    {
      question: "Are there prizes?",
      answer: "Yes 🏆 Winners will receive exciting prizes."
    },
    {
      question: "Will certificates be provided?",
      answer: "Yes 🎓 Participation certificates will be given to all attendees."
    },
    {
      question: "Can I participate in multiple events?",
      answer: "Yes, you can participate in multiple events if timings do not clash."
    },
    {
      question: "Is food provided?",
      answer: "Yes 🍽 Lunch and refreshments will be provided."
    },
    {
      question: "Is accommodation available?",
      answer: "No, accommodation is not provided."
    },
    {
      question: "Is parking available?",
      answer: "Yes 🚗 Parking facilities are available inside the campus."
    },
    {
      question: "Is this an inter-college event?",
      answer: "Yes, students from different colleges can participate."
    },
    {
      question: "Will there be technical events?",
      answer: "Yes 💻 There will be technical and non-technical events."
    },
    {
      question: "How will I receive confirmation?",
      answer: "You will receive confirmation via email after registration."
    },
    {
      question: "Can I edit my registration details?",
      answer: "No, please ensure all details are correct before submitting."
    },
    {
      question: "What documents should I bring?",
      answer: "Please bring your college ID card for verification."
    },
    {
      question: "Is on-spot registration allowed?",
      answer: "No ❌ Only pre-registered participants are allowed."
    },
    {
      question: "What events are available?",
      answer: "We have coding, paper presentation, quiz, gaming, and cultural events."
    },
    {
      question: "How to register?",
      answer: "Fill out the registration form available on this website."
    },
    {
      question: "Whom to contact?",
      answer: "Contact: 9876543210 or email: event@abccollege.com"
    },
    {
      question: "Thank you",
      answer: "You're welcome 😊 Happy to help! See you at the event."
    }
  ];

  const handleQuestionClick = (q) => {
    setMessages(prev => [
      ...prev,
      { sender: "user", text: q.question },
      { sender: "bot", text: q.answer }
    ]);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <marquee behavior="scroll" direction="left" scrollamount="12">
          Chat with Event Assistant
        </marquee>
      </div>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="question-buttons">
        {questions.map((q, i) => (
          <button key={i} onClick={() => handleQuestionClick(q)}>
            {q.question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatBot;