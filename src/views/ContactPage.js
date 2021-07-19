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
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8127.909472089299!2d10.415106451304082!3d59.3834047850597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646b5060da6a2bb%3A0x144846755fc2ccfb!2s3185%20Skoppum%2C%20Norway!5e0!3m2!1sen!2sus!4v1626701959276!5m2!1sen!2sus"
              width="100%"
              height="600"
              // style="border:0;"
              allowFullScreen=""
              loading="lazy"
              title="map"
            /> */}
          </Grid>
        </Grid>

        <LandingFooter />
      </Container>
    </RootStyle>
  );
}
