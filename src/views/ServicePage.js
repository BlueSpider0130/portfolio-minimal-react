// material
import { experimentalStyled as styled } from '@material-ui/core/styles';

import { Card, CardHeader, CardContent } from '@material-ui/core';
// components
import Page from '../components/Page';
import { ServiceHero } from '../components/service';
import LandingFooter from '../components/LandingFooter';
import { CarouselBasic1, CarouselCenterMode } from '../components/carousel';

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
    <RootStyle title="Hannevig | Solutions" id="Service">
      <ServiceHero />
      <ContentStyle>
        <CarouselCenterMode />
        <LandingFooter />
      </ContentStyle>
    </RootStyle>
  );
}
