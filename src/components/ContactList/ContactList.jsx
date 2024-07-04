import { useDispatch, useSelector } from "react-redux";

import Contact from "./Contact/Contact";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((elem) => {
        return (
          <li key={elem.id} className={css.contact}>
            <Contact
              contact={elem}
              onDelete={() => dispatch(deleteContact(elem.id))}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
