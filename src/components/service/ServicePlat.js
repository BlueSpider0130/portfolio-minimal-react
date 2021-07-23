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
    img: '/static/service/proto.png',
    title: 'Prototype design & Development',
    description:
      'To provide a good result. We need to understand the projects and come up with our own ideas. We go in-debt and try to understand what our clients are to achieve with the products. We do what we can to have as cost and time effective process as possible by spending time on understanding the needs and requirements early on. '
  },
  {
    icon: '/static/icons/ic_code.svg',
    img: '/static/service/vr.png',
    title: 'AR & VR',
    description:
      'To get a good product, we need to explore different ideas and concepts. We provide a visual version of the concept. We create an easy accessible version of the concepts. We work together with our clients to discover new and unexplored opportunities. '
  },
  {
    icon: '/static/brand/logo_single.svg',
    img: '/static/service/engineering.png',
    title: 'Engineering',
    description:
      'We strive to make products and solutions above the expectations of our clients. We provide a working prototype. We test the functionalities; evaluate different solutions, material and solutions. We work together our clients to constantly improve the  prototype towards perfection.'
  },
  {
    icon: '/static/icons/ic_design.svg',
    img: '/static/service/manufacturing.png',
    title: 'Manufacturing',
    description:
      'We develop products and solutions in lined with what the market needs. We thoroughly test the products and solutions towards the target group to ensure the optimal result and improving the product.'
  },
  {
    icon: '/static/icons/ic_design.svg',
    img: '/static/service/team.png',
    title: 'Recruitment and team management',
    description:
      'We establish and maintain manufacturing. We find the most suitable manufacturer; we ensure manufacturing is accoorandce to the requirements '
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
              Services listed
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
      </Container>
    </RootStyle>
  );
}
