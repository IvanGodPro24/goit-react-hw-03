import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div className={css["contact-container"]}>
        <div className={css.container}>
          <FaUser />
          <p>{name}</p>
        </div>

        <div className={css.container}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>

      <button type="button" className={css["delete-btn"]} onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};

export default Contact;
