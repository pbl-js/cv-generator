export default function validate(values) {
  const { position, company, city, start, end, description } = values;

  let errors = {
    position: "",
    company: "",
    city: "",
    start: "",
    end: "",
    description: ""
  };

  if (!position) {
    errors.position = "Pozycja jest wymagana";
  } else if (position.length < 5) {
    errors.position = "Nazwa pozycji powinna mieć minimum 5 liter";
  }

  if (!company) {
    errors.company = "Nazwa firmy jest wymagana";
  }

  if (typeof start !== Number) {
    errors.start = "Wartość musi być liczbą";
  }

  return errors;
}
