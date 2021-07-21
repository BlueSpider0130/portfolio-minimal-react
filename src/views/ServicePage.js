// material
import { experimentalStyled as styled } from '@material-ui/core/styles';

// components
import Page from '../components/Page';
import { ServiceHero, ServicePlat } from '../components/service';
import LandingFooter from '../components/LandingFooter';
import { CarouselCenterMode } from '../components/carousel';

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

export default function ServicePage() {
  return (
    <RootStyle title="Hannevig | Solutions" id="move_top">
      <ServiceHero />
      <ContentStyle>
        <ServicePlat />
        <CarouselCenterMode />
        <LandingFooter />
      </ContentStyle>
    </RootStyle>
  );
}
