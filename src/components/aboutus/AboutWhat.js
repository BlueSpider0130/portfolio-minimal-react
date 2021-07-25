import faker from 'faker';
import PropTypes from 'prop-types';
// import { Icon } from '@iconify/react';
// import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
// material
import {
  alpha,
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Container,
  Typography,
  LinearProgress
} from '@material-ui/core';
// utils
import { fPercent } from '../../utils/formatNumber';
//
import { varFadeInUp, varFadeInRight, MotionInView } from '../animate';
import { MHidden } from '../@material-extend';

// ----------------------------------------------------------------------

const SKILLS = [
  {
    label: 'Development',
    value: faker.datatype.number({ min: 90, max: 99, precision: 0.1 })
  },
  {
    label: 'Design',
    value: faker.datatype.number({ min: 90, max: 99, precision: 0.1 })
  },
  {
    label: 'Marketing',
    value: faker.datatype.number({ min: 90, max: 99, precision: 0.1 })
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.object
};

function ProgressItem({ progress }) {
  const { label, value } = progress;
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' }
        }}
      />
    </Box>
  );
}

export default function AboutWhat() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <MHidden width="mdDown">
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <MotionInView variants={varFadeInUp}>
                    <Box
                      component="img"
                      src="/static/members/what-1.jpg"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow
                      }}
                    />
                  </MotionInView>
                </Grid>
                <Grid item xs={6}>
                  <MotionInView variants={varFadeInUp}>
                    <Box
                      component="img"
                      src="/static/members/what-2.jpg"
                      sx={{ borderRadius: 2 }}
                    />
                  </MotionInView>
                </Grid>
              </Grid>
            </Grid>
          </MHidden>

          <Grid item xs={12} md={6} lg={5}>
            <MotionInView variants={varFadeInRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Who we are?
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'text.secondary'
                      : 'common.white'
                }}
              >
                We are a core group of hard working and driven professionals
                with a passion for innovation and product development. We have a
                diverse team with a lot of knowledge and varied experiences. We
                do everything we can to be in front of innovation and offer the
                latest services and technology available. We always strive to
                improve our self and try to focus on improving our self as
                individuals and as a team. We offer a various portfolio of
                services and following the products from ideas to mass
                production and we are very enthusiastic about providing the
                newest services and solutions.
              </Typography>
            </MotionInView>

            <Box sx={{ my: 5 }}>
              {SKILLS.map((progress) => (
                <MotionInView key={progress.label} variants={varFadeInRight}>
                  <ProgressItem progress={progress} />
                </MotionInView>
              ))}
            </Box>

            {/* <MotionInView variants={varFadeInRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={
                  <Icon icon={roundArrowRightAlt} width={24} height={24} />
                }
              >
                Check out our work
              </Button>
            </MotionInView> */}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
