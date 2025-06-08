import React from "react";
import { Link } from "react-router-dom";
import playstoreImage from "../../assets/images/icons/social/google-play-icon.png"
import appStoreImage from "../../assets/images/icons/social/app-store-icon.png"

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-10 mt-10">
      <div className="flex flex-wrap gap-10 justify-between">
        <div className="max-w-md">
          <h4 className="text-xl font-bold mb-5">
            Interactive online training for small and midsize fleets.
          </h4>
          <p className="pb-3">Get the mobile app</p>
          <div className="flex gap-3">
            <a href="playstoreLink" target="_blank" rel="noreferrer">
              <img src={playstoreImage} alt="Google Play" className="w-32" />
            </a>
            <a href="appstoreLink" target="_blank" rel="noreferrer">
              <img src={appStoreImage} alt="App Store" className="w-32" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-4  text-amber-600">
            <Link to="/resources/company">Company</Link>
          </h5>
          <ul className="space-y-2">
            <li><Link to="/resources/whats-new/media-kit">Media kit</Link></li>
            <li><Link to="/resources/company/careers">Careers</Link></li>
            <li><Link to="/resources/learn-more/getting-help">Support</Link></li>
            <li><Link to="/partners/become-a-partner">Become a partner</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-4  text-amber-600">
            <Link to="/resources">Resources</Link>
          </h5>
          <ul className="space-y-2">
            <li><Link to="/resources/stay-connected/news">News</Link></li>
            <li><Link to="/resources/library">Library</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-4 text-amber-600">Contact Us  </h5>
          <p className="text-sm leading-relaxed">
            infoCity ,Patia<br />
            PO Box 752070<br />
            Bhubaneswar, Odisha<br />
            India<br /><br />
            <span className="font-bold">t.</span> 0000-000-000<br />
            <span className="font-bold">p.</span> 7854-001-224<br />
            <span className="font-bold">e.</span>{" "}
            <a href="mailto:info@byteKnot.com" >info@byteKnot.com</a>
          </p>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-sm flex flex-wrap justify-between items-center">
        <p>&copy; 2025 Cranial Expansion Learning Solutions, Inc.</p>


        {/* <a href="#" className="block">
          <img src="/images/orange-caret-up.png" alt="Back to top" className="w-6 h-6" />
        </a> */}



      </div>
    </footer>
  );
};

export default Footer;
