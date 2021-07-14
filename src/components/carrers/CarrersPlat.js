// material
import {
  alpha,
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  Container,
  Typography,
  useMediaQuery
} from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/icons/ic_design.svg',
    img: '/static/home/carrers-ar-dev.png',
    title: 'AR & VR Development',
    description: ''
  },
  {
    icon: '/static/icons/ic_code.svg',
    img: '/static/home/carrers-mach.png',
    title: 'Mechanical engineer',
    description: ''
  },
  {
    icon: '/static/brand/logo_single.svg',
    img: '/static/home/carrers-ele.png',
    title: 'Electrical engineer',
    description: ''
  },
  {
    icon: '/static/icons/ic_design.svg',
    img: '/static/home/carrers-indudesign.png',
    title: 'Industrial designer',
    description: ''
  },
  {
    icon: '/static/icons/ic_design.svg',
    img: '/static/home/carrers-manage.png',
    title: 'Sales and project management',
    description: ''
  }
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const MotionStyle = styled('div')(() => ({
  height: '100%'
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    height: '100%',
    maxWidth: 380,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 1),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    '&.cardLeft': {
      // [theme.breakpoints.up('md')]: { marginTop: -40 }
    },
    '&.cardCenter': {
      // [theme.breakpoints.up('md')]: {
      //   marginTop: -80,
      //   backgroundColor: theme.palette.background.paper,
      //   boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
      //   '&:before': {
      //     top: 0,
      //     left: 0,
      //     right: 0,
      //     bottom: 0,
      //     zIndex: -1,
      //     content: "''",
      //     margin: 'auto',
      //     position: 'absolute',
      //     width: 'calc(100% - 40px)',
      //     height: 'calc(100% - 40px)',
      //     borderRadius: theme.shape.borderRadiusMd,
      //     backgroundColor: theme.palette.background.paper,
      //     boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
      //   }
      // }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  // width: '100%',
  // height: '100%',
  margin: 'auto',
  marginBottom: theme.spacing(10),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 10, md: 25 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              gutterBottom
              variant="overline"
              align="center"
              sx={{ color: 'text.secondary', display: 'block' }}
            >
              Hannevig Solutions
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" align="center">
              Job listings
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h4" align="center">
              We always strive to work with people striving towards excellence.
              We are constantly searching for people, which are looking to excel
              and be the best in their field. We looking for team players, which
              want to be part of dynamic team which strives to improve and be
              ahead.
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index) => (
            <Grid key={card.title} item xs={12} md={4}>
              <MotionStyle variants={varFadeInUp}>
                <CardStyle
                  className={
                    (index === 0 && 'cardLeft') || (index === 1 && 'cardCenter')
                  }
                >
                  {/* <CardMedia image={card.img} title="Paella dish" /> */}
                  <CardIconStyle
                    src={card.img}
                    alt={card.title}
                    sx={{
                      ...(index === 0 && {
                        filter: (theme) => shadowIcon(theme.palette.info.main)
                      }),
                      ...(index === 1 && {
                        filter: (theme) => shadowIcon(theme.palette.error.main)
                      })
                    }}
                  />
                  <Typography variant="h5" paragraph>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    {card.description}
                  </Typography>
                </CardStyle>
              </MotionStyle>
            </Grid>
          ))}
        </Grid>
        <MotionInView variants={varFadeInDown}>
          <Typography variant="h4" align="center">
            We are looking for talents we can help develop and grow together
            with us. We are looking If you are driven to be the best, willing to
            work hard and passionate about innovation you might be our next team
            player. We need positive, productive, result orientated people,
            which takes on responsibility and deliver.
          </Typography>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
