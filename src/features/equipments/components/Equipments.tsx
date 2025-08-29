import { Box, Grid, Typography } from '@mui/material';
import { useLoaderData } from 'react-router';
import type { LoaderResult } from '../../../types';
import type { ModelEquipmentPage } from '../types';
import { EquipmentListItem } from './EqiopmentListItem';
import { EquipmentsGallery } from './EquipmentsGallery';

export function Equipments() {
  const { data: equipments } =
    useLoaderData<LoaderResult<ModelEquipmentPage>>();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        paddingTop: 4,
        padding: '20px',
      }}
    >
      <div>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
          {equipments.title}
        </Typography>
      </div>

      <EquipmentsGallery images={equipments.gallery} />

      <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center">
        {equipments.equipments.map((item) => (
          <Grid
            container
            justifyContent="center"
            key={item.id}
            size={{
              xs: 12,
              md: 6,
              lg: 3,
            }}
          >
            <EquipmentListItem equipment={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
