import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <div className="card">
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}

export default App;
