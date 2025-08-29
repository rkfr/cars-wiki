import { Box, Grid } from '@mui/material';
import { useLoaderData } from 'react-router';
import type { LoaderResult } from '../../../types';
import type { ModelGeneration } from '../types';
import ModelGenerationItem from './ModelGenerationItem';

function Generations() {
  const { data: generations } =
    useLoaderData<LoaderResult<ModelGeneration[]>>();

  return (
    <Grid container justifyContent="center">
      {generations.map((item) => (
        <Box
          key={item.id}
          component="section"
          sx={{
            p: 2,
          }}
        >
          <ModelGenerationItem generation={item} />
        </Box>
      ))}
    </Grid>
  );
}

export default Generations;
