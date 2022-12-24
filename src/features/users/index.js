import {Button, Card, CardActions, CardContent, Container, Typography} from "@mui/material";
import {useGetUsersQuery} from "./api";
import {useNavigate} from "react-router-dom";
import React from "react";
import Albums from "../albums";

const Users = () => {
    const {data} = useGetUsersQuery();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    console.log(open)
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
                            <Button onClick={handleOpen} size="small">User
                                Albums</Button>
                            {open && <Albums open={open} handleClose={handleClose}/>}
                        </CardActions>
                    </Card>
                </Container>
            )}
        </div>
    );
};

export default Users;

