import React, { useState } from "react";
import PropTypes from "prop-types";

import AddInfoTemplate from "templates/AddInfoTemplate.js";
import TextInput from "components/organisms/TextInput";
import InfoBox from "components/atoms/InfoBox";

import { Phone } from "styled-icons/boxicons-solid/Phone";

import { SET_CONTACT } from "actions/actionTypes";

const AddContact = ({
  contact = {
    phone: "",
    email: "",
    website: ""
  },
  dispatch
}) => {
  const [contactValue, setContactValue] = useState(contact);

  const { phone, email, website } = contactValue;

  const handleBlur = e => {
    dispatch({
      type: SET_CONTACT,
      name: [e.target.name],
      value: contactValue[e.target.name]
    });
  };

  const handleChange = e => {
    setContactValue({
      ...contactValue,
      [e.target.name]: e.target.value
    });
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
        label="Telefon"
        name="phone"
        placeholder="Np: 439 327 237"
        value={phone}
        onChange={e => handleChange(e)}
        onBlur={e => handleBlur(e)}
      />

      <TextInput
        label="Email"
        name="email"
        placeholder="Np: johndoe@darmowecv.pl"
        value={email}
        onChange={e => handleChange(e)}
        onBlur={e => handleBlur(e)}
      />

      <TextInput
        label="Website"
        name="website"
        placeholder="Np: www.programowando.pl"
        value={website}
        onChange={e => handleChange(e)}
        onBlur={e => handleBlur(e)}
      />
    </AddInfoTemplate>
  );
};

AddContact.propTypes = {
  // addContacts: PropTypes.func.isRequired
};

export default AddContact;
