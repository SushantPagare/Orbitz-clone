import { useEffect, useState } from "react";
import "./payment.css";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

export const Payment = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    var cartArr = JSON.parse(localStorage.getItem("cartItems"));
    // console.log(cartArr)
    setData(cartArr);
  };
  console.log(data);
  return (
    <div className="container">
      <div className="first">
        <h2>Secure Booking - only takes two minutes!</h2>
        <div className="free">
          <div className="tick">
            <img src="https://forever.travel-assets.com/flex/flexmanager/images/2020/05/07/illustration__free__cancellation__non_bex__sml.svg"></img>
          </div>
          <div className="flex">
            Free cancellation before Mon, May 16, 6:00pm (property local time)
            <br></br>
            You can change or cancel this stay for a full refund if plans
            change. Because flexibility matters.
          </div>
        </div>
        <div className="big">
          <div className="one">
            <div className="one1">
              <div className="lock">
                <div>
                  <FaLock />
                </div>
                <div>
                  <h2>Signed in as</h2>
                </div>
              </div>
            </div>
            <div className="one2">
              <div className="flex1">
                <div>
                  <h3>Room 1:</h3>
                </div>
                <div className="margintop">
                  2 Adults 2 Twin Beds Non-smoking
                </div>
              </div>
              <div className="flex2">
                <div>
                  <h3>Free Parking</h3>
                </div>
                <div className="margintop1">Free-wi-fi</div>
              </div>

              <div className="inputbox">
                <form>
                  <div className="firstname" id="selectTag">
                    <strong>Traveler Name</strong>
                    <br />
                    <select id="select">
                      <option>New Traveler </option>
                      <option>Add Traveler</option>
                      <option>Select From my Account</option>
                    </select>
                  </div>

                  <div className="firstname">
                    <div>
                      <strong>First name</strong>
                      <input className="inp" placeholder="(eg:John)"></input>
                    </div>
                    <div>
                      <strong>Last name</strong>
                      <input className="inp" placeholder="(eg:smith)"></input>
                    </div>
                  </div>
                  <div className="firstname" id="flex_box">
                    <div>
                      <strong>Mobile Phone No.</strong>
                    </div>

                    <div>
                      <select className="tag">
                        <option>Afganistan +93</option>
                        <option>Hong Kong +852</option>
                        <option>Iceland +354</option>
                        <option>India +91</option>
                        <option>Iran +98</option>
                        <option>Iraq +964</option>
                        <option>Japan +81</option>
                      </select>
                      <input
                        id="tag_input"
                        placeholder="So the property can reach you"
                      ></input>
                    </div>
                    <div className="checkf">
                      <input type="checkbox"></input>
                      <div>
                        Receive text alerts about this trip. Message and data
                        rates may apply.
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="two">
            {/* right portion */}

            <div className="image1">
              <img className="image2" src={data.image}></img>
            </div>
            <div className="imagedowntext">
              {/* <b>4.4/5</b> Excellent (976 reviews) */}
              <br></br>
              {/* show description about project here */}
              {data.name}
              <br></br>
              <br></br>
              {data.discription}
              <br></br>
              <br></br>
              {/* show hotel price here */}${data.price}
              {/* 1 Room: Family Garden Twin Room
                        <br></br>
                        <br></br>
                        Check-in: Wed, May 18<br></br>
                        Check-out: Thu, May 19<br></br>
                        1-night stay */}
            </div>
          </div>
        </div>

        {/* Protect your hotel content */}
        <div className="big2">
          <div className="protect">
            <div className="flex3">
              <div className="imgp"></div>
              <div className="proclass">
                <h2>Protect your hotel</h2>
              </div>
              <div className="recom">Recommended</div>
            </div>

            {/* important content */}

            <div className="imp">
              <p>
                {" "}
                <b>Important:</b> Trip cancellation due to government travel
                advisories, fear of travel, or change of mind is not covered.
                Travel insurance may provide coverage for COVID-19 diagnosed
                illness. COVID-19 is a foreseen event and certain other
                coverages will not apply.
                <a href="https://www.travelguardworldwide.com/egus">
                  Learn more
                </a>
              </p>
            </div>

            {/* note content */}
            <div className="note">
              <p>
                <b>Note:</b> If you are a resident of WASHINGTON state, please
                click here to view products that you are eligible to purchase.
              </p>
              <br></br>
              1.You get delayed for covered reasons and miss a night of your
              hotel stay<br></br>
              2.You're sick and don't use all your hotel nights<br></br>
              3.You need to extend your trip due to the illness of a travel
              companion<br></br>
              4.You need up to $10,000 for covered medical expenses while on
              your trip<br></br>
              <br></br>
              <a
                className="anchor"
                href="https://webservices.travelguard.com/Product/FileRetrieval.aspx?CountryCode=US&StateCode=NW&ProductCode=009170&PlanCode=P1&FileType=PROD_PLAN_GM&lang=en"
              >
                View insurance details and disclosures
              </a>
              <br></br>
              <br></br>
              <b>Select Yes or No to continue booking *</b>
              <br></br>
              <div className="box1">
                <div>
                  <input type="radio" />
                  Yes, I want Hotel Booking Protection Plus for my trip.
                </div>
                <div className="price">
                  <b>$10.29per person</b>
                </div>
              </div>
              <div className="box2">
                <div className="radio">
                  <input type="radio" />
                  No, I'm willing to risk my $374.22 trip.
                </div>
              </div>
              “ Things happened outside of my control which caused the trip to
              be canceled. The Travel Protection was valuable in reducing the
              losses to me when we had to cancel the trip. ” - Mr. Rodman
            </div>
          </div>
          <div className="pricedetails">
            <h2 className="price1">Price Details</h2>
            <hr />
            <div className="flex4">
              <div className="room1">1 room x 1 night</div>
              <div className="p317">$317.94</div>
            </div>
            <br></br>
            <br></br>
            <div className="flex4">
              <div className="room1">Taxes and fees </div>
              <div className="p317">$56.28</div>
            </div>
            <br></br>
            <br></br>
            <div className="flex5">
              <div className="room1">Hotel Booking Protection Plus</div>
              <div className="p20">$20.58</div>
            </div>
            <hr />
            <br />
            <div className="total">
              <div className="room1">Total</div>
              {/* total part here have to do */}
              <div> ${data.price}</div>
            </div>
          </div>
        </div>

        {/* payment debit card */}
        <div className="debit">
          <h5 className="details">Debit/credit card details</h5>
          <hr />
          <div className="cards">
            <div className="pic">
              <img
                className="pic1"
                src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg"
              ></img>
            </div>
            <div className="pic">
              <img
                className="pic1"
                src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg"
              ></img>
            </div>
            <div className="pic">
              <img
                className="pic1"
                src="https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg"
              ></img>
            </div>
            <div className="pic">
              <img
                className="pic1"
                src="https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg"
              ></img>
            </div>
            <div className="pic">
              <img
                className="pic1"
                src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg"
              ></img>
            </div>
            <div className="pic">
              <img
                className="pic1"
                src="https://a.travel-assets.com/dms-svg/payments/cards-cc_jcb.svg"
              ></img>
            </div>
            <div className="pic">
              <img
                className="pic1"
                src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg"
              ></img>
            </div>
          </div>
          <br />

          <form action="">
            <div id="cardinput">
              <strong>Name on the card</strong>
              <input className="small"></input>
              <strong>Debit card/cardNumber</strong>
              <input className="small" type="number"></input>
              <strong>Expiry Date</strong>
              <div id="mon1">
                <select className="mon">
                  <option>Months</option>
                  <option>01-Jan</option>
                  <option>02-feb</option>
                  <option>03-Mar</option>
                  <option>04-April</option>
                  <option>05-May</option>
                  <option>06-June</option>
                  <option>07-July</option>
                  <option>08-August</option>
                  <option>09-Sep</option>
                  <option>10-Oct</option>
                  <option>11-Nov</option>
                  <option>12-Dec</option>
                </select>
                <select className="mon">
                  <option>Year</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                  <option>2032</option>
                  <option>2033</option>
                  <option>2034</option>
                  <option>2035</option>
                  <option>2036</option>
                  <option>2037</option>
                  <option>2038</option>
                  <option>2039</option>
                  <option>2040</option>
                  <option>2041</option>
                  <option>2042</option>
                  <option>2043</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* email section */}
        <div className="email">
            <h1>Manage your booking</h1>
            <h2>Confirmation email</h2>
          <p>
            Please enter the email address where you would like to receive your
            confirmation.
          </p>
          <strong>Email address</strong>
          <br />
          <input className="small"></input>
        </div>
        <br />

        {/* important information  */}
        <div id="down">
          <h3>Important information about your booking</h3>
          <div id="unorder">
            <ul>
              <li>
                <p>
                  Cancellations or changes made after 6:00pm (property local
                  time) on May 16, 2022 or no-shows are subject to a property
                  fee equal to 100% of the total amount paid for the
                  reservation. Front desk staff will greet guests on arrival.
                </p>
              </li>
              <li>
                <p>
                  Guests who book breakfast-inclusive rate plans will receive
                  breakfast for guests age 12 and older.
                </p>
              </li>
              <li>
                <p>
                  Guests who are not citizens of Singapore must contact the
                  property to verify their Safe Travel Lanes traveler status at
                  least 3 days before check-in. The property will email guests
                  with detailed instructions after booking. Due to COVID-19,
                  access to the pool/fitness center/spa facility/spa tub is
                  available by reservation only.
                </p>
              </li>
              <li>
                <p>
                  Guests who are not citizens of Singapore must contact the
                  property to verify their Safe Travel Lanes traveler status at
                  least 3 days before check-in. The property will email guests
                  with detailed instructions after booking. Due to COVID-19,
                  access to the pool/fitness center/spa facility/spa tub is
                  available by reservation only.
                </p>
              </li>
              <li>
                <p>
                  Shangri-La Rasa Sentosa, Singapore (SG Clean) advises that
                  they will automatically enroll guests, with check-in from
                  January 1, 2021, to June 30, 2022, into Shangri-la’s COVID-19
                  emergency medical coverage at no additional cost. For further
                  details of the program please contact the hotel. You'll be
                  asked to pay the following charges at the property:
                </p>
              </li>
              <li>
                <p>Deposit: SGD 100 per night</p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <button
            className="danger"
            onClick={() => {
              alert("Payment successful");
              navigate("/");
            }}
          >
            Complete Booking
          </button>
        </div>
        <p>
          We use secure transmission and encrypted storage to protect your
          personal information.
        </p>
        <br />
        <p>
          This payment will be processed in the U.S. This does not apply when
          the travel provider (airline/hotel/rail, etc.) processes your payment.
        </p>
      </div>
    </div>
  );
};
