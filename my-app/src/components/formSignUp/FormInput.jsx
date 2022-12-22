/*imports*/
import { useState } from "react";
import "./formInput.css";
import useLocalStorage from "../../components/useLocalStorage";

/*creating a constant to be called upon at a later date*/
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  /*taking all the data passed through from the sign up page*/
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  /*returning the inputs for the sign up form*/
  return (
    <div className="formInputs">
      <label className="formLabel">{label}</label>
      <input
        className="formInput"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="formSpan">{errorMessage}</span>
    </div>
  );
};

/*exporting the inputs for the sign up form*/
export default FormInput;
