import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LocalLibrary } from "@mui/icons-material";

type activityprops = {
  id: number;
  title: string;
  body: string;
};

const activity: activityprops[] = [
  {
    id: 1,
    title: "Our Teacher",
    body: "There are many varieations of passages Lorem Ipsum available majority have only alteration some form, have only",
  },
  {
    id: 2,
    title: "Sports",
    body: "There are many varieations of passages Lorem Ipsum available majority have only alteration some form, have only",
  },
  {
    id: 3,
    title: "Bus service",
    body: "There are many varieations of passages Lorem Ipsum available majority have only alteration some form, have only",
  },
  {
    id: 4,
    title: "Music Class",
    body: "There are many varieations of passages Lorem Ipsum available majority have only alteration some form, have only",
  },
  {
    id: 5,
    title: "Language",
    body: "There are many varieations of passages Lorem Ipsum available majority have only alteration some form, have only",
  },
  {
    id: 6,
    title: "Custom Food",
    body: "There are many varieations of passages Lorem Ipsum available majority have only alteration some form, have only",
  },
];

export default function ActivityCard() {
  // return (
  //   {activity.map(act=><Card key={act.id} sx={{ maxWidth: 345 }}>
  //     <LocalLibrary></LocalLibrary>
  //     <CardContent>
  //       <Typography gutterBottom variant="h5" component="div">
  //         Lizard
  //       </Typography>
  //       <Typography variant="body2" sx={{ color: "text.secondary" }}>
  //         Lizards are a widespread group of squamate reptiles, with over 6,000
  //         species, ranging across all continents except Antarctica
  //       </Typography>
  //     </CardContent>
  //     <CardActions>
  //       <Button size="small">Share</Button>
  //       <Button size="small">Learn More</Button>
  //     </CardActions>
  //   </Card>)}
  // )

  return (
    <>
      {activity.map((act: activityprops) => (
        <Card key={act.id} sx={{ maxWidth: 345, margin: 2 }}>
          <LocalLibrary sx={{ fontSize: 40, color: "primary.main", m: 2 }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {act.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {act.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
