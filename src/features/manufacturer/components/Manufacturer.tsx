import { Box, Grid, Typography } from '@mui/material';
import { useLoaderData } from 'react-router';
import type { LoaderResult } from '../../../types';
import type { ManufacturerModel, ManufacturerSection } from '../types';
import { ManufacturerModelItem } from './ManufacturerModelItem';

export function Manufacturer() {
  const { data: manufacturer } =
    useLoaderData<LoaderResult<ManufacturerSection[]>>();

  console.log(manufacturer);

  return (
    <div>
      {manufacturer.map((section: ManufacturerSection) => (
        <Box
          key={section.letter}
          component="section"
          sx={{
            p: 2,
            border: '1px dashed grey',
          }}
        >
          <Grid container>
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
                    xs: 6,
                    sm: 4,
                    md: 2,
                    lg: 1,
                  }}
                >
                  <ManufacturerModelItem model={model} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      ))}
    </div>
  );
}

export default Manufacturer;
