import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import { filteredContact, selectContact } from "../../redux/selectors";

const ContactList = () => {
  const contact = useSelector(selectContact);
  const filtered = useSelector(filteredContact);

  const searchContact = contact.filter((cont) =>
    cont.name.toLowerCase().includes(filtered.toLowerCase())
  );

  return (
    <>
      <ul>
        {searchContact.map((contact, index) => {
          return <Contact key={index} contact={contact} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
