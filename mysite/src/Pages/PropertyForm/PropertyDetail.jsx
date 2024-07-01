import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { MenuItem } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import ErrorMessage from "../../Component/ErrorMessage";

export default function PropertyDetail(props) {
  const [category, setCategory] = useState(
    props.info.category ? props.info.category : ""
  );
  const [description, setDescription] = useState(
    props.info.description ? props.info.description : ""
  );
  const [roomno, setRoomno] = useState(
    props.info.roomno ? props.info.roomno : ""
  );
  const [bhk, setBhk] = useState(props.info.bhk ? props.info.bhk : "");
  const [bathno, setBathno] = useState(
    props.info.bathno ? props.info.bathno : ""
  );
  const [price, setPrice] = useState(props.info.price ? props.info.price : "");
  const [watersupply, setWatersupply] = useState();
  const [electricity, setElectricity] = useState();
  const [parking, setParking] = useState();
  const [lift, setLift] = useState();

  const property = {
    category: category,
    description: description,
    roomno: roomno,
    bhk: bhk,
    bathno: bathno,
    price: price,
    watersupply: watersupply,
    electricity: electricity,
    parking: parking,
    lift: lift,
  };

  props.property(property);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Property Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="property type"
            name="property type"
            onChange={(event) => setCategory(event.target.value)}
            defaultValue={props.info.category}
            label="Choose your Property Type"
            fullWidth
            variant="standard"
            select
          >
            <MenuItem value="Room"> Room</MenuItem>
            <MenuItem value="Flat"> Flat/Appartments</MenuItem>
            <MenuItem value="Hostel"> Hostel</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="discription"
            name="Discription"
            multiline
            defaultValue={props.info.description}
            rows={8}
            label="Description of property"
            fullWidth
            onChange={(event) => setDescription(event.target.value)}
          />
          {props.check && props.info.description === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="room no"
            name="room no"
            type="number"
            label="No of Rooms"
            defaultValue={props.info.roomno}
            fullWidth
            onChange={(event) => setRoomno(event.target.value)}
            inputProps={{ pattern: "[0-9]*", min: "1", max: "100" }}
          />
          {props.check && props.info.roomno === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="bhk"
            defaultValue={props.info.bhk}
            name="bhk"
            type="number"
            label="BHK"
            fullWidth
            onChange={(event) => setBhk(event.target.value)}
            inputProps={{ pattern: "[0-9]*", min: "0", max: "100" }}
          />
          {props.check && props.info.bhk === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="bathroom no"
            name="bathroom no"
            type="number"
            defaultValue={props.info.bathno}
            label="Bathrooms"
            fullWidth
            onChange={(event) => setBathno(event.target.value)}
            inputProps={{ pattern: "[0-9]*", min: "0", max: "100" }}
          />
          {props.check && props.info.bathno === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="price"
            name="price"
            type="number"
            defaultValue={props.info.price}
            label="Price"
            onChange={(event) => setPrice(event.target.value)}
            fullWidth
            inputProps={{ pattern: "[0-9]*", min: "0", step: "500" }}
          />
          {props.check && props.info.price === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="watersupply">Water Supply</FormLabel>
            <RadioGroup
              row
              aria-labelledby="watersupply"
              name="watersupply"
              onChange={(event) => setWatersupply(event.target.value)}
            >
              <FormControlLabel
                value="Available"
                control={<Radio />}
                label="Available"
              />
              <FormControlLabel
                value="Not Available"
                control={<Radio />}
                label="Not Available"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="electricity">Electricity</FormLabel>
            <RadioGroup
              row
              aria-labelledby="electricity"
              name="electricity"
              onChange={(event) => setElectricity(event.target.value)}
            >
              <FormControlLabel
                value="Available"
                control={<Radio />}
                label="Available"
              />
              <FormControlLabel
                value="Not Available"
                control={<Radio />}
                label="Not Available"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="parking">Parking Space</FormLabel>
            <RadioGroup
              row
              aria-labelledby="parking"
              name="parking"
              onChange={(event) => setParking(event.target.value)}
            >
              <FormControlLabel
                value="Available"
                control={<Radio />}
                label="Available"
              />
              <FormControlLabel
                value="Not Available"
                control={<Radio />}
                label="Not Available"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="lift">Lift/Escalator</FormLabel>
            <RadioGroup
              row
              aria-labelledby="lift"
              name="lift"
              onChange={(event) => setLift(event.target.value)}
            >
              <FormControlLabel
                value="Available"
                control={<Radio />}
                label="Available"
              />
              <FormControlLabel
                value="Not Available"
                control={<Radio />}
                label="Not Available"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
