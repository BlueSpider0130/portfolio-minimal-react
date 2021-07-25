// material
import { Button, Typography, TextField, Stack } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../animate';
import UploadSingleFile from './UploadSingleFile';

// ----------------------------------------------------------------------

export default function ContactForm() {
  return (
    <Stack spacing={5}>
      <MotionInView variants={varFadeInUp}>
        <Typography variant="h3">
          Looking forward to see your project
        </Typography>
      </MotionInView>

      <Stack spacing={3}>
        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="Name" />
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="Email" />
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="Subject" />
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <TextField
            fullWidth
            label="Enter your message here."
            multiline
            rows={4}
          />
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <UploadSingleFile />
        </MotionInView>
      </Stack>

      <MotionInView variants={varFadeInUp}>
        <Button size="large" variant="contained">
          Submit Now
        </Button>
      </MotionInView>
    </Stack>
  );
}
