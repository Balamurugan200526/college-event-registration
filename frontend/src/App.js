import Header from "./components/Header";
import EventForm from "./components/EventForm";
import ChatBot from "./components/ChatBot";
import "./App.css";

export default function App() {
  return (
    <div className="app-wrapper">
      {/* Top header */}
      <Header />

      {/* Main content wrapper */}
      <div className="main-content">
        {/* Event Form */}
        <EventForm />

        {/* Chat Section */}
        <div className="chat-section">
          {/* Old style header for ChatBot */}
          <header className="header chat-header-title">
            🤖 Chat with Event Assistant
          </header>
          <ChatBot />
        </div>
      </div>
    </div>
  );
}