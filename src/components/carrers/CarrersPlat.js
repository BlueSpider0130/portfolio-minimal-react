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
  Card,
  Container,
  Typography,
  useMediaQuery,
  Button
} from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    need: 'You need to have',
    task: 'Tasks',
    title: 'AR & VR Development',
    tasks:
      'Be in front of new and innovative services.Be part of team and reach goals together with the team.Provide cost effective and time effective services.',
    need_info:
      'Relevant education. Talented and in depended thinking. A proven record of accomplishment and good references. Cost, time and team oriented. Good personal and communication skills. ',
    description:
      'We always open for freethinking and in depended developers with a passion for innovation and new technologies.'
  },
  {
    need: 'You need to have',
    task: 'Tasks',
    img: '/static/home/carrers-mach.png',
    title: 'Mechanical engineer',
    tasks:
      'Understand the requirements of the project together with the team. Provide new and innovative ideas and solutions. Work progressively and proactive towards the team goal. Document report and quality insurance.',
    need_info:
      'A winner mentality and be result orientated. Relevant education.Been part of a team and understand team play. Relevant experience and network.',
    description:
      'We are always open for engineers, which can build solid products over time. We are hoping to find indented high preforming individuals, with a passion for innovation, which can work as a team to achieve high-level results. '
  },
  // {
  //   need: '/static/brand/logo_single.svg',
  //   img: '/static/home/carrers-ele.png',
  //   title: 'Electrical engineer',
  //   tasks: '',
  //   need_info: '',
  //   description: ''
  // },
  {
    need: 'You need to have',
    task: 'Tasks',
    img: '/static/home/carrers-indudesign.png',
    title: 'Industrial designer',
    tasks:
      'Understand the requirements of the project and development. Develop the project together with the project manager and client.Work cost and time efficiently with a respobsilty towards the client and team. Think independently and come up with solution above the clients expectations. Provide a realistic timeframe and reports on progress.',
    need_info:
      'Free and independent mind.Interest and passion for what you the field.Relevant education and experience. ',
    description:
      'We are always open for designers with a passion for what they do and interest for design and solutions.  Which can understand the requirements, explore exiting ideas and work independently. '
  },
  {
    need: 'You need to have',
    task: 'Tasks',
    img: '/static/home/carrers-manage.png',
    title: 'Sales and project management',
    tasks:
      'Find and sell projects. Indebt understand what the goals of the project is about Agree on terms, delivery and costs. Follow the projects up, keep a dialog with the clients and the team involved in the project, and ensure we deliver exactly what is accordance to their needs. Ideally that we deliver above expectations. Follow up relationships post-delivery. ',
    need_info:
      'A solid record of accomplishment and relevant experience. Good client management skills. A good understanding of the projects and the processes.',
    description:
      'We are always open for solid people in sales and project management. We are always looking to develop and grow into new fields and we need a good sales team and project managements to do it. '
  },
  {
    // need: 'Open application for talents',
    title: 'Open application for talents',
    description:
      'We are always looking for talented new team members. If you got talent, driven to be the best, willing to work hard and passionate about creating innovative new products feel free to send us your resume. We are looking for positive, result oriented team members with a winning mentality, which fundamentally understands that if the team wins, they win. '
  }
];

// const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const MotionStyle = styled('div')(() => ({
  // width: '80%',
  height: '100%'
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    height: '100%',
    maxWidth: 1080,
    // minHeight: 440,
    margin: 'auto',
    textAlign: 'left',
    padding: theme.spacing(2, 5, 1),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    }
  };
});

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
          {CARDS.map((card) => (
            <Grid key={card.title} item xs={12} md={12}>
              <MotionStyle variants={varFadeInUp}>
                <CardStyle>
                  <Typography variant="h3" paragraph>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    {card.description}
                  </Typography>
                  <Typography variant="h6" align="right" mt={3}>
                    {card.need}
                  </Typography>
                  <Typography
                    variant="h7"
                    align="center"
                    sx={{ color: 'text.secondary' }}
                  >
                    {card.need_info}
                  </Typography>
                  <Typography variant="h6" align="left" mt={4}>
                    {card.task}
                  </Typography>
                  <Typography
                    variant="h7"
                    align="center"
                    sx={{ color: 'text.secondary' }}
                  >
                    {card.tasks}
                  </Typography>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '15px'
                    }}
                  >
                    <Button
                      sx={{ width: '60%', margin: 'auto' }}
                      size="large"
                      color="inherit"
                      variant="outlined"
                      component={RouterLink}
                      to="/contact"
                    >
                      Apply
                    </Button>
                  </Box>
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
