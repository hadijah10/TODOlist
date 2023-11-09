import { useState } from 'react';
import {AppBar,Button,Container,List,ListItem,ListItemText,ListItemButton,Stack, Toolbar} from '@mui/material';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import {Tab,Tabs,TabPanel,TabList,tabClasses } from '@mui/joy';
import Carousel from './components/Carousel';
import Task from './components/Task';

function App() {
  const [index, setIndex] = useState(0);
   

  return (
    <>
    
   <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:"100%"}}>
   <Box sx={{ minWidth:'48%',height:'95vh',backgroundColor:'#555E68',mt:2}}>
   <Tabs
        aria-label="Pipeline"
        value={index}
        onChange={(event, value) => setIndex(value)}
      >
        <TabList
          sx={{
             mb:0,
             pb:0,
         
            justifyContent: 'center',
            backgroundColor:'#555E68',
          
            [`&& .${tabClasses.root}`]: {
              flex: 'initial',
    
              color:'#bdbdbd',
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'transparent',
               borderBottom:"1px solid #212121"
              },
              [`&.${tabClasses.selected}`]: {
                color: '#fff',
                borderBottom: '3px solid #d45790',
                '&::after': {
                  height: 2,
                  bgcolor: 'transparent',
                 
                },
              },
            },
          }}
        >
          <Tab indicatorInset sx={{mr:2}} >
            Day{' '}
          </Tab>
          <Tab indicatorInset  sx={{mr:1}} >
            Week{' '}
          </Tab>
          <Tab indicatorInset sx={{mr:1}} >
            Month{' '}
          </Tab>
          <Tab indicatorInset sx={{mr:1}} >
            Year{' '}
          </Tab>
        </TabList>
        <Box
          sx={(theme) => ({
            bgcolor:'#555E68',
            clipPath: 'inset(0 -100vmax)',
          })}
        >
          <TabPanel value={0} ><Carousel/></TabPanel>
          <TabPanel value={1}>Library</TabPanel>
          <TabPanel value={2}>Library</TabPanel>
          <TabPanel value={3}>Library</TabPanel>
        </Box>
      </Tabs>
      <Task></Task>
</Box>

   </Box>
    </>
  )
}

export default App;
