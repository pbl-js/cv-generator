import React, { useState } from "react";
import PropTypes from "prop-types";

import AddInfoTemplate from "templates/AddInfoTemplate.js";
import TextInput from "components/organisms/TextInput";
import InfoBox from "components/atoms/InfoBox";
import Header from "components/atoms/Header";

import { Phone } from "styled-icons/boxicons-solid/Phone";

import { connect } from "react-redux";
import { addContacts } from "redux/actions/cvActions";

const AddContact = ({ addContacts }) => {
  const [formData, setFormData] = useState({
    phone: "",
    email: ""
  });

  const { photo, name, surname, job } = formData;

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveData = () => {
    console.log(name);
    addContacts({ photo, name, surname, job });
  };

  return (
    <AddInfoTemplate title="Dane kontaktowe" icon={<Phone />}>
      <InfoBox color="orange">
        Numer telefonu i adres email to podstawowe dane kontaktowe. Dodatkowym
        atutem może być również podanie strony internetowej.
      </InfoBox>

      <InfoBox color="blue">
        Nie martw się, nasza strona nie przechowuje tych danych, nigdy nie
        dostaniesz od nas żadnej wiadomości na podany adres email!
      </InfoBox>

      <TextInput
        label="Telefon*"
        placeholder="Np: 439 327 237"
        onChange={handleInputChange}
      />

      <TextInput label="Email*" placeholder="Np: johndoe@darmowecv.pl" />
      <button onClick={saveData}>Zapisz</button>
    </AddInfoTemplate>
  );
};

AddContact.propTypes = {
  addContacts: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addContacts: contacts => dispatch(addContacts(contacts))
});

export default connect(null, mapDispatchToProps)(AddContact);
