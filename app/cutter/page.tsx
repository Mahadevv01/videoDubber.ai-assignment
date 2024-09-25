"use client"
import { Image, Text, Title, Button } from '@mantine/core'; 

export default function Cutter() {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem', marginTop:"5%" }}>
      <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
      <Text size="lg" style={{ margin: "2% 2%", }}>HOW IT WORKS</Text>
      <Text size="lg" style={{ margin: "2% 2%",  }}>JOINER</Text>
      </div>
      <Title order={1} style={{ margin: '0 0 0.5rem' }}>Audio Cutter</Title>
      <Text size="xl" style={{ margin: '2% 1%' }}>Free editor to trim and cut any audio file online</Text>
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
    <h1 style={{textAlign:"left"}}>How to cut audio</h1>
      <div style={{textAlign:"justify", borderLeft:"2px solid #5a4d80", padding:10}}>
        <h2>This app can be used to trim and/or cut audio tracks, remove an audio fragments. Fade in and fade out your music easily to make the audio harmoniously.</h2>
        <h2>It fast and easy to use. You can save the audio file in any format (codec parameters are configured)</h2>
        <h2>It works directly in the browser, no needs to install any software, is available for mobile devices.</h2>
      </div>

      <h2 style={{textAlign:"left"}}>Privacy and Security Guaranteed</h2>
      <div style={{textAlign:"justify", borderLeft:"2px solid #5a4d80", padding:10}}>
          <h3>This is serverless app. Your files does not leave your device</h3>
      </div>
    </>
  );
}
