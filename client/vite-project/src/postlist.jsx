// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// function Postlist() {
//   const [getpost, setgetpost] = useState([]);
//   const getPost = async () => {
//     const res = await axios.get("http://localhost:4000/post");
//     setgetpost(res.data);
//     console.log(res.data);
//   };
//   useEffect(() => {
//     getPost();
//   }, []);

// //   const renderedpost = Object.values(getpost).map((post) => {
// //     return (
// //       <>
// //       <div>
// //         <h3 key={post._id}>{post.title}</h3>
// //       </div>

// // </>
// //     );
// //   });
// return(
//  //<div>{renderedpost}</div>
// <div className="flex flex-wrap gap-10 aspect-video box-border">
// {
//   getpost.map(single=>(

// <Card sx={{ maxWidth: 345 }} key={single._id} >
// <CardMedia
//   sx={{ height: 140 }}
//   image="https://res.cloudinary.com/derxrzqhj/image/upload/v1679670112/products/mfxyumtokmdopoi8pe0e.jpg"
//   title="green iguana" width="500px" height="600px"
// />
// <CardContent >
  
//   <Typography gutterBottom variant="h5" component="div" >
//   {single.title}
//   </Typography>
//   <Typography variant="body2" color="text.secondary"  style={{color:'black'}}>
   
//   </Typography>
// </CardContent>
// <CardActions>
//   <Button size="small">Share</Button>
//   <Button size="small">Learn More</Button>
// </CardActions>
// </Card>
//   ))
// }
 
// </div>


  
// )
  
// }

// export default Postlist;
