import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ErrorMessage from "../Mycomponent/ErrorMessage";

export default function AddressForm(props) {
  const [country, setCountry] = useState("Nepal");
  const [province, setProvince] = useState(
    props.info.province ? props.info.province : ""
  );
  const [district, setDistrict] = useState(
    props.info.district ? props.info.district : ""
  );
  const [municipalityorvdc, setMunicipalityorvdc] = useState(
    props.info.municipalityorvdc ? props.info.municipalityorvdc : ""
  );
  const [wardno, setWardno] = useState(
    props.info.wardno ? props.info.wardno : ""
  );
  const [streetortole, setStreetortole] = useState(
    props.info.streetortole ? props.info.streetortole : ""
  );
  const [latitude, setlatitude] = useState(
    props.info.latitude ? props.info.latitude : ""
  );
  const [longitude, setlongitude] = useState(
    props.info.longitude ? props.info.longitude : ""
  );

  const property = {
    country: country,
    province: province,
    district: district,
    municipalityorvdc: municipalityorvdc,
    wardno: wardno,
    streetortole: streetortole,
    longitude: longitude,
    latitude: latitude,
  };
  props.property(property);

  return (
    <React.Fragment>
      {props.property(property)}
      <Typography variant="h6" gutterBottom>
        Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="country"
            fullWidth
            defaultValue="Nepal"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            onChange={(event) => setCountry(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Province"
            name="Province"
            label="Your Province"
            fullWidth
            defaultValue={props.info.province}
            select
            variant="standard"
            onChange={(event) => setProvince(event.target.value)}
          >
            <MenuItem value="Province 1"> Province 1</MenuItem>
            <MenuItem value="Madesh ">Madesh</MenuItem>
            <MenuItem value="Bagmati">Bagmati </MenuItem>
            <MenuItem value="Gandaki">Gandaki </MenuItem>
            <MenuItem value="Lumbini">Lumbini </MenuItem>
            <MenuItem value="Karnali">Karnali </MenuItem>
            <MenuItem value="Sudurpaschim">Sudurpaschim </MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="District"
            name="District"
            label="District"
            defaultValue={props.info.district}
            fullWidth
            select
            variant="standard"
            onChange={(event) => setDistrict(event.target.value)}
          >
            <MenuItem unselectable>
              <b>province1</b>
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

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="vdc/municipality"
            name="vdc/munici"
            defaultValue={props.info.municipalityorvdc}
            label="Municipality/VDC"
            fullWidth
            variant="standard"
            onChange={(event) => setMunicipalityorvdc(event.target.value)}
          />
          {props.check && props.info.municipalityorvdc === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ward"
            name="ward"
            type="number"
            label="Ward No"
            defaultValue={props.info.wardno}
            fullWidth
            variant="standard"
            inputProps={{ pattern: "[0-9]*", min: "0", max: "32" }}
            onChange={(event) => setWardno(event.target.value)}
          />
          {props.check && props.info.wardno === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Tol"
            name="tol"
            defaultValue={props.info.streetortole}
            label="Tol/Street"
            fullWidth
            variant="standard"
            onChange={(event) => setStreetortole(event.target.value)}
          />
          {props.check && props.info.streetortole === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="latitude"
            name="Latitude"
            defaultValue={props.info.latitude}
            label="Latitude"
            fullWidth
            variant="standard"
            onChange={(event) => setlatitude(event.target.value)}
          />
          {props.check && props.info.latitude === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="longitude"
            name="Longitude"
            defaultValue={props.info.longitude}
            label="Longitude"
            fullWidth
            variant="standard"
            onChange={(event) => setlongitude(event.target.value)}
          />
          {props.check && props.info.longitude === "" && (
            <ErrorMessage message="***" />
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
