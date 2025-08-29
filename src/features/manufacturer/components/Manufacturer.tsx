import { Box, Grid, Typography } from '@mui/material';
import { useLoaderData } from 'react-router';
import type { LoaderResult } from '../../../types';
import type { ManufacturerModel, ManufacturerSection } from '../types';
import { ManufacturerModelItem } from './ManufacturerModelItem';

export function Manufacturer() {
  const { data: manufacturer } =
    useLoaderData<LoaderResult<ManufacturerSection[]>>();

  return (
    <Grid container flexDirection="column" gap={2} spacing={2}>
      {manufacturer.map((section: ManufacturerSection) => (
        <Box key={section.letter} component="section">
          <Grid container spacing={2} size={12}>
            <Grid size={12}>
              <Typography variant="h3" component="h3">
                {section.letter}
              </Typography>
            </Grid>

            <Grid container size={12} spacing={2}>
              {section.models.map((model: ManufacturerModel) => (
                <Grid
                  key={model.id}
                  size={{
                    xs: 12,
                    sm: 6,
                    lg: 2,
                  }}
                >
                  <ManufacturerModelItem model={model} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      ))}
    </Grid>
  );
}

export default Manufacturer;
