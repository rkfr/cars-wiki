import { Grid, ImageList, ImageListItem } from '@mui/material';
import { API_CONFIG } from '../../../config';
import type { Picture } from '../../../types';

type Props = {
  images: Picture[];
};

export function EquipmentsGallery({ images }: Props) {
  return (
    <Grid container justifyContent="center">
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item) => (
          <ImageListItem key={item.id}>
            <img
              width={90}
              height={120}
              src={`${API_CONFIG.contentBasePath}/${item.id + item.ext}`}
              alt={item.ext}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}
