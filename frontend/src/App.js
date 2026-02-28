import Header from "./components/Header";
import EventForm from "./components/EventForm";
import ChatBot from "./components/ChatBot";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <EventForm />
      <header className="header">
      <h1 style={{ textAlign: "center" }}>🤖 Chat with Event Assistant</h1>
      </header>
      <ChatBot />
    </div>
  );
}
