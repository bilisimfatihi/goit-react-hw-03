import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.contactlist}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact id={contact.id} contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
export default ContactList;
