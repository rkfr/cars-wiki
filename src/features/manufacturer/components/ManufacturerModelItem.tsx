import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { API_CONFIG } from '../../../config';
import type { ManufacturerModel } from '../types';

type Props = {
  model: ManufacturerModel;
};

export function ManufacturerModelItem({ model }: Props) {
  const src: string = `${API_CONFIG.contentBasePath}/${model.image.id + model.image.ext}`;
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CardMedia
        sx={{
          height: 90,
          width: 120,
        }}
        image={src}
        title={model.image.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="p">
          {model.name}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ color: 'text.secondary' }}
        >
          {model.productionYears}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/generation/${model.id}`)}
        >
          Show
        </Button>
      </CardActions>
    </Card>
  );
}
