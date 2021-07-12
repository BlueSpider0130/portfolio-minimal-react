// import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
// import flashFill from '@iconify/icons-eva/flash-fill';
// import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
// routes
// import { PATH_DASHBOARD, PATH_HOME } from '../../routes/paths';
//
import { varFadeIn, varWrapEnter, varFadeInRight } from '../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#F2F3F5',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroOverlayStyle = styled('video')({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// const HeroImgStyle = styled(motion.img)(({ theme }) => ({
//   top: 0,
//   right: 0,
//   bottom: 0,
//   zIndex: 8,
//   width: '100%',
//   margin: 'auto',
//   position: 'absolute',
//   [theme.breakpoints.up('lg')]: {
//     right: '8%',
//     width: 'auto',
//     height: '72vh'
//   }
// }));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle
          alt="overlay"
          src="/static/home/lights.mp4"
          autoPlay
          loop
          muted
          variants={varFadeIn}
        />

        {/* <HeroImgStyle
          alt="hero"
          src="/static/home/hero.png"
          variants={varFadeInUp}
        /> */}

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                We create <br />
                the future <br /> by
                <Typography
                  component="span"
                  variant="h1"
                  sx={{ color: 'primary.main' }}
                >
                  &nbsp;striving for perfection.
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ py: 5, color: 'common.white' }}>
                We do not deliver anything but perfection.We create
                clients,which creates clients.We give the respect we demand.
              </Typography>
            </motion.div>

            {/* <Box
              component={motion.div}
              variants={varFadeInRight}
              sx={{
                mb: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              <Box
                component="img"
                alt="sketch icon"
                src="/static/icons/ic_sketch.svg"
                sx={{ mr: 1, width: 20, height: 20 }}
              />
              <Link
                color="inherit"
                underline="always"
                href={PATH_HOME.cloud}
                target="_blank"
                sx={{ color: 'common.white' }}
              >
                Preview in Sketch Cloud
              </Link>
            </Box> */}

            {/* <motion.div variants={varFadeInRight}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_DASHBOARD.root}
                startIcon={<Icon icon={flashFill} width={20} height={20} />}
              >
                Live Preview
              </Button>
            </motion.div> */}

            <Box
              sx={{
                mt: 5,
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                '& > :not(:last-of-type)': { mr: 1.5 }
              }}
            >
              <motion.img
                variants={varFadeInRight}
                src="/static/icons/ic-home-ar-vr.svg"
              />
              <motion.img
                variants={varFadeInRight}
                src="/static/icons/ic-home-mechanical-eng.svg"
              />
              <motion.img
                variants={varFadeInRight}
                src="/static/icons/ic-home-electrical-eng.svg"
              />
              <motion.img
                variants={varFadeInRight}
                src="/static/icons/ic-home-industrial-designer.svg"
              />
              <motion.img
                variants={varFadeInRight}
                src="/static/icons/ic-home-dashboard.svg"
              />
            </Box>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
