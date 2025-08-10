import { NavLink } from 'react-router-dom';

export default function NavBar(){
  const active = { fontWeight: 'bold', textDecoration: 'underline' };
  return (
    <nav style={{display:'flex', gap:16, padding:16}}>
      <NavLink to="/" style={({isActive}) => isActive ? active : undefined}>Home</NavLink>
      <NavLink to="/about" style={({isActive}) => isActive ? active : undefined}>About</NavLink>
      <NavLink to="/contact" style={({isActive}) => isActive ? active : undefined}>Contact</NavLink>
      <NavLink to="/temperature" style={({isActive}) => isActive ? active : undefined}>Temperature</NavLink>
    </nav>
  );
}