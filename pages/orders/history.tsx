import NextLink from 'next/link';

import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { ShopLayout } from '../../components/layouts';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información si está pagada la orden o no',
        width: 200,
        renderCell: (params: GridRenderCellParams) => {
            return (
                params.row.paid
                    ? <Chip color="success" label="Pagada" variant='outlined' />
                    : <Chip color="error" label="No pagada" variant='outlined' />
            )
        }
    },
    {
        field: 'orden',
        headerName: 'Ver orden',
        width: 200,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
            return (
                    <Link href={`/orders/${ params.row.id }`} underline='always'>
                        Ver orden
                    </Link>
            )
        }
    }
];


const rows = [
    { id: 1, paid: true, fullname: 'Andy Martel' },
    { id: 2, paid: false, fullname: 'Lianet Morin' },
    { id: 3, paid: true, fullname: 'Leticia Carpio' },
    { id: 4, paid: false, fullname: 'Clara Martha' },
    { id: 5, paid: false, fullname: 'Kevin Serrano' },
    { id: 6, paid: true, fullname: 'Zidane Zidane' },
]


const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
        <Typography variant='h1' component='h1'>Historial de ordenes</Typography>


        <Grid container>
            <Grid item xl={10} xs={12} sx={{ height:650, width: '100%' }}>
                <DataGrid 
                    rows={ rows }
                    columns={ columns }
                    autoPageSize
                    // pageSize={ 10 }
                    // rowsPerPageOptions={ [10] }
                />

            </Grid>
        </Grid>

    </ShopLayout>
  )
}

export default HistoryPage