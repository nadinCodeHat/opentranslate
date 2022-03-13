import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
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

const TRANSLATION_API_BASE_URL = "http://localhost:5000/translate";

export default function Home() {
  // Translation state variables
  const [translateFromLang, setTranslateFromLang] = React.useState("");
  const [translateToLang, setTranslateToLang] = React.useState("");

  // Input text state variable
  const [translateText, setTranslateText] = React.useState("");

  // Translated text state variable
  const [translatedText, setTranslatedText] = React.useState("");

  // Handle translation from
  const handleChangeTranslationFrom = (event) => {
    event.preventDefault();
    setTranslateFromLang(event.target.value);
  };

  // Handle translation to
  const handleChangeTranslationTo = (event) => {
    event.preventDefault();
    setTranslateToLang(event.target.value);
  };

  // Handle input text
  const handleChangeTranslate = async (event) => {
    event.preventDefault();
    setTranslateText(event.target.value);
    //POST input text
    try {
      await axios.post(TRANSLATION_API_BASE_URL, {
        inputText: translateText,
        srctext: translateFromLang,
        dsttext: translateToLang
      })
      .then((res) => {
        console.log(res.data);
      })
    } catch(error) {
        console.log(error);
    }

    //GET translated text
    
    try {
      await axios.get(TRANSLATION_API_BASE_URL, )
      .then((response) => {
        setTranslatedText(({
          translated_text: response.data}))
      })
    } catch(error) {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    }
    
  };

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
                value={translateFromLang}
                label="Translate"
                onChange={handleChangeTranslationFrom}
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
                value={translateToLang}
                label="Translate"
                onChange={handleChangeTranslationTo}
              >
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"de"}>German</MenuItem>
                <MenuItem value={"fr"}>French</MenuItem>
                <MenuItem value={"el"}>Greek</MenuItem>
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
                      value={translateText}
                      onChange={handleChangeTranslate}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </div>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
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
                {translatedText && (
                  <div>
                    <p>Translated Text: {translatedText.translated_text}</p>
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