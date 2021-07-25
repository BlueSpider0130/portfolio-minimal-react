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
          <Grid item xs={12} md={12}>
            <ContactForm />
          </Grid>
          {/* <Grid item xs={12} md={6}></Grid> */}
        </Grid>

        <LandingFooter />
      </Container>
    </RootStyle>
  );
}
