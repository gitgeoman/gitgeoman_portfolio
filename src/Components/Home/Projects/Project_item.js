import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65vw",
  height: "65vh",
  bgcolor: "#32a864",
  color: "#ddd",
  border: "2px solid #32a864",
  borderRadius: "5px",
  boxShadow: 11,
  p: 4,
};

function Project_item({ name, description, stack, link, img }) {
  console.log(name, description, stack, link);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="project" onClick={handleOpen} style={{ backgroundImage: `url(${img})`, backgroundSize: 'auto 100%', backgroundRepeat: "no-repeat" }}>
      </div >
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Project: {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>Description: {description}</p>
            <p>Stack:{stack} Link: Repo: </p>
          </Typography>
        </Box>
      </Modal> */}
    </>
  );
}

export default Project_item;
