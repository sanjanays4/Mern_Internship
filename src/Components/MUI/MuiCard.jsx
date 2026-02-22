import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'

export default function MuiCard() {
     const Student=[
            {name:"user",email:"user@example.com",phone:1234567890,address:"magalore",proflieImage:image1},
            {name:"user1",email:"user1@example.com",phone:1234567891,address:"bangalore",proflieImage:image2},
            {name:"user2",email:"user2@example.com",phone:1234567892,address:"mysore",proflieImage:image3},
            {name:"user3",email:"user3@example.com",phone:1234567893,address:"udupi",proflieImage:image4}
        ]
  return (
    <div>
      {Student.map((data)=>(
        <Card sx={{ maxWidth: 290, margin:1 , display:'inline-block',justifyContent:'center',alignItems:'center'}}>
      <CardMedia
        sx={{ height: 100 ,width:100 ,margin:'auto',borderRadius:'50%',marginTop:5}}
        image={data.proflieImage}
        title="user profile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Email:{data.email} <br/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">like</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
    ))}
    </div>
  )
}
