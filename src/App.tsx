import './App.css';
import { Box, Grid, Paper } from '@mui/material';

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}

interface Sound {
  title: string,
  file: string
}

const items: Sound[] = [
  { title: 'He\'s nuts', file: 'hes-nuts-at-the-game.mp3' },
  { title: 'Shrek', file: 'shrek-collab.mp3' },
  { title: 'Subs', file: 'sub-and-non-sub.wav' },
  { title: 'O M G', file: 'omg.mp3' },
  { title: 'That was kinda funny', file: 'that-was-kinda-funny.mp3' },
  { title: 'WoW, this guy\'s crazy', file: 'wow-this-guys-crazy.mp3'},
]

const colors = [
    'Blue',
    'DeepPink',
    'Gold',
    'Red',
    'DarkOrange',
    'DarkOrchid',
    'Chartreuse'
] 

function Item(props: any) {
  const color = colors[getRandomInt(colors.length)]
  const audio = new Audio('sounds/' + props.file)

  const handleOnClick = () => {
    audio.play()
  }

  return (
      <Grid onClick={handleOnClick} item xs={6} sm={4} md={3} lg={2} xl={2}>
        <Paper
          variant='outlined'
          sx={{ background: `radial-gradient(#FFFFFF, ${color})`, height: '25vh' }}
        />
      </Grid>
    )
  }

function App() {

  return (
    <Box p={1}>
      <Grid container spacing={2}>
        { items.map( (value, key) => {
          return(
            <Item key={key} file={value.file} title={value.title}/>
          )
        }) }
      </Grid>
    </Box>
  )
}

export default App;
