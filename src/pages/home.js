import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MuiGrid from "@mui/material/Grid";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import TextField from "@mui/material/TextField";
import "./home.scss";
import axios from "axios";

const Input = styled("input")({
  display: "none",
});

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function Home() {
  const [value, setValue] = React.useState("");
  const [tFLanguage, setTFLanguage] = React.useState("");
  const [tTLanguage, setTTLanguage] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeTF = (event) => {
    event.preventDefault();
    setTFLanguage(event.target.value);
  };

  const handleChangeTT = (event) => {
    event.preventDefault();
    setTTLanguage(event.target.value);
  };

  const content = (
    <div style={{ height: "300px" }}>{`Translated text goes here...`}</div>
  );

  // new line start
  const [profileData, setProfileData] = useState(null);

  function getData() {
    axios({
      method: "GET",
      url: "/profile",
    })
      .then((response) => {
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  //end of new line

  return (
    <div style={{ marginTop: "1em" }}>
      <div className="translate-div">
        <div style={{ width: 500 }}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                Translate from
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tFLanguage}
                label="Translate"
                onChange={handleChangeTF}
              >
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"de"}>German</MenuItem>
                <MenuItem value={"fr"}>French</MenuItem>
                <MenuItem value={"el"}>Greek</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <CompareArrowsIcon />

        <div style={{ width: 500 }}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                Translate To
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tTLanguage}
                label="Translate"
                onChange={handleChangeTT}
              >
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={10}>German</MenuItem>
                <MenuItem value={20}>French</MenuItem>
                <MenuItem value={30}>Greek</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      <div className="card-div">
        <Card
          sx={{
            width: 520,
            height: 400,
            flexWrap: "wrap",
            marginInline: 2,
          }}
        >
          <CardContent>
            <Grid container>
              <Grid item xs>
                <Box component="form" noValidate autoComplete="off">
                  <div>
                    <TextField
                      variant="standard"
                      id="outlined-textarea"
                      placeholder="Enter some text"
                      multiline
                      autoFocus={true}
                      fullWidth
                      rows={13}
                      value={value}
                      onChange={getData}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </div>
                </Box>
              </Grid>
            </Grid>
          </CardContent>

          <CardActions>
            <label htmlFor="text-button-file">
              <Input
                accept=".doc,.docx,.pdf"
                id="text-button-file"
                multiple
                type="file"
              />
              <Button
                variant="text"
                component="span"
                startIcon={<CloudUploadIcon />}
                sx={{
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Upload a .docx, .pdf
              </Button>
            </label>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: 520,
            height: 400,
            flexWrap: "wrap",
            marginInline: 2,
          }}
        >
          <CardContent>
            <Grid container>
              <Grid item xs>
               {/*  {content} */}
               <button onClick={getData}>Click me</button>
                {profileData && (
                  <div>
                    console.log('I was triggered during render')
                    <p>Profile name: {profileData.profile_name}</p>
                    <p>About me: {profileData.about_me}</p>
                  </div>
                )} 
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
