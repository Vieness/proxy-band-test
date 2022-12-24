import {useGetAlbumsQuery} from "./api";
import {Box, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import Modal from '@mui/material/Modal';
import React from "react";
import {useSearchParams} from "react-router-dom";



const Albums = ({selectedUser, handleClose, open}) => {
    const {data = []} = useGetAlbumsQuery({userId: selectedUser}, {skip: !selectedUser})

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Albums
            </DialogTitle>
            <DialogContent>
                {data.map(item=>
                <Box>
                    <Typography>
                        {item.title}
                    </Typography>
                </Box>
                )}
            </DialogContent>
        </Dialog>
    )
};

export default Albums;
