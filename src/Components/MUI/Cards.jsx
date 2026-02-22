import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image1 from '../../assets/hp.jpg'
import image2 from '../../assets/dell.jpg'
import image3 from '../../assets/lenovo.jpg'
import image4 from '../../assets/asus.jpg'

export default function Cards() {
  return (
    
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={image1}
        title="hp laptop"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hp </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque nesciunt voluptatem laboriosam earum aperiam quod voluptate nisi, non corporis maiores provident recusandae, dolore architecto ratione! Odio molestias ea doloribus.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
    
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={image2} 
        title="dell laptop"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Dell</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque nesciunt voluptatem laboriosam earum aperiam quod voluptate nisi, non corporis maiores provident recusandae, dolore architecto ratione! Odio molestias ea doloribus.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={image3}
        title="Lenovo laptop"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lenovo</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque nesciunt voluptatem laboriosam earum aperiam quod voluptate nisi, non corporis maiores provident recusandae, dolore architecto ratione! Odio molestias ea doloribus.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
      
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={image4}
        title="Asus laptop"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Asus Vivobook</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque nesciunt voluptatem laboriosam earum aperiam quod voluptate nisi, non corporis maiores provident recusandae, dolore architecto ratione! Odio molestias ea doloribus.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  );
}
