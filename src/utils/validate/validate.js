export default function validateInfo(value, type) {
  let error = "";
  switch (type) {
    case "text": {
      if (!value.trim()) {
        error = "Field Required";
      }
      break;
    }

    case "email": {
      if (!value.trim()) {
        error = "Email Required";
      }
      break;
    }

    case "phone": {
      if (!value.trim()) {
        error = "Phone Required";
      }
      break;
    }

    case "url": {
      if (!value.trim()) {
        error = "Url Required";
      }
      break;
    }
    default:
      break;
  }

  return error;
}
