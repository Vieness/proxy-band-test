import {useGetPostsQuery} from "./api";
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Typography
} from "@mui/material";

const Posts = () => {
    const {data} = useGetPostsQuery();
    // I thought about making an infinite scroll, but I wanted to quickly turn in the task
    return (
        <div>
            {data?.map(item =>
                <Card key={item.id} sx={{marginTop: 5, maxWidth: 500}}>
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
        </div>
    );
};

export default Posts;
