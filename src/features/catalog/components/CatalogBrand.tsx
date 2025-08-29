import type { CatalogItem } from '../types';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router';
import { API_CONFIG } from '../../../config';

type Props = {
  brand: CatalogItem;
};

export function CatalogManufacturer({ brand }: Props) {
  const src: string = `${API_CONFIG.contentBasePath}/${brand.logo.id + brand.logo.ext}`;
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 180,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CardMedia
        sx={{
          height: 40,
          width: 40,
        }}
        image={src}
        title={brand.logo.alt}
      />
      <CardContent>
        <Typography gutterBottom component="p">
          {brand.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/manufacturer/${brand.id}`)}
        >
          Show
        </Button>
      </CardActions>
    </Card>
  );
}
