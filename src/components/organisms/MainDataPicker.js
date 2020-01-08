import React, { useState, useEffect } from "react";
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

  const { photo, name, surname, job, phone, email, home } = formData;

  useEffect(() => {
    setFormData({
      name: localStorage.getItem("name"),
      surname: localStorage.getItem("surname"),
      job: localStorage.getItem("job"),
      phone: localStorage.getItem("phone"),
      email: localStorage.getItem("email"),
      home: localStorage.getItem("home")
    });
  }, []);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    localStorage.setItem([e.target.name], e.target.value);
  };

  const saveData = () => {
    props.addMainInfo({ photo, name, surname, job });
    const contactsArray = [
      {
        id: 0,
        type: "phone",
        body: phone
      },
      {
        id: 1,
        type: "email",
        body: email
      },
      {
        id: 2,
        type: "home",
        body: home
      }
    ];
    props.addContacts(contactsArray);
  };

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

        <button onClick={saveData}>Dodaj informacje</button>
      </div>
    </Container>
  );
};

MainDataPicker.propTypes = {};

const mapDispatchToProps = dispatch => ({
  addMainInfo: mainInfo => dispatch(addMainInfo(mainInfo)),
  addContacts: contacts => dispatch(addContacts(contacts))
});

export default connect(null, mapDispatchToProps)(MainDataPicker);
