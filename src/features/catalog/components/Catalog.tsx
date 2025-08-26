import { useEffect, useState } from 'react';
import { CatalogBrand } from './CatalogBrand';
import type { CatalogItem, CatalogSection } from '../types';
import { Box, Grid, Typography } from '@mui/material';
import { API_CONFIG } from '../../../config';

export function Catalog() {
    const [catalog, setCatalog] = useState<CatalogSection[]>([]);

    useEffect(() => {
        fetch(`${API_CONFIG.apiBasePath}/catalog`)
            .then(res => res.json())
            .then(data => setCatalog(data));
    }, []);

    return (
        <div>
            {catalog.map((section: CatalogSection) => 
            <Box key={section.letter} component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                <Grid container>
                    <Grid size={12}>
                        <Typography variant="h3" component="h3">
                            {section.letter}
                        </Typography>
                    </Grid>

                    <Grid container size={12} spacing={2}>
                        {section.brands.map((brand: CatalogItem) =>
                            <Grid key={brand.id} size={{ xs: 6, sm: 4, md: 2, lg: 1 }}>
                                <CatalogBrand brand={brand} />
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Box>)}
        </div>
    );
}
