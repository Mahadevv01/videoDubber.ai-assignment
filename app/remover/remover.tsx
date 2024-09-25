import React, { useState } from 'react';
import { Image, Text, Title, Button } from '@mantine/core';

export function Remover() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event:any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      alert('File has been uploaded successfully!');
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <Text size="lg" style={{ margin: '2% 2%' }}>
          HOW IT WORKS
        </Text>
        <Title order={1} style={{ margin: '0 0 0.5rem' }}>
          Vocal Remover and Isolation
        </Title>
        <Text size="lg" style={{ margin: '2% 1%' }}>
          Separate voice from music out of a song free with powerful AI algorithms
        </Text>
        <Image
          src="/player_en.png"
          alt="Audio Player"
          height={200}
          width={"auto"}
          fit="contain"
          style={{ marginBottom: '2rem', maxHeight: '200px', maxWidth: '100%' }} // Added max height and width
        />
        {/* File input */}
        <input
          type="file"
          accept="audio/*"
          style={{ display: 'none' }}
          id="file-upload"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload">
          <Button
            variant="outline"
            color="violet"
            radius="lg"
            size="md"
            component="span"
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
        </label>
      </div>

      <h1 style={{ textAlign: 'left' }}>Remove vocals from a song</h1>
      <div style={{ textAlign: 'justify', borderLeft: '2px solid #5a4d80', padding: 10 }}>
        <h2>This free online application will help remove vocals from a song by creating karaoke.</h2>
        <h2>
          Once you choose a song, artificial intelligence will separate the vocals from the instrumental ones. You will get two tracks - a karaoke version of your song (no vocals) and an acapella version (isolated vocals).
        </h2>
        <h2>
          Despite the complexity and high cost of service, you can use it absolutely free. Processing usually takes about 10 seconds
        </h2>
      </div>
    </>
  );
}
