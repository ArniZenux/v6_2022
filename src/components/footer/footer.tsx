import Link from "next/link";

export function Footer(){
  return (
    <footer>
       <ul>
        <li><Link href="/">Forsíða</Link></li>
       </ul>      
      <hr/>
      Footer ehf. 
    </footer>
  );
}