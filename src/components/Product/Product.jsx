import "./Product.css";
import { FiInfo, FiSearch } from "react-icons/fi";
import { TiStar } from "react-icons/ti";
import { Data } from "../Data/Orbitz";
import { useState } from "react";

export const Product = () => {
  const [sort, setSort] = useState("");
  const [filter, setFiler] = useState("");
  const [filterbyprice, setFilerbyprice] = useState("");

  return (
    <div className="product">
      <div className="filters">
        <div className="map">
          <img
            className="mapimg"
            src="https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=&size=600x400&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker-orb.png%7C12.968678,77.601407%7C12.989179,77.729794%7C13.012346,77.554329%7C12.971379,77.595742%7C12.993926,77.585192%7C13.196503,77.709458%7C12.973072,77.620029%7C13.019394,77.584006%7C12.974957,77.620747%7C13.163716,77.632576&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=xM-VKMWHG3J7HS3rP2bOQILvUB8="
            alt=""
          />
          <a href="" id="a">
            View in map
          </a>
        </div>
        <hr />
        <h2 className="search-h2">Search by property name</h2>
        <div className="input-icon">
          <i className="icon">
            <FiSearch />
          </i>
          <input type="text" placeholder="e.g. Best Western" />
        </div>
        <hr />
        <h3>Filter by</h3>
        <h4>Star rating</h4>
        <div className="star">
          <div
            onClick={() => {
              setFiler(1);
            }}
          >
            1<TiStar />
          </div>
          <div
            onClick={() => {
              setFiler(2);
            }}
          >
            2<TiStar />
          </div>
          <div
            onClick={() => {
              setFiler(3);
            }}
          >
            3<TiStar />
          </div>
          <div
            onClick={() => {
              setFiler(4);
            }}
          >
            4<TiStar />
          </div>
          <div
            onClick={() => {
              setFiler(5);
            }}
          >
            5<TiStar />
          </div>
        </div>
        <div className="popular">
          <h4>Your budget</h4>
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                setFilerbyprice(e.target.value);
              }}
            />
            Less than $75
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                setFilerbyprice(e.target.value);
              }}
            />
            $75 to $125
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                setFilerbyprice(e.target.value);
              }}
            />
            $125 to $200
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                setFilerbyprice(e.target.value);
              }}
            />
            $200 to $300
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                setFilerbyprice(e.target.value);
              }}
            />
            Greater than $300
          </div>
        </div>
        <div className="popular">
          <h4>Guest rating</h4>
          <div>
            <input type="radio" name="radio" />
            <label>Any</label>
            <br />
            <input type="radio" name="radio" />
            <label>Wonderful 4.5+</label>
            <br />
            <input type="radio" name="radio" />
            <label>Very good 4+</label>
            <br />
            <input type="radio" name="radio" />
            <label>Good 3.5+</label>
          </div>
        </div>
        <div className="popular">
          <h4>Payment type</h4>
          <div>
            <input type="checkbox" />
            Fully refundable
          </div>
          <div>
            <input type="checkbox" />
            Reserve now, pay later
          </div>
        </div>
        <div className="popular">
          <h4>Property type</h4>
          <div>
            <input type="checkbox" />
            Bed & breakfast
          </div>
          <div>
            <input type="checkbox" />
            Villa
          </div>
          <div>
            <input type="checkbox" />
            Apart-hotel
          </div>
          <a href="" id="a">
            See more
          </a>
        </div>
        <div className="popular">
          <h4>Traveler experience</h4>
          <div>
            <input type="checkbox" />
            LGBTQ welcoming See properties that pledge to make all guests feel
            safe, welcome, and respected.
          </div>
          <div>
            <input type="checkbox" />
            Business friendly See properties with amenities to help you work
            comfortably, like WiFi and breakfast.
          </div>
          <div>
            <input type="checkbox" />
            Family friendly See properties that include family essentials like
            in-room conveniences and activities for the kids.
          </div>
        </div>
        <div className="popular">
          <h4>Neighborhood</h4>
          <div>
            <input type="radio" name="radio" />
            <label>Bengaluru (and vicinity)</label>
            <br />
            <input type="radio" name="radio" />
            <label>Indiranagar</label>
            <br />
            <input type="radio" name="radio" />
            <label>Koramangala</label>
            <br />
            <a href="" id="a">
              See more
            </a>
          </div>
        </div>
        <div className="popular">
          <h4>Popular locations</h4>
          <div>
            <input type="radio" name="radio" />
            <label>ISKCON Temple</label>
            <br />
            <input type="radio" name="radio" />
            <label>Bangalore Palace</label>
            <br />
            <input type="radio" name="radio" />
            <label>Lalbagh Botanical Gardens</label>
            <br />
            <a href="" id="a">
              See more
            </a>
          </div>
        </div>
        <div className="popular">
          <h4>Meal plans available</h4>
          <div>
            <input type="checkbox" />
            Breakfast included
          </div>
          <div>
            <input type="checkbox" />
            Lunch included
          </div>
          <div>
            <input type="checkbox" />
            Dinner included
          </div>
          <a href="" id="a">
            See more
          </a>
        </div>
        <div className="popular">
          <h4>Amenities</h4>
          <div>
            <input type="checkbox" />
            Hot tub
          </div>
          <div>
            <input type="checkbox" />
            Spa
          </div>
          <div>
            <input type="checkbox" />
            Gym
          </div>
          <a href="" id="a">
            See more
          </a>
        </div>
        <div className="popular">
          <h4>Orbitz Rewards</h4>
          <div>
            <input type="checkbox" />
            VIP Access properties Top-rated stays with member perks
          </div>
        </div>
        <div className="popular">
          <h4>Accessibility</h4>
          <div>
            <input type="checkbox" />
            Wheelchair-accessible parking
          </div>
          <div>
            <input type="checkbox" />
            Elevator
          </div>
          <div>
            <input type="checkbox" />
            Accessible bathroom
          </div>
          <a href="" id="a">
            See more
          </a>
        </div>
      </div>
      <div className="data">
        <div className="sortdiv">
          <div className="sortdiv-1">
            <span>1,494 properties</span>
            <br />
            <a href="">
              See how we pick our recommended properties <FiInfo />
            </a>
          </div>
          <div id="selectdiv">
            <label className="label">Sort by</label>
            <select
              name=""
              id=""
              className="select"
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value="recomended">Recommended</option>
              <option value="price">Price</option>
              <option value="distance">Distance from downtown</option>
              <option value="picks">Guest rating + our picks</option>
              <option value="ourpicks">Price + our picks</option>
              <option value="rating">Star rating</option>
            </select>
          </div>
        </div>
        <div>
          <Data sort={sort} filter={filter} filterbyprice={filterbyprice}/>
        </div>
      </div>
    </div>
  );
};
