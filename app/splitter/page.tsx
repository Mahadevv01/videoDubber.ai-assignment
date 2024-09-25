"use client"
import { Image, Text, Title, Button } from '@mantine/core'; 

export default function Splitter() {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
      <Text size="lg" style={{ margin: "2% 2%" }}>HOW IT WORKS</Text>
      <Title order={1} style={{ margin: '0 0 0.5rem' }}>Splitter AI</Title>
      <Text size="lg" style={{ margin: '2% 1%' }}>
        Split music into separated parts with AI-Powered algorithms
      </Text>
      <Image 
        src="/splitter.png" 
        alt="Audio Player" 
        height={200}
        w={"auto"}
        fit="contain"
        style={{ marginBottom: '2rem' }} 
      />
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
    <h1 style={{textAlign:"left"}}>AI-Powered Music Separator</h1>
      <div style={{textAlign:"justify", borderLeft:"2px solid #5a4d80", padding:10}}>
        <h2>This app allows to separate music into an individual streams such as vocal, bass, percussion, and lets you rebalance their individual volumes. This is the simplest way to get multitracks from any song.</h2>
        <h2>Once you choose a song, artificial intelligence will separate music into stems: vocals, bass, drums, others. Processing usually takes about 1 minute.</h2>
      </div>
    </>
  );
}
