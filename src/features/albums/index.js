import {useGetAlbumsQuery} from "./api";
import {Box, Modal, Typography} from "@mui/material";
import React, {useState} from "react";

const Albums = ({handleClose,open}) => {
    const {data} = useGetAlbumsQuery();

    console.log(data);
    return (
        <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                           фівафіва
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          ячсмячсмя
                        </Typography>
                    </Box>
                </Modal>

        </div>


    );
};

export default Albums;
