import {Button, Card, CardActions, CardContent, Container, Typography} from "@mui/material";
import {useGetUsersQuery} from "./api";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Albums from "../albums";
import {useGetAlbumsQuery} from "../albums/api";

const Users = () => {
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState()


    const {data} = useGetUsersQuery();

    const toggleDialog = () => {
        setOpen(!open)
    }
    //user id
    const handleSelectUser = (id) => () => {
        setSelectedUser(id);
        toggleDialog();

    }
    const navigate = useNavigate();
    return (
        <>
            <Container>
                {data?.map(item =>
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
                            <Button onClick={handleSelectUser(item.id)} size="small"> User Albums </Button>
                        </CardActions>
                    </Card>
                )}
            </Container>
            <Albums selectedUser={selectedUser}  open={open} handleClose={toggleDialog}/>
        </>
    );
};

export default Users;

