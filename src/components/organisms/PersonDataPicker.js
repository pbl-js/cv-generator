import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addMainInfo } from "../../redux/actions/cvActions";

const mainInfo = {
  photo: "dasdasd",
  name: "Adam",
  surname: "Krasicki",
  job: "Senior JavaScript developer"
};

const PersonDataPicker = props => {
  return (
    <div>
      <label>
        Imię <br />
        <input type="text" placeholder="Jan kowalski" />
      </label>
      <br />

      <label>
        Nazwisko <br />
        <input type="text" placeholder="Nazwisko" />
      </label>
      <br />

      <label>
        Nr telefonu <br />
        <input type="text" placeholder="Nr telefonu" />
      </label>
      <br />

      <label>
        Adres e-mail <br />
        <input type="text" placeholder="Adres e-mail" />
      </label>
      <br />

      <label>
        Link do portfolio <br />
        <input type="text" placeholder="Link do portfolio" />
      </label>
      <br />

      <label>
        Tytuł zawodowy <br />
        <input
          type="text"
          placeholder="Nazwa stanowiska które reprezentujesz"
        />
      </label>
      <br />

      <button onClick={() => props.addMainInfo(mainInfo)}>
        Dodaj informacje
      </button>
    </div>
  );
};

PersonDataPicker.propTypes = {};

const mapDispatchToProps = dispatch => ({
  addMainInfo: mainInfo => dispatch(addMainInfo(mainInfo))
});

export default connect(null, mapDispatchToProps)(PersonDataPicker);
