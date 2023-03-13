import { useState } from "react";
import styled from "styled-components";

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverlayContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  max-width: 500px;
  width: 40%;
`;

const OverlayCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Overlay = ({ onClose, rowData }) => {
  const [note, setNote] = useState("");

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Note added:", note);
    onClose();
  };

  return (
    <OverlayContainer>
      <OverlayContent>
        <OverlayCloseButton onClick={onClose}>Close</OverlayCloseButton>
        <h2>Add Notes  </h2>
        <p>Call ID {rowData.id}</p>
        <br />
        <br />
        <br />
        <p>
          <strong>Call type:</strong> {rowData.call_type}
        </p>
        <p>
          <strong>Direction:</strong> {rowData.direction
          }
        </p>
        <p>
          <strong>Duration:</strong> {rowData.duration}
        </p>
        <p>
          <strong>From:</strong> {rowData.from
          }
        </p>
        <p>
          <strong>To:</strong> {rowData.to}
        </p>
        <p>
          <strong>Via:</strong> {rowData.via
          }
        </p>
        <br />
        <br />
        <br />

        <form onSubmit={handleSubmit}>
          <label>
            <strong>Add a note:</strong>
            <br />
            <br />
            <textarea value={note} onChange={handleNoteChange} />
          </label>
          <br />
          <button type="submit">Save</button>
          
        </form>
      </OverlayContent>
    </OverlayContainer>
  );
};

export default Overlay;