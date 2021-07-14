// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
// components
import Page from '../components/Page';
import { ContactHero, ContactForm } from '../components/contact';
import LandingFooter from '../components/LandingFooter';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(() => ({
  // paddingTop: theme.spacing(8),
  // [theme.breakpoints.up('md')]: {
  //   paddingTop: theme.spacing(11)
  // }
  height: '100%'
}));

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <RootStyle title="Contact us | Minimal-UI" id="move_top">
      <ContactHero />

      <Container sx={{ my: 10 }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13276.130589485732!2d-122.42226015576097!3d37.76700381519751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sru!2sru!4v1532164770673"
              width="100%"
              height="600"
              frameBorder="0"
              title="Googel Maps mit Standort und Routenplaner"
              allowFullScreen=""
            />
          </Grid>
        </Grid>

        <LandingFooter />
      </Container>
    </RootStyle>
  );
}
