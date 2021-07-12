import { last, slice } from 'lodash';
// material
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  CardContent
} from '@material-ui/core';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineOppositeContent
} from '@material-ui/lab';
import { motion } from 'framer-motion';
import { varFadeIn, varWrapEnter, varFadeInRight } from '../animate';
// routes
// components
import Block from '../Block';
import { MTimelineDot } from '../@material-extend';

function renderImage(src) {
  return <Box component="img" src={src} sx={{ maxWidth: 50 }} />;
}

const TIMELINES = [
  {
    key: 1,
    title: 'Research & Discovery',
    des:
      'To provide a good result. We need to understand the projects and come up with our own ideas. We go in-debt and try to understand what our clients are to achieve with the products. We do what we can to have as cost and time effective process as possible by spending time on understanding the needs and requirements early on.',
    time: 'Research & Discovery',
    icon: renderImage('/static/icons/discovery.svg')
  },
  {
    key: 2,
    title: 'Concept generation & Visualization.',
    des:
      'To get a good product, we need to explore different ideas and concepts. We provide a visual version of the concept. We create an easy accessible version of the concepts. We work together with our clients to discover new and unexplored opportunities. ',
    time: 'Concept generation & Visualization',
    color: 'primary',
    icon: renderImage('/static/icons/eye.svg')
  },
  {
    key: 3,
    title: 'Prototype development',
    des:
      'Morbi mattis ullamcorperWe strive to make products and solutions above the expectations of our clients. We provide a working prototype. We test the functionalities; evaluate different solutions, material and solutions. We work together our clients to constantly improve the  prototype towards perfection.',
    time: 'Prototype development',
    color: 'info',
    icon: renderImage('/static/icons/worker.svg')
  },
  {
    key: 4,
    title: 'User validation & Market testing',
    des:
      'We develop products and solutions in lined with what the market needs. We thoroughly test the products and solutions towards the target group to ensure the optimal result and improving the product.',
    time: 'User validation & Market testing',
    color: 'success',
    icon: renderImage('/static/icons/validation.svg')
  },
  {
    key: 5,
    title: 'Manufacturing establishment & Maintaining',
    des:
      'We establish and maintain manufacturing. We find the most suitable manufacturer; we ensure manufacturing is accoorandce to the requirements.',
    time: 'Manufacturing establishment & Maintaining',
    color: 'warning',
    icon: renderImage('/static/icons/manufacture.svg')
  },
  {
    key: 6,
    title: 'Establishment & Management of an in-house team',
    des:
      'We recruit, develop and manage a cost effective in house development team. We are with our client’s long term and ensure further innovation by developing an in-house development team specialized in the field our clients are with.',
    time: 'Establishment & Management of an in-house team',
    color: 'error',
    icon: renderImage('/static/icons/management.svg')
  }
];
export default function TimelineComponent() {
  return (
    <Grid item xs={12}>
      <Block
        title="Customized"
        sx={{ width: '80%', margin: 'auto', marginTop: 8 }}
      >
        <Timeline align="alternate">
          {TIMELINES.map((item) => (
            <TimelineItem key={item.key}>
              <TimelineOppositeContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.time}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <MTimelineDot color={item.color}>{item.icon}</MTimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  sx={{
                    p: 3,
                    bgcolor: 'grey.50012'
                  }}
                >
                  <Typography variant="subtitle2">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.des}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Block>
    </Grid>
  );
}
