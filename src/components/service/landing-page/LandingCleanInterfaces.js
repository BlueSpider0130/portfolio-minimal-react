// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInLeft } from '../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  // maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    // textAlign: 'left',
    // position: 'absolute'
  }
}));

// ----------------------------------------------------------------------

export default function LandingCleanInterfaces() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography
              gutterBottom
              variant="overline"
              sx={{ color: 'text.secondary', display: 'flex' }}
            >
              We are here.
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography variant="h2" paragraph>
              We are a group of passionate entrepreneurs, which are looking to
              work together with our clients to bring new and innovative
              products and services. We work together with great partners to
              bring new and innovative products to live.
            </Typography>
          </MotionInView>
        </ContentStyle>

        <Box
          component="img"
          alt="theme mode"
          src="/static/home/background.png"
          // sx={{
          //   maxWidth: { md: 'calc(100%)' },
          //   transform: 'translateZ(0)',
          //   width: '100%'
          // }}
        />
      </Container>
    </RootStyle>
  );
}
