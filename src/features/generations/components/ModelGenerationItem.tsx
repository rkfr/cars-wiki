import {
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { API_CONFIG } from '../../../config';
import type { ModelGeneration } from '../types';

type Props = {
  generation: ModelGeneration;
};

function ModelGenerationItem({ generation }: Props) {
  const src: string = `${API_CONFIG.contentBasePath}/${generation.image.id + generation.image.ext}`;
  const navigate = useNavigate();
  console.log(generation);

  return (
    <CardActionArea
      sx={{
        maxWidth: 460,
        '&[data-active]': {
          backgroundColor: 'action.selected',
          '&:hover': {
            backgroundColor: 'action.selectedHover',
          },
        },
      }}
      onClick={() => navigate(`/equipment/${generation.id}`)}
      data-active={generation.inProduction ? '' : undefined}
    >
      <Card sx={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent
            sx={{
              flex: '1 0 auto',
              textAlign: 'center',
            }}
          >
            <Badge
              color={generation.inProduction ? 'success' : 'secondary'}
              badgeContent=""
            >
              <CardMedia
                component="img"
                sx={{
                  width: 120,
                  height: 90,
                }}
                image={src}
                alt={generation.image.alt}
              />
            </Badge>

            <Typography variant="subtitle1" component="div">
              {generation.productionYears}
            </Typography>
          </CardContent>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h6">
              {generation.name}
            </Typography>

            {generation?.powerInfo ? (
              <Typography variant="subtitle1" component="div">
                {generation.powerInfo}
              </Typography>
            ) : null}
            {generation?.bodyType ? (
              <Typography variant="subtitle1" component="div">
                {generation.bodyType}
              </Typography>
            ) : null}
            {generation?.dimensionsInfo ? (
              <Typography variant="subtitle1" component="div">
                {generation.dimensionsInfo}
              </Typography>
            ) : null}
          </CardContent>
        </Box>
      </Card>
    </CardActionArea>
  );
}

export default ModelGenerationItem;
