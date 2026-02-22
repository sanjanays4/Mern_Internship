import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Category } from '@mui/icons-material';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const products=[
    {name:"Laptop",description:"A high-performance laptop suitable for gaming and work.",price:50000,quantity:2,Category:"Electronics",Image:"flower.jsx"},
    {name:"Mobile",description:"A high-performance smartphone with advanced features.",price:20000,quantity:3,Category:"Electronics",},
    {name:"Tablet",description:"A high-performance tablet suitable for work and entertainment.",price:30000,quantity:1,Category:"Electronics"},
    {name:"Headphones",description:"Wireless headphones with noise cancellation.",price:5000,quantity:4,Category:"Audio"},
    {name:"Smartwatch",description:"A smartwatch with health monitoring features.",price:10000,quantity:2,Category:"Electronics"}
]
export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="left">{product.description}</TableCell>
              <TableCell align="left">{product.price}</TableCell>
              <TableCell align="left">{product.quantity}</TableCell>
              <TableCell align="left">{product.Category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
