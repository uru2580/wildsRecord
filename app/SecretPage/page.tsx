"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Box, Typography } from '@mui/material';

const SecretPage: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f9f1e7',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: '#f04e31',
          fontWeight: 'bold',
        }}
      >
        シークレットページ
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 4,
          textAlign: 'center',
          color: '#333',
        }}
      >
        特に今は何も作ってないけども。。。
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push('/')} // 1ページ前に戻る
        sx={{
          mt: 2,
          backgroundColor: '#f04e31',
          ':hover': {
            backgroundColor: '#d63b27',
          },
        }}
      >
        戻る
      </Button>
    </Box>
  );
};

export default SecretPage;
