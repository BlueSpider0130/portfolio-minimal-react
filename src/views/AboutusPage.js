// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import LandingFooter from '../components/LandingFooter';
// components
import Page from '../components/Page';
import {
  AboutHero,
  AboutWhat,
  // AboutTeam,
  AboutVision
  // AboutTestimonials
} from '../components/aboutus';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(() => ({
  // paddingTop: theme.spacing(8),
  height: '100%'
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <RootStyle title="About us | Minimal-UI">
      <AboutHero />
      <AboutWhat />
      <AboutVision />
      <Divider
        orientation="vertical"
        sx={{ my: 10, mx: 'auto', width: 2, height: 40 }}
      />
      {/* <AboutTeam /> */}
      {/* <AboutTestimonials /> */}
      <LandingFooter />
    </RootStyle>
  );
}
