import useSWR from 'swr';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import AddOutlined from '@mui/icons-material/AddOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import { IProduct } from '@/interfaces';
import { AdminLayout } from '@/components/layouts';


const columns: GridColDef[] = [
  {
    field: 'img',
    headerName: 'Foto',
    renderCell: ({ row }: GridRenderCellParams) => {
      console.log(row)
      return (
        <a href={`/product/${row.slug}`} target="_blank" rel="noreferrer">
          <CardMedia
            component='img'
            alt={row.title}
            className='fadeIn'
            // image={`/${row.img.replace("undefinedproducts","products")}`}
          image={row.img}
          />
        </a>
      );
    },
  },
  {
    field: 'title',
    headerName: 'Título',
    width: 250,
    renderCell: ({ row }: GridRenderCellParams) => {
      return (
        <Link component={NextLink} href={`/admin/products/${row.slug}`} underline='always'>
          {row.title}
        </Link>
      );
    },
  },
  { field: 'gender', headerName: 'Género' },
  { field: 'type', headerName: 'Tipo' },
  { field: 'inStock', headerName: 'Inventario' },
  { field: 'price', headerName: 'Precio' },
  { field: 'sizes', headerName: 'Tallas', width: 250 },
];

export const ProductsPage = () => {
  const { data, error } = useSWR<IProduct[]>('/api/admin/products');

  if (!data && !error) {
    return <></>;
  }

  const rows = data!.map(product => ({
    id: product._id,
    img: product.images[0],
    title: product.title,
    gender: product.gender,
    type: product.type,
    inStock: product.inStock,
    price: product.price,
    sizes: product.sizes.join(', '),
    slug: product.slug,
  }));

  return (
    <AdminLayout

      title={`Productos (${data?.length})`}
      subTitle='Mantenimiento de productos'
      icon={<CategoryOutlinedIcon />}
    >
      <Box display='flex' justifyContent='end' sx={{ mb: 2 }}>
        <Button

          startIcon={<AddOutlined />}
          color='secondary'
          href='/admin/products/new'
        >
          Crear Producto
        </Button>
      </Box>
      <Grid container className='fadeIn'>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            columns={columns}
            rows={rows}
            pageSizeOptions={[10,50,100]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10, page: 0 },
              },
            }}
          />
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default ProductsPage;