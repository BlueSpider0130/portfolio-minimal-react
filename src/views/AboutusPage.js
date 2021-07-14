// material
import { experimentalStyled as styled } from '@material-ui/core/styles';

// components
import Page from '../components/Page';
import LandingFooter from '../components/LandingFooter';
import { AboutusPlat } from '../components/aboutus';
import { CarouselThumbnail } from '../components/carousel';

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
      {/* <AboutusHero /> */}
      <ContentStyle>
        <CarouselThumbnail />
        <AboutusPlat />
        <LandingFooter />
      </ContentStyle>
    </RootStyle>
  );
}
