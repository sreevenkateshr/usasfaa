// components/ProcessSection.tsx
'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Container,
  Paper
} from '@mui/material';
import { 
  Person, 
  Email, 
  LocationOn, 
  Archive 
} from '@mui/icons-material';

const ProcessSection = () => {
  const processSteps = [
    {
      number: 1,
      icon: <Person sx={{ fontSize: 20 }} />,
      title: "Create Your Account in USASFAA.COM",
      description: "Start with a free, 15-minute confidential call to discuss your needs and ask questions. There is no commitment required."
    },
    {
      number: 2,
      icon: <LocationOn sx={{ fontSize: 20 }} />,
      title: "Update Your Address in the FAA Portal",
      description: "Based on our call, we'll personally match you with a therapist whose expertise and approach are the best fit for your goals."
    },
    {
      number: 3,
      icon: <Email sx={{ fontSize: 20 }} />,
      title: "Receive & Manage Your Mails",
      description: "Easily book your first appointment with flexible scheduling for both online and in-person sessions. You choose what works for you."
    },
    {
      number: 4,
      icon: <Archive sx={{ fontSize: 20 }} />,
      title: "Store, Shred, or Forward Your Mail",
      description: "Work with your therapist in a safe, supportive space on a collaborative journey towards healing, growth, and well-being."
    }
  ];

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        py: 12,
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Grid container spacing={6} alignItems="flex-start">
        {/* Left Section - Heading, Subtitle & Button */}
        <Grid item xs={12} md={4}>
          <Box sx={{ 
            position: 'sticky',
            top: 100,
            textAlign: { xs: 'center', md: 'left' }
          }}>
            <Typography 
              variant="h4" 
              component="h1"
              sx={{
                fontWeight: 600,
                fontSize: '28px',
                lineHeight: 1.4,
                mb: 2,
                color: '#000'
              }}
            >
              Experience Hassle-Free Compliance with Our Guided, Step-by-Step Process
            </Typography>
            
            <Typography 
              variant="h6" 
              component="p"
              sx={{
                color: '#666',
                mb: 4,
                fontSize: '16px',
                fontWeight: 400
              }}
            >
              Swift. Digital. Reliable. Secure.
            </Typography>

            <Box sx={{ 
              mb: 4,
              '&::after': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '1px',
                backgroundColor: '#e0e0e0',
                my: 4
              }
            }} />

            <Button 
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#0d6efd',
                color: '#fff',
                fontWeight: 500,
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                fontSize: '15px',
                textTransform: 'none',
                minWidth: '160px',
                '&:hover': {
                  backgroundColor: '#0b5ed7'
                }
              }}
            >
              Subscribe Now
            </Button>
          </Box>
        </Grid>

        {/* Right Section - 4 Steps in 2x2 Grid */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            {/* Column 1 - Steps 1 & 3 */}
            <Grid item xs={12} sm={6}>
              {/* Step 1 */}
              <Box sx={{ mb: 5 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: '#e8f1ff',
                      color: '#0d6efd',
                      p: 1.5,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: '48px',
                      height: '48px'
                    }}
                  >
                    {processSteps[0].icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#000',
                      lineHeight: 1.3
                    }}
                  >
                    {processSteps[0].title}
                  </Typography>
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{
                    color: '#555',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    pl: 7
                  }}
                >
                  {processSteps[0].description}
                </Typography>
              </Box>

              {/* Step 3 */}
              <Box sx={{ mb: 5 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: '#e8f1ff',
                      color: '#0d6efd',
                      p: 1.5,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: '48px',
                      height: '48px'
                    }}
                  >
                    {processSteps[2].icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#000',
                      lineHeight: 1.3
                    }}
                  >
                    {processSteps[2].title}
                  </Typography>
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{
                    color: '#555',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    pl: 7
                  }}
                >
                  {processSteps[2].description}
                </Typography>
              </Box>
            </Grid>

            {/* Column 2 - Steps 2 & 4 */}
            <Grid item xs={12} sm={6}>
              {/* Step 2 */}
              <Box sx={{ mb: 5 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: '#e8f1ff',
                      color: '#0d6efd',
                      p: 1.5,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: '48px',
                      height: '48px'
                    }}
                  >
                    {processSteps[1].icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#000',
                      lineHeight: 1.3
                    }}
                  >
                    {processSteps[1].title}
                  </Typography>
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{
                    color: '#555',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    pl: 7
                  }}
                >
                  {processSteps[1].description}
                </Typography>
              </Box>

              {/* Step 4 */}
              <Box sx={{ mb: 5 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: '#e8f1ff',
                      color: '#0d6efd',
                      p: 1.5,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: '48px',
                      height: '48px'
                    }}
                  >
                    {processSteps[3].icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#000',
                      lineHeight: 1.3
                    }}
                  >
                    {processSteps[3].title}
                  </Typography>
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{
                    color: '#555',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    pl: 7
                  }}
                >
                  {processSteps[3].description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProcessSection;