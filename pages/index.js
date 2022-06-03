import Typography from  '@mui/material/Typography'
import home from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Banner from '../comps/Banner'
import Tailwind from '../comps/tailwind'
import { January } from '../comps/january'

export default function Home() {
  return (
   <div className={home.background}>
  
  <Navbar/> 
  <Banner/> 
  <Tailwind/>
  
  
   </div>
  )
}
