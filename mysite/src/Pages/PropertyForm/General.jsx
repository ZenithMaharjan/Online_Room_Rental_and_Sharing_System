import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";

export default function General(props) {
  const [firstname, setFirstName] = useState(
    props.info.firstname ? props.info.firstname : ""
  );
  const [lastname, setLastName] = useState(
    props.info.lastname ? props.info.lastname : ""
  );
  const [gender, setGender] = useState();
  const [email, setEmail] = useState(props.info.email ? props.info.email : "");
  const [phoneno, setPhoneno] = useState(
    props.info.phoneno ? props.info.phoneno : ""
  );

  const property = {
    firstname: firstname,
    lastname: lastname,
    gender: gender,
    email: email,
    phoneno: phoneno,
  };
  props.property(property);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        General informations
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={props.info.firstname}
            onChange={(event) => setFirstName(event.target.value)}
          />
          {props.check && props.info.firstname.length < 3 && (
            <ErrorMessage message="Firstname should be atleast 3 letters !!!" />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            defaultValue={props.info.lastname}
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(event) => setLastName(event.target.value)}
          />
          {props.check && props.info.lastname.length < 3 && (
            <ErrorMessage message="Lastname should be atleast 3 letters !!!" />
          )}
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(event) => setGender(event.target.value)}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            type="email"
            defaultValue={props.info.email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={(event) => setEmail(event.target.value)}
            label="Enter your email"
            fullWidth
            variant="standard"
            inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" }}
          />
          {props.check && !props.info.email.includes("@") && (
            <ErrorMessage message="Incorrect Email !!!" />
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="phone no"
            name="phone no"
            type="tel"
            defaultValue={props.info.phoneno}
            label="Enter your Phone Number"
            fullWidth
            variant="standard"
            onChange={(event) => setPhoneno(event.target.value)}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
          {props.check && <ErrorMessage message="Incorrect Phone Number !!!" />}
        </Grid>
      </Grid>
    </div>
  );
}
