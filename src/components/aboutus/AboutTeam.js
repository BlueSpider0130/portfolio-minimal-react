// import faker from 'faker';
import { useRef } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
// import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
// material
import { useTheme } from '@material-ui/core/styles';
import {
  Box,
  Card,
  Container,
  Typography,
  IconButton
} from '@material-ui/core';
//
import {
  varFadeIn,
  varFadeInUp,
  MotionInView,
  varFadeInDown
} from '../animate';
import { CarouselControlsArrowsBasic2 } from '../carousel';

// ----------------------------------------------------------------------

const MEMBERS = [
  {
    name: 'Xan',
    role: 'UI Designer',
    avatar: '/static/members/Xan.jpg'
  },
  {
    name: 'Allan',
    role: 'UI/UX Designer',
    avatar: '/static/members/Allan.jpg'
  },
  {
    name: 'Nicholas',
    role: 'Full Stack Developer',
    avatar: '/static/members/Nicholas.jpg'
  },
  {
    name: 'Marcus',
    role: 'Leader',
    avatar: '/static/members/Marcus.jpg'
  },
  {
    name: 'Alexis',
    role: 'Leader',
    avatar: '/static/members/Alexis.jpg'
  },
  {
    name: 'Rishabh',
    role: 'Leader',
    avatar: '/static/members/Rishabh.jpg'
  }
];

// ----------------------------------------------------------------------

MemberCard.propTypes = {
  member: PropTypes.object
};

function MemberCard({ member }) {
  const { name, role, avatar } = member;
  return (
    <Card key={name} sx={{ p: 1, mx: 1.5 }}>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        {role}
      </Typography>
      <Box
        component="img"
        src={avatar}
        sx={{ width: '100%', borderRadius: 1.5 }}
      />
      <Box sx={{ mt: 2, mb: 1 }}>
        {[facebookFill, instagramFilled, linkedinFill, twitterFill].map(
          (social, index) => (
            <IconButton key={index}>
              <Icon icon={social} width={20} height={20} />
            </IconButton>
          )
        )}
      </Box>
    </Card>
  );
}

export default function AboutTeam() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    speed: 500,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '0 80px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
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
    <Container maxWidth="lg" sx={{ pb: 10, textAlign: 'center' }}>
      <MotionInView variants={varFadeInDown}>
        <Typography
          component="p"
          variant="overline"
          sx={{ mb: 2, color: 'text.secondary' }}
        >
          Dream team
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Great team is the key
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography
          sx={{
            mb: 10,
            mx: 'auto',
            maxWidth: 630,
            color: (theme) =>
              theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'
          }}
        >
          We do not deliver anything but perfection. <br />
          We create clients, which creates clients. <br />
          We give the respect we demand.
        </Typography>
      </MotionInView>

      <Box sx={{ position: 'relative' }}>
        <Slider ref={carouselRef} {...settings}>
          {MEMBERS.map((member) => (
            <MotionInView key={member.name} variants={varFadeIn}>
              <MemberCard key={member.name} member={member} />
            </MotionInView>
          ))}
        </Slider>
        <CarouselControlsArrowsBasic2
          onNext={handleNext}
          onPrevious={handlePrevious}
          sx={{ transform: 'translateY(-64px)' }}
        />
      </Box>
      {/* <Button
        variant="outlined"
        color="inherit"
        size="large"
        endIcon={<Icon icon={roundArrowRightAlt} width={24} height={24} />}
        sx={{ mx: 'auto' }}
      >
        View all team members
      </Button> */}
    </Container>
  );
}
