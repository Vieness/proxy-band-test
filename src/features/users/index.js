import {Box, Button, Card, CardActions, CardContent, Container, Modal, Typography} from "@mui/material";
import {useGetUsersQuery} from "./api";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Albums from "../albums";

import React from 'react';
import {useGetAlbumsQuery} from "../albums/api";

const Users = () => {
    const {data} = useGetUsersQuery();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    return (
        <div>
            {data?.map(item =>
                <Container key={item.id}>
                    <Card sx={{maxWidth: 250}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                {item.username}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                {item.email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => navigate(`posts?userId=${item.id}`)} size="small">User Posts</Button>
                            <Button onClick={handleOpen} size="small">User Albums</Button>
                            {open && <Albums open={open} close={handleClose}/>}
                        </CardActions>
                    </Card>
                </Container>
            )}
        </div>
    );
};

export default Users;

