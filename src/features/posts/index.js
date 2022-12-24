import {useGetPostsQuery} from "./api";
import {Avatar, Card, CardContent, CardHeader, Container, Grid, Typography} from "@mui/material";
import {useSearchParams} from "react-router-dom";

const Posts = () => {
    const [searchParams] = useSearchParams();
    const {data} = useGetPostsQuery(searchParams.toString());

    return (
        <>
            <Container>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    {data?.map(item =>
                        <Card key={item.id} sx={{margin: 2, maxWidth: 500}}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        {item.userId}
                                    </Avatar>
                                }
                                title={item.title}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {item.body}
                                </Typography>
                            </CardContent>
                        </Card>
                    )}
                </Grid>
            </Container>
        </>
    );
};

export default Posts;
