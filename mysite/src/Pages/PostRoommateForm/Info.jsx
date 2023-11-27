import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { useState } from "react";
import ErrorMessage from "../../Mycomponent/ErrorMessage";

export default function Info(props) {
  const [name, setname] = useState(props.info.name ? props.info.name : "");
  const [age, setage] = useState(props.info.age ? props.info.age : "");
  const [price, setprice] = useState(props.info.price ? props.info.price : "");
  const [gender, setgender] = useState(
    props.info.gender ? props.info.gender : ""
  );
  const [type, settype] = useState(props.info.type ? props.info.type : "");
  const [email, setemail] = useState(props.info.email ? props.info.email : "");
  const [phoneno, setphoneno] = useState(
    props.info.phoneno ? props.info.phoneno : ""
  );
  const [country, setcountry] = useState("Nepal");
  const [province, setprovince] = useState(
    props.info.province ? props.info.province : ""
  );
  const [district, setdistrict] = useState(
    props.info.district ? props.info.district : ""
  );
  const [municipalityorvdc, setmunicipalityorvdc] = useState(
    props.info.municipalityorvdc ? props.info.municipalityorvdc : ""
  );
  const [wardno, setwardno] = useState(
    props.info.wardno ? props.info.wardno : ""
  );
  const [tolstreet, settolstreet] = useState(
    props.info.tolstreet ? props.info.tolstreet : ""
  );
  const [desc, setdesc] = useState(props.info.desc ? props.info.desc : "");
  const [photo, setphoto] = useState([]);

  const form = {
    name: name,
    age: age,
    price: price,
    gender: gender,
    type: type,
    email: email,
    phoneno: phoneno,
    country: country,
    province: province,
    district: district,
    municipalityorvdc: municipalityorvdc,
    wardno: wardno,
    tolstreet: tolstreet,
    desc: desc,
    photo: photo,
  };
  props.property(form);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            defaultValue={props.info.name}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(event) => setname(event.target.value)}
          />
          {props.check && props.info.name?.length < 3 && (
            <ErrorMessage message="***" />
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="age"
            name="age"
            type="number"
            label="Age"
            defaultValue={props.info.age}
            fullWidth
            variant="standard"
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              min: "1",
              max: "100",
            }}
            onChange={(event) => setage(event.target.value)}
          />
          {props.check && props.info.age < 18 && <ErrorMessage message="***" />}
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Price"
            name="Price"
            label="Price"
            defaultValue={props.info.price}
            type="number"
            fullWidth
            onChange={(event) => setprice(event.target.value)}
            variant="standard"
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              min: "1",
              max: "100",
            }}
          />
          {props.check && props.info.price === "" && (
            <ErrorMessage message="***" />
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
              onChange={(event) => setgender(event.target.value)}
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

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="type"
            name="type"
            label="Type"
            fullWidth
            defaultValue={props.info.type}
            select
            variant="standard"
            onChange={(event) => settype(event.target.value)}
          >
            <MenuItem value="Roommates"> Roommates</MenuItem>
            <MenuItem value="Flatmate ">Flatmates</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="email"
            name="email"
            type="email"
            defaultValue={props.info.email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            label="  Email"
            onChange={(event) => setemail(event.target.value)}
            fullWidth
            variant="standard"
          />
          {props.check && props.info.email === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="phone no"
            name="phone no"
            defaultValue={props.info.phoneno}
            type="tel"
            label=" Contact No"
            fullWidth
            variant="standard"
            onChange={(event) => setphoneno(event.target.value)}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
          {props.check && props.info.phoneno === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="r1phone no"
            name="r1phone no"
            type="tel"
            label="Additional Contact No"
            fullWidth
            variant="standard"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="country"
            name="country"
            onChange={(event) => setcountry(event.target.value)}
            label="country"
            fullWidth
            defaultValue="Nepal"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Province"
            name="Province"
            defaultValue={props.info.province}
            label="Your Province"
            fullWidth
            select
            variant="standard"
            onChange={(event) => setprovince(event.target.value)}
          >
            <MenuItem value="koshi">koshi</MenuItem>
            <MenuItem value="Madesh ">Madesh</MenuItem>
            <MenuItem value="Bagmati">Bagmati </MenuItem>
            <MenuItem value="Gandaki">Gandaki </MenuItem>
            <MenuItem value="Lumbini">Lumbini </MenuItem>
            <MenuItem value="Karnali">Karnali </MenuItem>
            <MenuItem value="Sudurpaschim">Sudurpaschim </MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="District"
            name="District"
            label="District"
            defaultValue={props.info.district}
            fullWidth
            select
            onChange={(event) => setdistrict(event.target.value)}
            variant="standard"
          >
            <MenuItem unselectable>
              <b>Koshi</b>
            </MenuItem>
            <MenuItem value="Bhojpur">Bhojpur</MenuItem>
            <MenuItem value="Dhankuta">Dhankuta</MenuItem>
            <MenuItem value="Ilam">Ilam</MenuItem>
            <MenuItem value="Jhapa">Jhapa</MenuItem>
            <MenuItem value="Khotang">Khotang</MenuItem>
            <MenuItem value="Morang">Morang</MenuItem>
            <MenuItem value="Okhaldhunga">Okhaldhunga</MenuItem>
            <MenuItem value="Panchthar">Panchthar</MenuItem>
            <MenuItem value="Sankhuwasabha">Sankhuwasabha</MenuItem>
            <MenuItem value="Solukhumbu">Solukhumbu</MenuItem>
            <MenuItem value="Sunsari">Sunsari</MenuItem>
            <MenuItem value="Taplejung">Taplejung</MenuItem>
            <MenuItem value="Terhathum">Terhathum</MenuItem>
            <MenuItem value="Udayapur">Udayapur</MenuItem>

            <MenuItem unselectable>
              <b>Madhesh Pradesh </b>
            </MenuItem>
            <MenuItem value="Bara">Bara</MenuItem>
            <MenuItem value="Dhanusha">Dhanusha</MenuItem>
            <MenuItem value="Mahottari">Mahottari</MenuItem>
            <MenuItem value="Parsa">Parsa</MenuItem>
            <MenuItem value="Rautahat">Rautahat</MenuItem>
            <MenuItem value="Saptari">Saptari</MenuItem>
            <MenuItem value="sarlahi">Sarlahi</MenuItem>
            <MenuItem value="Siraha">Siraha</MenuItem>

            <MenuItem unselectable>
              <b>Bagmati </b>
            </MenuItem>
            <MenuItem value="Bhaktapur">Bhaktapur</MenuItem>
            <MenuItem value="Chitwan">Chitwan</MenuItem>
            <MenuItem value="Dhading">Dhading</MenuItem>
            <MenuItem value="Dolakha">Dolakha</MenuItem>
            <MenuItem value="Kathmandu">Kathmandu</MenuItem>
            <MenuItem value="Kavrepalanchok">Kavrepalanchok</MenuItem>
            <MenuItem value="Lalitpur">Lalitpur</MenuItem>
            <MenuItem value="Makwanpur">Makwanpur</MenuItem>
            <MenuItem value="Nuwakot">Nuwakot</MenuItem>
            <MenuItem value="Rasuwa">Rasuwa</MenuItem>
            <MenuItem value="Ramechhap">Ramechhap</MenuItem>
            <MenuItem value="Sindhuli">Sindhuli</MenuItem>
            <MenuItem value="Sindhupalchok">Sindhupalchok</MenuItem>

            <MenuItem unselectable>
              <b>Gandaki Province</b>
            </MenuItem>
            <MenuItem value="Baglung">Baglung</MenuItem>
            <MenuItem value="Gorkha">Gorkha</MenuItem>
            <MenuItem value="Kaski">Kaski</MenuItem>
            <MenuItem value="Lamjung">Lamjung</MenuItem>
            <MenuItem value="Manang">Manang</MenuItem>
            <MenuItem value="Mustang">Mustang</MenuItem>
            <MenuItem value="Myagdi">Myagdi</MenuItem>
            <MenuItem value="Nawalpur">Nawalpur</MenuItem>
            <MenuItem value="Parbat">Parbat</MenuItem>
            <MenuItem value="Syangja">Syangja</MenuItem>
            <MenuItem value="Tanahun">Tanahun</MenuItem>

            <MenuItem unselectable>
              <b>Lumbini Province</b>
            </MenuItem>
            <MenuItem value="Arghakhanchi">Arghakhanchi</MenuItem>
            <MenuItem value="Banke">Banke</MenuItem>
            <MenuItem value="Bardiya">Bardiya</MenuItem>
            <MenuItem value="Dang">Dang</MenuItem>
            <MenuItem value="Gulmi">Gulmi</MenuItem>
            <MenuItem value="Kapilvastu">Kapilvastu</MenuItem>
            <MenuItem value="Parasi">Parasi</MenuItem>
            <MenuItem value="Palpa">Palpa</MenuItem>
            <MenuItem value="Pyuthan">Pyuthan</MenuItem>
            <MenuItem value="Rolpa">Rolpa</MenuItem>
            <MenuItem value="Rukum Purba"> Rukum Purba</MenuItem>
            <MenuItem value="Rupandehi">Rupandehi</MenuItem>

            <MenuItem unselectable>
              <b>Karnali Province</b>
            </MenuItem>
            <MenuItem value="Dailekh">Dailekh</MenuItem>
            <MenuItem value="Dolpa">Dolpa</MenuItem>
            <MenuItem value="Humla">Humla</MenuItem>
            <MenuItem value="Jajarkot">Jajarkot</MenuItem>
            <MenuItem value="Jumla">Jumla</MenuItem>
            <MenuItem value="Kalikot">Kalikot</MenuItem>
            <MenuItem value="Mugu">Mugu</MenuItem>
            <MenuItem value="Rukum Paschim"> Rukum Paschim</MenuItem>

            <MenuItem value="Salyan">Salyan</MenuItem>
            <MenuItem value="Surkhet">Surkhet</MenuItem>

            <MenuItem unselectable>
              <b>Sudurpaschim Province</b>
            </MenuItem>
            <MenuItem value="Achham">Achham</MenuItem>
            <MenuItem value="Baitadi">Baitadi</MenuItem>
            <MenuItem value="Bajhang">Bajhang</MenuItem>
            <MenuItem value="Bajura">Bajura</MenuItem>
            <MenuItem value="Dadeldhura">Dadeldhura</MenuItem>
            <MenuItem value="Darchula">Darchula</MenuItem>
            <MenuItem value="Doti">Doti</MenuItem>
            <MenuItem value="Kailali">Kailali</MenuItem>
            <MenuItem value="Kanchanpur">Kanchanpur</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="vdc/municipality"
            name="vdc/munici"
            label="Municipality/VDC"
            defaultValue={props.info.municipalityorvdc}
            fullWidth
            onChange={(event) => setmunicipalityorvdc(event.target.value)}
            variant="standard"
          />
          {props.check && props.info.municipalityorvdc === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="ward"
            name="ward"
            type="number"
            label="Ward No"
            defaultValue={props.info.wardno}
            fullWidth
            onChange={(event) => setwardno(event.target.value)}
            variant="standard"
            inputProps={{ pattern: "[0-9]*", min: "0", max: "32" }}
          />
          {props.check && props.info.wardno === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Tol"
            name="tol"
            defaultValue={props.info.tolstreet}
            onChange={(event) => settolstreet(event.target.value)}
            label="Tol/Street"
            fullWidth
            variant="standard"
          />
          {props.check && props.info.tolstreet === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(event) => setdesc(event.target.value)}
            id="discription"
            defaultValue={props.info.desc}
            name="Discription"
            multiline
            rows={8}
            label="Description"
            fullWidth
          />
          {props.check && props.info.desc === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>

        <Grid item xs={12}>
          <h5> Profile Image </h5>
        </Grid>

        <Grid item xs={12}>
          <form>
            <Input
              type="file"
              variant="outlined"
              onChange={(event) => setphoto(event.target.files)}
              inputProps={{ accept: "image/*" }}
              multiple
            />
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
