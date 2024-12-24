import css from "./ContactList.module.css";
import Contact from "./Contact";

const ContactList = ({ contact, onDelete }) => {
  return (
    <ul className={css.list}>
      {contact.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <Contact id={id} name={name} number={number} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
