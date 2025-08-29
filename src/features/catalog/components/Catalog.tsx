import type { CatalogItem, CatalogSection } from '../types';

import { Box, Grid, Typography } from '@mui/material';

import { useLoaderData } from 'react-router';
import type { LoaderResult } from '../../../types';
import { CatalogManufacturer } from './CatalogBrand';

export function Catalog() {
  const { data: catalog } = useLoaderData<LoaderResult<CatalogSection[]>>();

  return (
    <div>
      {catalog.map((section: CatalogSection) => (
        <Box key={section.letter} component="section">
          <Grid container>
            <Grid size={12}>
              <Typography variant="h3" component="h3">
                {section.letter}
              </Typography>
            </Grid>

            <Grid container size={12} spacing={2}>
              {section.brands.map((brand: CatalogItem) => (
                <Grid
                  key={brand.id}
                  size={{
                    xs: 6,
                    sm: 4,
                    lg: 2,
                  }}
                >
                  <CatalogManufacturer brand={brand} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      ))}
    </div>
  );
}
