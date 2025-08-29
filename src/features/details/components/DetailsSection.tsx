import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { type ModelDetaisSection } from '../types';
import { toSectionArray } from '../utils';

type Props = {
  section: ModelDetaisSection;
};

export function DetailsSection({ section }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        {toSectionArray(section).map((cell) => (
          <TableRow>
            <TableCell>{cell.key}</TableCell>
            <TableCell>{cell.value}</TableCell>
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  );
}
