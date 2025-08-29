import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import type { LoaderResult } from '../../../types';
import { ModelDetailsSectionName, type ModelDetailsPage } from '../types';
import { CustomTabPanel } from './CustomTabPanel';
import { DetailsGallery } from './DetailsGallery';
import { DetailsSection } from './DetailsSection';

export function Details() {
  const { data: details } = useLoaderData<LoaderResult<ModelDetailsPage>>();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const sections = Object.values(ModelDetailsSectionName);

  return (
    <Box sx={{ width: '100%' }}>
      <Box margin={4}>
        <Typography variant="h5" textAlign="center">
          {details.title}
        </Typography>
      </Box>

      <Box>
        <Grid container justifyContent="center">
          <DetailsGallery images={details.gallery} />
        </Grid>
      </Box>

      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {sections.map((sectionName) => (
            <Tab label={sectionName} />
          ))}
        </Tabs>
      </Box>

      {sections.map((sectionName, idx) => (
        <CustomTabPanel value={value} index={idx}>
          <DetailsSection section={details.sections[sectionName]} />
        </CustomTabPanel>
      ))}
    </Box>
  );
}
