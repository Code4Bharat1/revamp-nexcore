import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#cee0e3] py-10">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image
              src="https://www.odooimplementers.com/images/odoo-implementers-logo-best-erp-software.webp"
              alt="odoo Implementers"
              width={122}
              height={50}
              className="mb-4 w-auto h-auto"
            />
            <Image
              src="https://www.odooimplementers.com/images/odoo-gold-partner.svg"
              alt="Gold Partner Badge"
              width={96}
              height={40}
              className="w-24 h-auto"
            />
          </div>

          {/* Office Details */}
          <div className="mt-8 lg:mt-0 grid grid-cols-1 lg:grid-cols-3 gap-6 text-center lg:text-left">
            {/* Corporate Office */}
            <div>
              <h3 className="text-lg font-bold mb-2">Corporate Office:</h3>
              <p>
                A – Block, 19 - Kurinji Nagar, Civil Aerodrome (PO), Coimbatore
                – 641 014, India.
              </p>
              <p className="mt-2 text-[#7141b1]">
                <span className="block">
                  <i className="fas fa-envelope mr-2"></i>
                  contact@odooiimplementers.com
                </span>
                <span className="block">
                  <i className="fas fa-phone mr-2"></i>
                  +91 8056623456
                </span>
              </p>
            </div>

            {/* Regional Office 1 */}
            <div>
              <h3 className="text-lg font-bold mb-2">Regional Office:</h3>
              <p>
                Vatika Business Centre Pvt Limited, Prestige Polygon (3rd
                Floor), 471 Anna Salai, Teynampet, Chennai – 600 018, Tamil
                Nadu, India.
              </p>
              <p className="mt-2 text-[#7141b1]">
                <span className="block">
                  <i className="fas fa-phone mr-2"></i>
                  +91 7418077742
                </span>
              </p>
            </div>

            {/* Regional Office 2 */}
            <div>
              <h3 className="text-lg font-bold mb-2">Regional Office:</h3>
              <p>
                A-21, Ganga Vihar, Pingale Wasti, Near Passport Office, Mundhwa
                Road, Pune – 411 036, Maharashtra, India.
              </p>
              <p className="mt-2 text-[#7141b1]">
                <span className="block">
                  <i className="fas fa-phone mr-2"></i>
                  +91 7418077742
                </span>
              </p>
            </div>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="w-full bottom-0 mt-10 border-t pt-full text-center lg:text-center">
          <p className="text-[16px] text-[#885c7c] whitespace-nowrap">
            Copyright © odoo Implementers Private Limited. All Rights Reserved. Website Concept and Development - Kambaa Inc.
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start mt-4 space-x-4">
            <div className='ft-list-icon mb-lg-5'>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook text-xl text-[#7141b1]"></i>
              </a>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram text-xl text-[#7141b1]"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin text-xl text-[#7141b1]"></i>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
