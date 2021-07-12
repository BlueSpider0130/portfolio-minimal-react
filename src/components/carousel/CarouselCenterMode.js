// import faker from 'faker';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import PropTypes from 'prop-types';
import { useRef } from 'react';
// import { Icon } from '@iconify/react';
// import { Link as RouterLink } from 'react-router-dom';
// import arrowForwardFill from '@iconify/icons-eva/arrow-forward-fill';
// material
import {
  alpha,
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import { Paper, Typography, CardContent } from '@material-ui/core';
// utils
import { mockImgFeed } from '../../utils/mockImages';
//
import { CarouselControlsArrowsBasic2 } from './controls';
import { varFadeInUp, MotionInView } from '../animate';

// ----------------------------------------------------------------------

// const CAROUSELS = [...Array(5)].map((item, index) => {
//   const setIndex = index + 1;
//   return {
//     title: faker.name.title(),
//     description: faker.lorem.paragraphs(),
//     image: mockImgFeed(setIndex)
//   };
// });

const CAROUSELS = [
  {
    title: 'Porotype design & Development',
    description: 'faker.lorem.paragraphs()',
    image: mockImgFeed(1)
  },
  {
    title: 'AR & VR',
    description: 'faker.lorem.paragraphs()',
    image: mockImgFeed(2)
  },
  {
    title: 'Engineering',
    description: 'faker.lorem.paragraphs()',
    image: mockImgFeed(3)
  },
  {
    title: 'Manufacturing',
    description: 'faker.lorem.paragraphs()',
    image: mockImgFeed(4)
  },
  {
    title: 'Recruitment & Team management',
    description: 'faker.lorem.paragraphs()',
    image: mockImgFeed(5)
  }
];

const RootStyle = styled('div')(() => ({
  overflow: 'hidden',
  position: 'relative',
  '&:before, &:after': {
    top: 0,
    left: 0,
    zIndex: 8,
    width: 48,
    content: "''",
    height: '100%',
    display: 'none',
    position: 'absolute'
  },
  '&:after': {
    right: 0,
    left: 'auto',
    transform: 'scaleX(-1)'
  }
}));

const CarouselImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  transition: theme.transitions.create('all')
}));

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object
};

function CarouselItem({ item }) {
  const { image, title } = item;

  return (
    <Paper
      sx={{
        mx: 1,
        borderRadius: 2,
        overflow: 'hidden',
        paddingTop: 'calc(16 /9 * 100%)',
        position: 'relative',
        '&:hover img': {
          width: '120%',
          height: '120%'
        }
      }}
    >
      <CarouselImgStyle alt={title} src={image} />
      <CardContent
        sx={{
          bottom: 0,
          zIndex: 9,
          width: '100%',
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
          backgroundImage: (theme) =>
            `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(
              theme.palette.grey[900],
              0
            )} 100%)`
        }}
      >
        <Typography variant="h4" paragraph>
          {title}
        </Typography>
        {/* <Link
          to="#"
          color="inherit"
          variant="overline"
          component={RouterLink}
          sx={{
            opacity: 0.72,
            alignItems: 'center',
            display: 'inline-flex',
            transition: (theme) => theme.transitions.create('opacity'),
            '&:hover': { opacity: 1 }
          }}
        >
          learn More
          <Box
            component={Icon}
            icon={arrowForwardFill}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </Link> */}
      </CardContent>
    </Paper>
  );
}

export default function CarouselCenterMode() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0' }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <RootStyle>
      <MotionInView variants={varFadeInUp}>
        <Typography
          gutterBottom
          variant="overline"
          align="center"
          sx={{
            color: 'text.secondary',
            display: 'block',
            fontSize: 55,
            marginTop: 5
          }}
        >
          Here is our service
        </Typography>
      </MotionInView>
      <Slider
        ref={carouselRef}
        {...settings}
        sx={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          [theme.breakpoints.up(480)]: {
            display: 'block'
          }
        }}
      >
        {CAROUSELS.map((item) => (
          <CarouselItem key={item.title} item={item} />
        ))}
      </Slider>
      <CarouselControlsArrowsBasic2
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </RootStyle>
  );
}
