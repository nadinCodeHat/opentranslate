import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MuiGrid from '@mui/material/Grid';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const Input = styled('input')({
    display: 'none',
});

const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2),
    },
}));

export default function Home() {

    const [language, setLanguage] = React.useState('');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const content = (
        <div style={{ height: "300px" }}>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
       Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
       Sed malesuada lobortis pretium.`}
        </div>
    );

    return (
        <div>
            <div style={{
                marginTop: "1em",
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "65em",
                margin: "0 auto",
            }}>
                <div style={{ width: 500 }}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Translate from</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={language}
                                label="Translate"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>English</MenuItem>
                                <MenuItem value={10}>German</MenuItem>
                                <MenuItem value={20}>French</MenuItem>
                                <MenuItem value={30}>Greek</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <CompareArrowsIcon />

                <div style={{ width: 500 }}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Translate To</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={language}
                                label="Translate"
                                onChange={handleChange}
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
            
            <div style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate( -50%, -50%)",
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "67em",
                margin: "0 auto",
            }} >
                <Card
                    sx={{
                        width: 520,
                        height: 400,
                        flexWrap: 'wrap',
                        marginInline: 2
                    }}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs>
                                {content}
                            </Grid>
                        </Grid>
                    </CardContent>

                    <CardActions>
                        <label htmlFor="text-button-file">
                            <Input accept=".doc,.docx,.pdf" id="text-button-file" multiple type="file" />
                            <Button variant="text" component="span"
                                style={{
                                    textTransform: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap'
                                }}>
                                <CloudUploadIcon />
                                Upload a .docx, .pdf
                            </Button>
                        </label>
                    </CardActions>
                </Card>

                <Card
                    sx={{
                        width: 520,
                        height: 400,
                        flexWrap: 'wrap',
                        marginInline: 2
                    }}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs>
                                {content}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}