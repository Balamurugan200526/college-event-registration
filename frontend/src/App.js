import Header from "./components/Header";
import EventForm from "./components/EventForm";
import ChatBot from "./components/ChatBot";
import "./App.css";

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />

      <main className="main-content">
        <EventForm />

        <section className="chat-section">
          <h2 className="chat-title">🤖 Chat with Event Assistant</h2>
          <ChatBot />
        </section>
      </main>
    </div>
  );
}