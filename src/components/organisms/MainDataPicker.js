import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { connect } from "react-redux";
import { addMainInfo, addContacts } from "../../redux/actions/cvActions";

const Container = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 15px 35px rgba(50, 50, 50, 0.2);
`;

const MainDataPicker = props => {
  const [formData, setFormData] = useState({
    photo: "",
    name: "",
    surname: "",
    job: "",
    phone: "",
    email: "",
    home: ""
  });

  const handleInputChange = e => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { photo, name, surname, job, phone, email, home } = formData;

  return (
    <Container>
      <div>
        <label>
          Imię <br />
          <input
            type="text"
            name="name"
            placeholder="Jan kowalski"
            value={name}
            onChange={handleInputChange}
          ></input>
        </label>
        <br />

        <label>
          Nazwisko <br />
          <input
            type="text"
            name="surname"
            placeholder="Nazwisko"
            value={surname}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Nr telefonu <br />
          <input
            type="text"
            name="phone"
            placeholder="Nr telefonu"
            value={phone}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Adres e-mail <br />
          <input
            type="text"
            name="email"
            placeholder="Adres e-mail"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Link do portfolio <br />
          <input
            type="text"
            name="home"
            placeholder="Link do portfolio"
            value={home}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Tytuł zawodowy <br />
          <input
            type="text"
            name="job"
            placeholder="Nazwa stanowiska które reprezentujesz"
            value={job}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button
          onClick={() => {
            props.addMainInfo({ photo, name, surname, job });
            props.addContacts({ phone, email, home });
          }}
        >
          Dodaj informacje
        </button>
      </div>
    </Container>
  );
};

MainDataPicker.propTypes = {};

const mapDispatchToProps = dispatch => ({
  addMainInfo: mainInfo => dispatch(addMainInfo(mainInfo)),
  addContacts: contacts => dispatch(addContacts(contacts))
});

const mapStateToProps = state => {
  return state.mainInfo;
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDataPicker);
