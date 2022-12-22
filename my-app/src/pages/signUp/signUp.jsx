/*imports*/
import { useState } from "react";
import "./signUp.css";
import FormInput from "../../components/formSignUp/FormInput";
import Header from "../../components/header/header"
import useLocalStorage from "../../components/useLocalStorage";

/*making a sign up template*/
const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  /*default values for all but the first input*/
  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  /*the default submit constant*/
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /*the default onchange constant*/
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  /*the constant that is called the go to the feen page on button click*/
  const goToFeed = () => {
    window.location.assign('/feed')
  }

  let [value, setValue] = useLocalStorage('name','');

  return (
    <div className="SignUp">
      {/*calling upon teh header component and passing keepsocial to it*/}
      <Header title="KeepSocial"/>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <h1 className="signUpH1">Register</h1>
        <label class="formLabel">username</label>
        {/*the input for the username*/}
          <input
            class="formInput"
            name = "username"
            type = "text"
            placeholder = "Username"
            errorMessage = "Username should be 3-16 characters and shouldn't include any special character!"
            label = "Username"
            pattern = "^[A-Za-z0-9]{3,16}$"
            required = ""
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        {/*the section that calls upong the form input component to build the rest of the inputs*/}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
       {/*the constant that is called the go to the feen page on button click*/}
        <button onClick={goToFeed} className="signUpButton">Submit</button>
      </form>
    </div>
  );
};
export default SignUp;
