"use client"
import { Image, Text, Title, Button } from '@mantine/core'; 

export default function BPM() {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem', marginTop:"5%" }}>
      <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
      <Text size="lg" style={{ margin: "2% 2%", }}>HOW IT WORKS</Text>
      <Text size="lg" style={{ margin: "2% 2%",  }}>TAP TEMO</Text>
      </div>
      <Title order={1} style={{ margin: '0 0 0.5rem' }}>Song Key and BPM Finder</Title>
      <Text size="lg" style={{ margin: '2% 1%' }}>
        Analyzes music and finds Key, Scale and BPM for any song
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
    <h1 style={{textAlign:"left"}}>How to find Key & BPM</h1>
      <div style={{textAlign:"justify", borderLeft:"2px solid #5a4d80", padding:10}}>
        <h2>This app analyzes music and estimates pitch and tempo [e.g. A♭ major, 120 bpm]. You can upload multiple files at once. Processing time takes a few seconds.</h2>
      </div>

      <h2 style={{textAlign:"left"}}>Change Key & BPM</h2>
      <div style={{textAlign:"justify", borderLeft:"2px solid #5a4d80", padding:10}}>
          <h3>Using Pitch Shifter tool you can transpose song to a different key and tempo.</h3>
      </div>

      <h2 style={{textAlign:"left"}}>Tap tempo</h2>
      <div style={{textAlign:"justify", borderLeft:"2px solid #5a4d80", padding:10}}>
          <h3>Tap tempo tool allows you to calculate tempo beats per minute by tapping space key to the rhythm or beat.</h3>
      </div>
    </>
  );
}
