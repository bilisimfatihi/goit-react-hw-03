import styles from "./Contact.module.css";

function Contact({ contact, onDelete }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p className={styles.name}>👤{contact.name}</p>
        <p className={styles.number}>📞{contact.number}</p>
      </div>
      <button className={styles.button} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
}
export default Contact;
