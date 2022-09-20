import * as React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
export default function Home() {
  
  return <Link href='/'><Button variant="contained" >Hello World</Button></Link>;
}