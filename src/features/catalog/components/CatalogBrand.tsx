import type { CatalogItem } from '../types';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';

import { API_CONFIG } from '../../../config';

interface CatalogBradProps {
  brand: CatalogItem;
}

export function CatalogBrand({ brand }: CatalogBradProps) {
  const src: string = `${API_CONFIG.contentBasePath}/${brand.logo.id + brand.logo.ext}`;

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
        <Button size="small">Show</Button>
      </CardActions>
    </Card>
  );
}
