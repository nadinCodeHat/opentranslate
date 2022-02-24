import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Input = styled('input')({
    display: 'none',
});

export default function Home() {
    return (
        <Card
            sx={{
                width: 900,
                height: 500,
                m: 1,
                flexWrap: 'wrap',
            }}>
            <CardContent>

            </CardContent>
            <CardActions>
                <label htmlFor="text-button-file">
                    <Input accept=".doc,.docx,.pdf" id="text-button-file" multiple type="file" />
                    <Button variant="text" component="span"
                        style={{
                            textTransform: 'lowercase',
                        }}>
                        Upload a .docx, .pdf
                    </Button>
                </label>
            </CardActions>
        </Card>
    );
}