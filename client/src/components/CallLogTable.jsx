import { useState, useEffect } from "react";
import Overlay from "./Overlay";
import styled from "styled-components";
import axios from 'axios';
import "./abc.css"

const TableContainer = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const Table = styled.table`
  margin-left: 16%;
  margin-right: 16%;
  width: 68%;
  padding-left: 12%;
  border-collapse: collapse;
  font-size: 9px;
  
  th {
    background-color: #f2f2f2;
    padding: 12px 24px;
    font-weight: normal;
    &:first-child {
      border-radius: 8px 0 0 0;
    }
    &:last-child {
      border-radius: 0 8px 0 0;
    }
  }
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  text-transform: uppercase;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableButton = styled.button`
  background-color: white;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: smaller;
  text-decoration: none;
`;

const CallLogTable = () => {
  const PAGE_SIZE = 10; // the number of rows per page

  const [showOverlay, setShowOverlay] = useState(false);
  const [rowData, setRowData] = useState(null);
  const [nodes, setNodes] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(0);

  

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const api = `https://frontend-test-api.aircall.io/calls?offset=${page * 10}&limit=10`;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0YWxoYSIsInVzZXJuYW1lIjoidGFsaGEiLCJpYXQiOjE2Nzg3Mzc0NDIsImV4cCI6MTY3ODczODA0Mn0.CORnewA1emVcHagH8JNAHUnrwXRbFDyZ-8PxbJCimmY";
 
    axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
      .then((res) => {
        setNodes(res.data.nodes);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [page]);

  const handleAddNoteClick = (rowData) => {
    setShowOverlay(true);
    setRowData(rowData);
  };
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const filteration = nodes.filter((node) => {
    if (selectedStatus === 'all') {
      return true;
    } else {
      return node.is_archived === (selectedStatus === 'archived');
    }
  });

  const handleNextClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevClick = () => {
    setPage(prevPage => prevPage - 1);
  };


  return (
    <>
    <div>
    <label style = {{"margin-left": "15%"}} htmlFor="statusDropdown">Filter by status:</label>
    <select style = {{"margin-left": "8px"}} id="statusDropdown" onChange={handleStatusChange}>
      <option value="all">All</option>
      <option value="archived">Archived</option>
      <option value="unarchived">Unarchived</option>
    </select>
  </div>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Call type</TableHeader>
              <TableHeader>Direction</TableHeader>
              <TableHeader>Duration</TableHeader>
              <TableHeader>From</TableHeader>
              <TableHeader>To</TableHeader>
              <TableHeader>Via</TableHeader>
              <TableHeader>Created at</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </thead>
          <tbody>
          {filteration.map((node) => (
            <TableRow key={node.id}>
            <TableCell className={node.call_type === 'voicemail' ? 'blue':node.call_type === 'answered' ? 'skyeBlue':node.call_type === 'missed' ? 'red': 'default-style'}>
            {node.call_type}
          </TableCell> 
            <TableCell className={node.direction === 'outbound' ? 'blue' : node.direction === 'inbound' ? 'blue' : 'default-style'}>{node.direction}</TableCell>
              <TableCell>{node.duration} seconds</TableCell>
              <TableCell>{node.from}</TableCell>
              <TableCell>{node.to}</TableCell>
              <TableCell>{node.via}</TableCell>
              <TableCell>{node.created_at}</TableCell>
              <TableCell className={node.is_archived ? 'archived' : ''}>{node.is_archived ? "Archived" : "Unarchived"}</TableCell>
              <TableCell>
                <TableButton onClick={() => handleAddNoteClick(node)}>Add note</TableButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
</Table>
            
<div style={{marginLeft: "15%", marginTop: "10px"}}>
<button onClick={handlePrevClick} disabled={page === 0}>Previous</button>
<button onClick={handleNextClick}>Next</button>
</div>
</TableContainer>
      {showOverlay && (
      <Overlay onClose={() => setShowOverlay(false)} rowData={rowData} />
)}
</>
);
};

export default CallLogTable;