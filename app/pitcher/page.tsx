"use client"
import { Image, Text, Title, Button } from '@mantine/core'; 

export default function Splitter() {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
      <Text size="lg" style={{ margin: "2% 2%" }}>HOW IT WORKS</Text>
      <Title order={1} style={{ margin: '0 0 0.5rem' }}>Audio Speed and Pitch Changer</Title>
      <Text size="lg" style={{ margin: '2% 1%' }}>
          Changes pitch and tempo of the song by adjusting musical key and bpm sliders
      </Text>
      <Button 
        variant="outline" 
        color="violet" 
        radius="lg"
        size='md' 
        styles={{
          root: {
            borderColor: '#5a4d80',
            color: 'white', 
            '&:hover': {
              backgroundColor: '#5a4d80',
              color: 'white', 
            },
          },
        }}
      >
        Browse my files
      </Button>
    </div>
    <h1 style={{textAlign:"left"}}>Free Online Pitch Shifter</h1>
      <div style={{textAlign:"justify", borderLeft:"2px solid #5a4d80", padding:10}}>
        <h2>This app changes the song pitch and/or playback speed using one of the best pitch shifting algorithms. The musical key, scale, and bpm will be automatically detected.</h2>
        <h2>You can easily transpose music to a different key and change the tempo by adjusting the pitch shifter key and bpm sliders.</h2>
      </div>
      <h2 style={{textAlign:"left"}}>Features</h2>
      <div style={{textAlign:"justify", borderLeft:"2px solid #5a4d80", padding:10}}>
          <h3>Analyzes music and finds musical key, scale and bpm</h3>
          <h3>Changes audio pitch</h3>
          <h3>Speed up or slow down music playback speed</h3>
      </div>
    </>
  );
}
