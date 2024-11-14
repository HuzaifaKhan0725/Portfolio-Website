// import React from 'react'

// export default function Footer() {
//   return (
//     <div>
//     <footer className="flex" >
//       <div>
//           <h4>Contact</h4>
//           <ul>
//             <li><a href="#">Email:huzaifakhanprogrammer@gmail.com</a></li>
//             <li><a href="#">Phone: +91 333504695</a></li>
//           </ul>
//         </div>
   
//     </footer>
//     </div>
//   )
// }
import React from 'react';

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="flex p-4 bg-gray-800 text-white">
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul>
            <li>
              <a href="mailto:huzaifakhanprogrammer@gmail.com" className="hover:underline">
                Email: huzaifakhanprogrammer@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+91333504695" className="hover:underline">
                Phone: +91 333504695
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
