import {useGetAlbumsQuery} from "./api";
import {Box, Modal, Typography} from "@mui/material";
import React from "react";
import {useSearchParams} from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Albums = ({handleClose, open}) => {
    const [searchParams] = useSearchParams();
    const {data} = useGetAlbumsQuery(searchParams.toString())

    console.log(data);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        asdfas
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        sdfasdf
                    </Typography>
                </Box>
            </Modal>
            {/*            {data?.map(item =>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {item.userId}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                            {item.title}
                        </Typography>
                    </Box>
                </Modal>
            )}*/}


        </div>
    );
};

export default Albums;
