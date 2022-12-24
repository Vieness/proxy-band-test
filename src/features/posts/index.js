import {useGetPostsQuery} from "./api";
import {Avatar, Card, CardContent, CardHeader, dialogActionsClasses, Typography} from "@mui/material";
import {useSearchParams} from "react-router-dom";

const Posts = () => {
    const [searchParams] = useSearchParams();
    const {data} = useGetPostsQuery(searchParams.toString());
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
