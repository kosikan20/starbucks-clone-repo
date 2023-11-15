import React from "react";
import Nav from "../Nav";
import FooterNavLink from "../FooterNavLink";
import pumpkin from "../../assets/pumbkin.webp";
import pumpkinjuice from "../../assets/pumbkinjuice.jpg";
import spotify from "../../assets/spotify.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import pinterest from "../../assets/pinterest.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import rewards from "../../assets/rewards.webp";
import muffin from "../../assets/muffin.webp";
import doordash from "../../assets/doordash.jpg";
import "./Home.css";
function Home() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <section className="section s1">
        <img src={pumpkin} alt="pumpkin" />
        <div>
          <h1 className="h1 s1-h1">HBD PSL</h1>
          <h2 className="h2 s1-h2">
            Cheers for the drink that’s made fall “fall” for two decades.
          </h2>
          <button className="btn s1-btn">Join the celebration</button>
        </div>
      </section>
      <section className="section s2">
        <div>
          <h1 className="h1 s2-h1">Pumpkin forever</h1>
          <h2 className="h2 s2-h2">
            Let the nostalgia begin. Enjoy a steamy creamy Pumpkin Spice Latte
            topped with pumpkin-pie spices.
          </h2>
          <button className="btn s2-btn">Order now</button>
        </div>
        <img src={pumpkinjuice} alt="pumpkinjuice" />
      </section>
      <section className="section s3">
        <img src={rewards} a lt="rewards" />
        <div>
          <h1 className="h1 s3-h1">
            We're celebrating PSL’s birthday. Yours is next!
          </h1>
          <h2 className="h2 s3-h2">
            Join Starbucks<sup>®</sup> Rewards and enjoy a free drink on your
            birthday every year.*
          </h2>
          <button className="btn s3-btn">Join Now</button>
        </div>
      </section>
      <section className="section s4">
        <div>
          <h1 className="h1 s4-h1" id="s4-h1">
            Twice the spice
          </h1>
          <h2 className="h2 s4-h2" id="s4-h2">
            Pair your PSL with its sidekick, the sweet and salty Pumpkin Cream
            Cheese Muffin.
          </h2>
          <button className="btn s4-btn" id="s4-btn">
            Order Now
          </button>
        </div>
        <img src={muffin} a lt="rewards" />
      </section>
      <section className="section s5">
        <img src={doordash} a lt="rewards" />
        <div>
          <h1 className="h1 s5-h1" id="s5-h1">
            Pumpkin spice, delivered so nice
          </h1>
          <h2 className="h2 s5-h2" id="s5-h2">
            Your fall favorites, at your door—when you order Starbucks delivery
            with DoorDash.**
          </h2>
          <button className="btn s5-btn" id="s5-btn">
            Order Now
          </button>
        </div>
      </section>
      <section className="s6"></section>
      <section className="s6">
        <p>
          *At participating stores. To qualify for the Birthday Reward, you must
          have made at least one Star<br></br>-earning transaction prior to your
          birthday each year.
        </p>
        <p>
          **See the DoorDash app for availability and restrictions. Menu
          limited.
        </p>
      </section>

      <section className="liaddress">
        <div className="li1">
          <ul>
            <li className="h">About Us</li>
            <li>Our Company</li>
            <li>Our Coffee</li>
            <li>Stories and News</li>
            <li>Starbucks Archive</li>
            <li>Invester Relations</li>
            <li>Customer Service</li>
            <li>Contect Us</li>
          </ul>
        </div>
        <div className="li2">
          <ul>
            <li className="h">Careers</li>
            <li>Culture and Values</li>
            <li>Inclusion, Diversity, Equity</li>
            <li>College Achivement Plan</li>
            <li>Alumni Community</li>
            <li>U.S Carrers</li>
            <li>International Careers</li>
          </ul>
        </div>
        <div className="li3">
          <ul>
            <li className="h">Social Impact</li>
            <li>People</li>
            <li>Planet</li>
            <li>
              Environmental and Social <br />
              Impact Reporting
            </li>
          </ul>
        </div>

        <div className="li4">
          <ul>
            <li className="h">For Business Partners</li>
            <li>Landlord Support Center</li>
            <li>Suppliers</li>
            <li>Corporate Gift Card Sales</li>
            <li>
              Office and Foodservice <br />
              Coffee
            </li>
          </ul>
        </div>
        <div className="li5">
          <ul>
            <li className="h">Order and Pick Up</li>
            <li>Order on the App</li>
            <li>Order on the Web</li>
            <li>Delivery</li>
            <li>
              Order and Pick Up <br />
              Options
            </li>
            <li>
              Explore and Find Coffee
              <br /> for Home
            </li>
          </ul>
        </div>
      </section>
      <section className="sf">
        <hr className="hli" />
        <img src={spotify} alt="spotify" />
        <img src={facebook} alt="spotify" />
        <img src={pinterest} alt="spotify" />
        <img src={instagram} alt="spotify" />
        <img src={youtube} alt="spotify" />
        <img src={twitter} alt="spotify" />
      </section>
      <footer className="foo">
        <FooterNavLink />
        <p>© 2023 Starbucks Coffee Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
