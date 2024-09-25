"use client"
import { Image, Text, Title, Button } from '@mantine/core'; 

export default function Karaoke() {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem', marginTop:"10%" }}>
      <Title order={1} style={{ margin: '0 0 0.5rem' }}>Recording Voice Over a Song</Title>
      <Text size="xl" style={{ margin: '2% 1%' }}>Sing & record, tune voice and save complete song. Choose karaoke track you want to sing with</Text>
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
