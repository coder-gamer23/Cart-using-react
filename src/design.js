import  React from 'react';
import './App.css';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import tick from './tick.png';
import cross from './cross.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';




export default function BasicCard() {
    const [count, setCount] = React.useState(0);
    const [toggle1, settoggle1] = React.useState(true);
    const [toggle2, settoggle2] = React.useState(true);
    const [toggle3, settoggle3] = React.useState(true);
    const btnclick= (e) =>{
        if(e.target.name === 'btn1')
        {
             
            if(toggle1 === true)
            {
            setCount(count + 1);
            settoggle1(!toggle1);
            }
            else{
                setCount(count-1);
                settoggle1(!toggle1); 
            }
        }
        if(e.target.name === 'btn2')
        {
            if(toggle2 === true)
            {
            setCount(count + 1);
            settoggle2(!toggle2);
            }
            else{
                setCount(count-1);
                settoggle2(!toggle2);
            }
        }
        if(e.target.name === 'btn3')
        {
            if(toggle3 === true)
            {
            setCount(count + 1);
            settoggle3(!toggle3);
            }
            else{
                setCount(count-1);
                settoggle3(!toggle3);
            }
        }
    }
  return (
      
    <Card sx={{width:'1370px', height:'600px',backgroundImage: 'linear-gradient(to right, #0062E6 , #33AEFF)', padding: '5%', marginLeft:'0%',display:'flex', gap:'25px',overflowX:'none'}}>
     <Card sx={{ width: 420, height: 600, marginLeft:'20px' ,marginTop:'15px',borderRadius:'25px',transition:'0.5s ease-in-out','&:hover':{transform:'translateY(-10px)',boxShadow:'-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)',Button:{opacity:'1',}},}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight:700}} color="#989FA4"  gutterBottom>
          FREE
        </Typography>
        <span className='dollar'>$0</span> <span className='months'>/month</span>
        <br/>
        <br/>
        <hr></hr>
        <br/>
        <div className='div1'>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Single User</span>
        </div>
        <br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>5GB Storage</span>
           
        </div>
        <br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Unlimited Public Projects</span>
            
        </div><br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Community Access</span>
            <br/>
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={cross}/>
            <span class="grey" >Unlimited Private Projects</span>
          
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={cross}/>
            <span class="grey">Dedicated Phone Support</span>
            
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={cross}/>
            <span class="grey">Free Subdomain</span>
          
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={cross}/>
            <span class="grey">Monthly Status Reports</span>
          
        </div>
        </div>
        </CardContent>
      <CardActions>
      {(toggle1) ? 
      <Button  class="btn" variant="contained" name='btn1' onClick={btnclick}>ADD TO CART</Button>:
      <Button  class="btn" variant="contained" name='btn1' onClick={btnclick}>REMOVE FROM CART</Button>}
      </CardActions>
    </Card>
    <Card sx={{ width: 420, height: 600, marginLeft: 0 ,marginTop:'15px',borderRadius:'25px',transition:'0.5s ease-in-out','&:hover':{transform:'translateY(-10px)',boxShadow:'-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)',Button:{opacity:'1',},}}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight:700}} color="#989FA4"  gutterBottom>
          PLUS
        </Typography>
        <span className='dollar'>$9</span> <span className='months'>/month</span>
        <br/>
        <br/>
        <hr></hr>
        <br/>
        <div className='div1'>
        <div class="paradiv1">
            <img src={tick}/>
            <span><b>5 Users</b></span>
        </div>
        <br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>50GB Storage</span>
           
        </div>
        <br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Unlimited Public Projects</span>
            
        </div><br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Community Access</span>
            <br/>
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span  >Unlimited Private Projects</span>
          
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span >Dedicated Phone Support</span>
            
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span>Free Subdomain</span>
          
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={cross}/>
            <span class="grey">Monthly Status Reports</span>
          
        </div>
        </div>
        </CardContent>
      <CardActions>
      {(toggle2) ? 
      <Button  class="btn" variant="contained" name='btn2' onClick={btnclick}>ADD TO CART</Button>:
      <Button  class="btn" variant="contained" name='btn2' onClick={btnclick}>REMOVE FROM CART</Button>}
      </CardActions>
    </Card>
    <Card sx={{ width: 420, height: 600, marginLeft: 0 ,marginTop:'15px',borderRadius:'25px',transition:'0.5s ease-in-out','&:hover':{transform:'translateY(-10px)',boxShadow:'-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)',Button:{opacity:'1',},},}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight:700}} color="#989FA4"  gutterBottom>
          PRO
        </Typography>
        <span className='dollar'>$49</span> <span className='months'>/month</span>
        <br/>
        <br/>
        <hr></hr>
        <br/>
        <div className='div1'>
        <div class="paradiv1">
            <img src={tick}/>
            <span><b>Unlimited Users</b></span>
        </div>
        <br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>150GB Storage</span>
           
        </div>
        <br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Unlimited Public Projects</span>
            
        </div><br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Community Access</span>
            <br/>
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span>Unlimited Private Projects</span>
          
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span>Dedicated Phone Support</span>
            
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span><b>Unlimited</b> Free Subdomain</span>
          
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span>Monthly Status Reports</span>
          
        </div>
        </div>
        </CardContent>
      <CardActions>
      {(toggle3) ? 
      <Button  class="btn" variant="contained" name='btn3' onClick={btnclick}>ADD TO CART</Button>:
      <Button  class="btn" variant="contained" name='btn3' onClick={btnclick}>REMOVE FROM CART</Button>}
      </CardActions>
    </Card>
    <Badge color="secondary" badgeContent={count}>
        <ShoppingCartIcon  fontSize='large' color='main'/>
        </Badge>
    </Card>
  );
}