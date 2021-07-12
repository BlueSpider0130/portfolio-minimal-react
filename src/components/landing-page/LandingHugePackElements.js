import { Link as RouterLink } from 'react-router-dom';
// material
import {
  alpha,
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  useMediaQuery
} from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInRight } from '../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
          theme.palette.grey[300]
        } 100%)`
      : 'none'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingRight: theme.spacing(5)
  }
}));

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
  bottom: 0,
  maxWidth: 460,
  position: 'absolute',
  width: '45%',
  // transform: 'skewY(-10deg)!important',
  [theme.breakpoints.up('sm')]: {
    width: '35%'
    // transform: [{ skewY: -30 }]
  }
}));

const variantScreenLeftMoblieL = {
  initial: { x: 0, y: 0, opacity: 0, skewY: 10 },
  animate: { x: '10%', y: 180, opacity: 1, skewY: 10 }
};

const variantScreenLeftMoblie = {
  initial: { x: 0, y: 0, opacity: 0, skewY: 10 },
  animate: { x: '30%', y: 135, opacity: 1, skewY: 10 }
};
const variantScreenCenterMobile = {
  initial: { x: 0, y: 0, opacity: 0, skewY: 10 },
  animate: { x: '105%', y: 120, opacity: 1, skewY: 10 }
};
const variantScreenRightMobile = {
  initial: { x: 0, y: 0, opacity: 0, skewY: 10 },
  animate: { x: '70%', y: 45, opacity: 1, skewY: 10 }
};
const variantScreenRightMobileR = {
  initial: { x: 0, y: 0, opacity: 0, skewY: 10 },
  animate: { x: '90%', y: 0, opacity: 1, skewY: 10 }
};
const variantScreenLeftL = {
  initial: { x: 0, y: 0, opacity: 0, skewY: 10 },
  animate: { x: '15%', y: 240, opacity: 1, skewY: 10 }
};
const variantScreenLeft = {
  initial: { x: 0, y: 0, opacity: 0, skewY: 10 },
  animate: { x: '65%', y: 180, opacity: 1, skewY: 10 }
};
const variantScreenCenter = {
  initial: { x: 0, y: 0, opacity: 0, skewY: 10 },
  animate: { x: '105%', y: 120, opacity: 1, skewY: 10 }
};
const variantScreenRight = {
  initial: { x: 0, y: 0, opacity: 0, skewY: 10 },
  animate: { x: '145%', y: 60, opacity: 1, skewY: 10 }
};
const variantScreenRightR = {
  initial: { x: 0, y: 0, opacity: 0, skewY: 10 },
  animate: { x: '185%', y: 0, opacity: 1, skewY: 10 }
};

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  const textAnimate = upMd ? varFadeInRight : varFadeInUp;
  const screenLeftAnimateL = upSm
    ? variantScreenLeftL
    : variantScreenLeftMoblieL;
  const screenLeftAnimate = upSm ? variantScreenLeft : variantScreenLeftMoblie;
  const screenCenterAnimate = upSm
    ? variantScreenCenter
    : variantScreenCenterMobile;
  const screenRightAnimate = upSm
    ? variantScreenRight
    : variantScreenRightMobile;
  const screenRightAnimateR = upSm
    ? variantScreenRightR
    : variantScreenRightMobileR;

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} lg={5}>
            <ContentStyle>
              <MotionInView variants={textAnimate}>
                <Typography
                  gutterBottom
                  variant="overline"
                  sx={{ color: 'text.secondary', display: 'block' }}
                >
                  Talent member need!
                </Typography>
              </MotionInView>

              <MotionInView variants={textAnimate}>
                <Typography variant="h2" paragraph>
                  Our Careers
                </Typography>
              </MotionInView>

              <MotionInView variants={textAnimate}>
                <Typography sx={{ color: 'text.secondary' }}>
                  We are looking for talents we can help develop and grow
                  together with us. If you are driven to be the best, willing to
                  work hard and passionate about innovation you might be our
                  next team player. We need positive, productive, result
                  orientated people, which takes on responsibility and deliver.
                </Typography>
              </MotionInView>

              <MotionInView variants={textAnimate} sx={{ mt: 5 }}>
                <Button
                  size="large"
                  color="inherit"
                  variant="outlined"
                  component={RouterLink}
                  to="#"
                >
                  Contact us to apply
                </Button>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid
            dir="ltr"
            item
            xs={12}
            md={8}
            lg={7}
            sx={{
              position: 'relative',
              pl: { sm: '16% !important', md: '0 !important' }
            }}
          >
            {[...Array(5)].map((screen, index) => (
              <ScreenStyle
                key={index}
                threshold={0.72}
                variants={{
                  ...(index === 0 && screenLeftAnimateL),
                  ...(index === 1 && screenLeftAnimate),
                  ...(index === 2 && screenCenterAnimate),
                  ...(index === 3 && screenRightAnimate),
                  ...(index === 4 && screenRightAnimateR)
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                sx={{
                  ...(index === 0 && { zIndex: 5 }),
                  ...(index === 1 && { zIndex: 4 }),
                  ...(index === 3 && { zIndex: 2 }),
                  ...(index === 4 && { zIndex: 1 }),
                  ...(index === 2 && {
                    position: 'relative',
                    zIndex: 3,
                    // bottom: { xs: 20, sm: 40 },
                    transform: {
                      xs: isRTL ? 'translateX(-24%)' : 'translateX(24%)',
                      sm: isRTL ? 'translateX(-32%)' : 'translateX(32%)'
                    }
                  })
                }}
              >
                <Box
                  component="img"
                  alt={`screen ${index + 1}`}
                  src={`/static/home/screen_${isLight ? 'light' : 'dark'}_${
                    index + 1
                  }.png`}
                  sx={{ width: { xs: '80%', sm: '100%' }, borderRadius: 5 }}
                />
              </ScreenStyle>
            ))}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
