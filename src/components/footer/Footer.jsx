import { Link } from "react-router-dom";
import footerLogo    from "./../../assets/images/footerLogo.webp";
import facebookIcon  from "./../../assets/icons/social/facebook.svg";
import instagramIcon from "./../../assets/icons/social/instagram.svg";
import pintrestIcon  from "./../../assets/icons/social/pintrest.svg";
import youtubeIcon   from "./../../assets/icons/social/youtube.svg";
import FooterMainList from "./FooterMainList";
import FooterLiItem   from "./FooterLiItem";

export default function Footer() {
  return (
    <div className="flex w-full justify-between bg-slate-200 sm:px-5 xl:px-32 2xl:px-64 sm:py-3 xl:py-10 gap-5 flex-wrap mt-40">
      <FooterMainList headingTitle="our company">
        <FooterLiItem innerText="Coffeebean.com"               />
        <FooterLiItem innerText="In-Store Menu"                />
        <FooterLiItem innerText="Pickup/Delivery Order Online" />
        <FooterLiItem innerText="Coffee"                       />
        <FooterLiItem innerText="Single Serve Pods"            />
        <FooterLiItem innerText="Tea"                          />
        <FooterLiItem innerText="Powders"                      />
        <FooterLiItem innerText="Equipment"                    />
        <FooterLiItem innerText="Drinkware"                    />
        <FooterLiItem innerText="Careers"                      />
        <FooterLiItem innerText="For Business & Grocery"       />
        <FooterLiItem innerText="Caring Cup"                   />
        <FooterLiItem innerText="Franchising"                  />
      </FooterMainList>

      <FooterMainList headingTitle="site terms">
        <FooterLiItem innerText="Terms of Use"                            />
        <FooterLiItem innerText="Gift Card Terms"                         />
        <FooterLiItem innerText="Privacy Policy"                          />
        <FooterLiItem innerText="California Transparency in Supply Chain" />
      </FooterMainList>

      <FooterMainList headingTitle="Customer Care">
        <FooterLiItem innerText="Contact Us"                      />
        <FooterLiItem innerText="Sales & Clearance Items"         />
        <FooterLiItem innerText="How to Make Easy Lattes at Home" />
        <FooterLiItem innerText="Subscriptions"                   />
        <FooterLiItem innerText="Gift Guide"                      />
        <FooterLiItem innerText="Gift Cards"                      />
        <FooterLiItem innerText="Shipping"                        />
        <FooterLiItem innerText="Returns"                         />
        <FooterLiItem innerText="Affiliate Program"               />
        <FooterLiItem innerText="Store Locator"                   />
        <FooterLiItem innerText="1-800-TEA-LEAF (832-5323)"       />
        <FooterLiItem innerText="info@coffeebean.com"             />
      </FooterMainList>

      <FooterMainList headingTitle="social">
        <li className="flex gap-1"> 
          <Link to="/" className="rounded-full border border-black p-1 hover:opacity-70 transition-all duration-300"> <img src={facebookIcon } alt="facebookIcon"  /> </Link>
          <Link to="/" className="rounded-full border border-black p-1 hover:opacity-70 transition-all duration-300"> <img src={instagramIcon} alt="instagramIcon" /> </Link>
          <Link to="/" className="rounded-full border border-black p-1 hover:opacity-70 transition-all duration-300"> <img src={pintrestIcon } alt="pintrestIcon"  /> </Link>
          <Link to="/" className="rounded-full border border-black p-1 hover:opacity-70 transition-all duration-300"> <img src={youtubeIcon  } alt="youtubeIcon"   /> </Link>
        </li>
        
        <li>
          <img src={footerLogo} alt="coffe bean and teal leaf logo" />
        </li>
        
        <li>
          <p className="font-thin text-sm"> For support requests please follow the links on our Contact Us page or email us <br /> at info@coffeebean.com </p>
        </li>

        <li>
          <p className="font-thin text-sm">
            THE COFFEE BEAN & TEA LEAF, THE COFFEE BEAN, CBTL, THE ORIGINAL ICE
            <br />
            BLENDED, ICE BLENDED and THE PURPLE STRAW, and their logos and other
            <br />
            marks are registered trademarks of Super Magnificent Coffee Company
            <br />
            Ireland Limited in the United States and may be registered in other
            <br />
            countries.
          </p>
        </li>
      </FooterMainList>
    </div>
  );
}
