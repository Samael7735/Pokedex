import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardPokemon({name,image, types}) {
  const Type = (types)=>{
    if(types[1]){
      return types[0].type.name + " / " + types[1].type.name
    }
    return (types[0].type.name)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {Type(types)}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
