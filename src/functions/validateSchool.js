export default function validate(values) {
  const {
    educationLevel,
    schoolName,
    specialization,
    start,
    end,
    current
  } = values;

  let errors = {};

  if (!schoolName) {
    errors.schoolName = "Nazwa szkoły jest wymagana";
  }

  if (!specialization) {
    errors.specialization = "Kierunek jest wymagany";
  }

  if (!start) {
    errors.start = "Data rozpoczęcia jest wymagana";
  }

  if (!end) {
    errors.end = "Data zakończenia jest wymagana";
  }

  return errors;
}
