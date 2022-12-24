import {useGetAlbumsQuery} from "./api";
import {Box, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";

const Albums = ({selectedUser, handleClose, open}) => {
    const {data = []} = useGetAlbumsQuery({userId: selectedUser}, {skip: !selectedUser})

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Albums
            </DialogTitle>
            <DialogContent>
                {data.map(item =>
                    <Box>
                        <Typography>
                            message: {item.title}
                        </Typography>
                    </Box>
                )}
            </DialogContent>
        </Dialog>
    )
};

export default Albums;
