// material
import { experimentalStyled as styled } from '@material-ui/core/styles';

// components
import Page from '../components/Page';
// import { TimeLine } from '../components/process';
import LandingFooter from '../components/LandingFooter';
import { CarrersHero, CarrersPlat } from '../components/carrers';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function CareersPage() {
  return (
    <RootStyle title="Hannevig | Solutions" id="move_top">
      <CarrersHero />
      <ContentStyle>
        <CarrersPlat />
        <LandingFooter />
      </ContentStyle>
    </RootStyle>
  );
}
