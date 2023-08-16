import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';

const products = [
    {
        id: "1",
        name: "김철수",
        post: "팀장",
        pname: "건설 안전관리 팀장",
        priority: "일반",
        pbg: "success.main",
        pnum: "010-1234-5678",
    },
    {
        id: "2",
        name: "박민수",
        post: "대리",
        pname: "안전 세부 관리자",
        priority: "일반",
        pbg: "success.main",
        pnum: "010-4924-5992",
    },
    {
        id: "3",
        name: "김지은",
        post: "사원",
        pname: "집중 안전 교육 강사",
        priority: "일반",
        pbg: "success.main",
        pnum: "010-1243-4124",
    },
    {
        id: "4",
        name: "이서아",
        post: "사원",
        pname: "불시 안전 점검 관리자",
        priority: "일반",
        pbg: "success.main",
        pnum: "010-4565-4122",
    },
    {
        id: "5",
        name: "이수혁",
        post: "의무 소방대원",
        pname: "소방사",
        priority: "비상 연락망",
        pbg: "error.main",
        pnum: "010-1199-1199",
    },
];


const Contact = () => {
    return (

        <DashboardCard title="주요 연락망 및 비상 연락망">
            <Box sx={{overflow: 'auto', width: {xs: '280px', sm: 'auto'}}}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Id
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Assigned
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Position
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    classification
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Phone Number
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.post}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.pname}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.priority}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{product.pnum}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default Contact;
