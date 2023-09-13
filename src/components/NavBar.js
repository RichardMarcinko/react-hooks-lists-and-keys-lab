import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((link) => {
    return(
    <a key={link} href={"#" + link}>{link}</a>
    )
  })
  return <nav>{/* display an <a> tag for each link here */}
      {linkElements}
  </nav>;
  
}

export default NavBar;


// const colorElements = colors.map((color) => {
//   return <li style={{ color: color }}>{color}</li>;
// });