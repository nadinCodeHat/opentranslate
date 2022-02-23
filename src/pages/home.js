import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Home() {
    return (
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 900,
            height: 500,
          },
        }}
      > 
        <Paper elevation={3} />
      </Box>
    );
}