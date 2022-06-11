import { useState } from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Input } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'; 
import Button from '@mui/material/Button'; 
import FormControl from '@mui/material/FormControl';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const createData = (time, name, author, price, status) => {
  return { time, name, author, price, status };
}

const rows = [
  createData('12/12/2021', 'Frozen yoghurt', 'Johnny Depp', '20.000 đ', 'Đã nghe'),
  createData('12/12/2021', 'Ice cream sandwich', 'Johnny Depp', '20.000 đ', 'Chưa nghe'),
  createData('12/12/2021', 'Eclair', 'Johnny Depp', '20.000 đ', 'Chưa nghe'),
  createData('12/12/2021', 'Cupcake', 'Johnny Depp', '20.000 đ', 'Chưa nghe'),
  createData('12/12/2021', 'Gingerbread', 'Johnny Depp', '20.000 đ', 'Chưa nghe'),
];

const Index = () => {
  const [status, setStatus] = useState(1);
  return (
    <>
      <Container sx={{ marginBottom: 4 }} component="main" maxWidth="lg">
        <Box sx={{ height: "auto", width: "100%", padding: "24px 0px" }}>
          <p className="text-xl font-medium pb-4 leading-8">
            Lịch sử giao dịch
          </p>
          <div class="flex items-end justify-end">
            <Input placeholder="Ngày bắt đầu" />
            <div className="pr-4" />
            <Input placeholder="Ngày kết thúc" />
            <div className="pr-4" />
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={status}
                label="Trạng thái"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value={1}>Chưa đọc</MenuItem>
                <MenuItem value={2}>Đã đọc</MenuItem>
              </Select>
            </FormControl>
            <div className="pr-4" />
            <Button
              startIcon={<FilterAltIcon />}
              size="large"
              variant="outlined"
            >
              Lọc
            </Button>
          </div>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Thời gian</TableCell>
                <TableCell align="left">Tên sách</TableCell>
                <TableCell align="left">Tác giả</TableCell>
                <TableCell align="left">Số tiền</TableCell>
                <TableCell align="left">Trạng thái</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.time}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.author}</TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="left">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={10}
          rowsPerPage={5}
          page={1}
        />
      </Container>
    </>
  );
};
export default Index;

Index.layout = Layout;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_CONTAINER_API_URL}/books/slug/${slug}`
  );
  if (res.status == 200) {
    if (res.data.success == true) {
      const book = res.data.data;
      // if (book.isVip == true) {
      //   return {
      //     props: {
      //       book,
      //       audios: {},
      //     },
      //   };
      // }
      const res2 = await axios.get(
        `${process.env.NEXT_PUBLIC_CONTAINER_API_URL}/books/${book._id}/audios`
      );
      if (res2.status == 200) {
        if (res2.data.success == true) {
          const audios = res2.data.data;
          return {
            props: {
              book,
              audios,
            },
          };
        }
      }
    }
  }
  return {
    props: {
      book: {},
      audios: {},
    },
  };
}
