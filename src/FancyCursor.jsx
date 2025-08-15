// import { useEffect, useState } from 'react';

// const FancyCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [hovering, setHovering] = useState(false);

//   useEffect(() => {
//     const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
//     window.addEventListener('mousemove', move);

//     // detect hover on links
//     const links = document.querySelectorAll('a');
//     links.forEach(link => {
//       link.addEventListener('mouseenter', () => setHovering(true));
//       link.addEventListener('mouseleave', () => setHovering(false));
//     });

//     return () => {
//       window.removeEventListener('mousemove', move);
//       links.forEach(link => {
//         link.removeEventListener('mouseenter', () => setHovering(true));
//         link.removeEventListener('mouseleave', () => setHovering(false));
//       });
//     };
//   }, []);

//   return (
//     <div
//       className="cursor-dot"
//       style={{
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         width: hovering ? '35px' : '20px',
//         height: hovering ? '35px' : '20px',
//         backgroundColor: hovering ? '#ff0000' : '#111', // change color on hover
//       }}
//     />
//   );
// };

// export default FancyCursor;
