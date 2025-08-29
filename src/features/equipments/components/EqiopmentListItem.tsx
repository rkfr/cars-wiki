import {
  Badge,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router';
import type { ModelEquipment } from '../types';

type Props = {
  equipment: ModelEquipment;
};

export function EquipmentListItem({ equipment }: Props) {
  const navigate = useNavigate();

  return (
    <CardActionArea
      sx={{
        display: 'flex',
        maxWidth: 460,
        '&[data-active]': {
          backgroundColor: 'action.selected',
          '&:hover': {
            backgroundColor: 'action.selectedHover',
          },
        },
      }}
      onClick={() => navigate(`/details/${equipment.id}`)}
      data-active={equipment.inProduction ? '' : undefined}
    >
      <Card
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <CardContent
          sx={{
            position: 'relative',
          }}
        >
          <Badge
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'top',
            }}
            sx={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              whiteSpace: 'nowrap',
            }}
            color={equipment.inProduction ? 'success' : 'secondary'}
            badgeContent={equipment.productionYears}
          ></Badge>

          <Typography component="div" variant="h6">
            {equipment.description}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
