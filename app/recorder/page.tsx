"use client"
import { Image, Text, Title, Button } from '@mantine/core'; 

export default function Recorder() {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem', marginTop:"10%" }}>
      <Title order={1} style={{ margin: '0 0 0.5rem' }}>Audio Recorder</Title>
      <Text size="xl" style={{ margin: '2% 1%' }}>Record multiple audio tracks into one. Choose audio files you want to merge
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
    </>
  );
}
