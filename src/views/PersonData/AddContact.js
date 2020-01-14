import React, { useState } from "react";
import PropTypes from "prop-types";

import Box from "../../components/atoms/Box";
import TextInput from "../../components/organisms/TextInput";
import BoxHeader from "../../components/atoms/BoxHeader";
import InfoBox from "../../components/atoms/InfoBox";

import { Phone } from "styled-icons/boxicons-solid/Phone";
import { Settings } from "styled-icons/material/Settings";

import { connect } from "react-redux";
import { addContacts } from "../../redux/actions/cvActions";

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
    <Box>
      <BoxHeader>
        <Phone />
        <h1>Dane kontaktowe</h1>
        <Settings />
      </BoxHeader>

      <InfoBox color="orange">
        Numer telefonu i adres email to podstawowe dane kontaktowe. Dodatkowym
        atutem może być również podanie strony internetowej.
      </InfoBox>

      <InfoBox color="blue">
        Nie martw się, nasza strona nie przechowuje tych danych, nigdy nie
        dostaniesz od nas żadnej wiadomości na podany adres email!
      </InfoBox>

      <TextInput label="Telefon*" placeholder="Np: 439 327 237" />

      <TextInput label="Email*" placeholder="Np: johndoe@darmowecv.pl" />
    </Box>
  );
};

AddContact.propTypes = {
  addContacts: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addContacts: contacts => dispatch(addContacts(contacts))
});

export default connect(null, mapDispatchToProps)(AddContact);
