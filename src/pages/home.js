import * as React from "react";
import Select from "react-select";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiGrid from "@mui/material/Grid";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./home.scss";
import axios from "axios";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const TRANSLATION_API_BASE_URL_POST = "http://localhost:5000/translate/post";
const TRANSLATION_API_BASE_URL_GET = "http://localhost:5000/translate/get";

export default function Home() {
  const flanguage = [
    {
      value: "en",
      label: "English",
    },
  ];

  const tlanguage = [
    {
      value: "de",
      label: "German",
    },
    {
      value: "fr",
      label: "French",
    },
    {
      value: "el",
      label: "Greek",
    },
  ];

  // Translation state variables
  const [translateFromLang, setTranslateFromLang] = useState("");
  const [translateToLang, setTranslateToLang] = useState("");

  // Input text state variable
  const [translateText, setTranslateText] = useState("");

  // Translated text state variable
  const [translatedText, setTranslatedText] = useState("");

  // Handle translation from
  const handleChangeTranslationFrom = (event) => {
    setTranslateFromLang(event.value);
  };

  // Handle translation to
  const handleChangeTranslationTo = (event) => {
    setTranslateToLang(event.value);
  };

  // Handle text translation
  const handleChangeTranslate = async (event) => {
    //POST input text
    try {
      await axios
        .post(TRANSLATION_API_BASE_URL_POST, {
          inputText: translateText,
          srctext: translateFromLang,
          dsttext: translateToLang,
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }

    //GET translated text
    try {
      await axios.get(TRANSLATION_API_BASE_URL_GET).then((response) => {
        setTranslatedText({
          translated_text: response.data,
        });
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  };

  return (
    <div style={{ marginTop: "5em" }}>
      <div className="translate-div">
        {/* Translate language from */}
        <div style={{ width: 500 }}>
          <Box sx={{ minWidth: 120 }}>
            <Select
              placeholder="Translate From"
              value={flanguage.find((obj) => obj.value === translateFromLang)}
              options={flanguage}
              onChange={handleChangeTranslationFrom}
            ></Select>
          </Box>
        </div>

        <CompareArrowsIcon />

        {/* Translate language to */}
        <div style={{ width: 500 }}>
          <Box sx={{ minWidth: 120 }}>
            <Select
              placeholder="Translate To"
              value={tlanguage.find((obj) => obj.value === translateToLang)}
              options={tlanguage}
              onChange={handleChangeTranslationTo}
            ></Select>
          </Box>
        </div>
      </div>

      <div className="cards-div">
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
                      placeholder="Enter some text here..."
                      multiline
                      autoFocus={true}
                      fullWidth
                      rows={13}
                      onChange={(e) => setTranslateText(e.target.value)}
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
                    <p>{translatedText.translated_text}</p>
                  </div>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
      <Button
        sx={{
          display: "block",
          width: "74em",
          height: "3em",
          margin: "10px auto 0px auto",
        }}
        variant="contained"
        onClick={handleChangeTranslate}
      >
        Translate
      </Button>
    </div>
  );
}
