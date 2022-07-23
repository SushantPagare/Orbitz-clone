import "./Stays.css";
import { GrDown } from "react-icons/gr";
import { Link } from "react-router-dom";
import "../Homepages/Section1.css";

export const Stays = () => {
  return (
    <div>
      <div>
        <div className="search-main">
          <h1>Search stays</h1>
          <div className="input-container">
            <div className="input-box">
              <select style={{ fontSize: "22px" }}>
                <option>Location</option>
                <option value="bangaloe">Bangalore</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="kolkata">Kolkata</option>
              </select>
              <input type="date" style={{ fontSize: "22px" }}></input>
              <input type="date" style={{ fontSize: "22px" }}></input>

              <input
                type="text"
                style={{ fontSize: "22px" }}
                placeholder="Travelers"
              ></input>
            </div>
          </div>

          <div className="input-checkbox">
            <div>
              <input type="checkbox"></input>
              <label style={{ fontSize: "18px" }}>Add a flight</label>
            </div>
            <div>
              <input type="checkbox"></input>
              <label style={{ fontSize: "18px" }}>Add a car</label>
            </div>
          </div>
          <div className="search-button">
            <Link to="/product">
              <button className="searchbtn">Search</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="stays">
        <div className="Whatsnew">
          <h1 className="whatsnew-h1">What's new</h1>
          <div className="whatsnewdiv">
            <div className="whatsnewdiv-1">
              <div className="whatsnew-img">
                <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/03/25/ORB_FreeCancellation_lpheroB_1680x945_20210323.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh" />
              </div>
              <h2>Sunny days, flexible stays</h2>
              <p>
                You've waited a long time for this! Book your next trip now with
                free cancellation options.
              </p>
            </div>
            <div className="whatsnewdiv-2">
              <div>
                <img
                  src="https://tpc.googlesyndication.com/simgad/13568522326024304489?"
                  alt=""
                />
                <div>
                  <h3>Discover Sixt's car rental fleet</h3>
                  <p>
                    over 220,000 vehicles around the world, there is something
                    for everyone.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://forever.travel-assets.com/flex/flexmanager/images/2021/08/23/ORB_MQ-TS_HU_164x152.jpg?impolicy=fcrop&w=300&h=300&q=mediumHigh"
                  alt=""
                />
                <div>
                  <h3>Hotels Under $99</h3>
                  <p>
                    Choose from our inventory of select hotels all priced for
                    $99 or less per night!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>Last-minute hotel deals</h1>
        <p>
          Free cancellation on most hotels. Because flexibility matters.{" "}
          <a href="" className="a">
            Terms and conditions
          </a>
        </p>
        <div className="api"></div>
        <h1>Featured offers</h1>
        <div className="featured">
          <div className="featured-1">
            <h2>Explore local gateways</h2>
            <p>Get out and explore, and stay close to home with a road trip.</p>
          </div>
          <div className="featured-2"></div>
        </div>
        <h1>Travel tips from the pros</h1>
        <div className="travel">
          <div>
            <div className="travel1-1">
              <h3>5 Amazing Airsrteam trailers to book now</h3>
            </div>
            <p>
              Most of the Airstreams are decked out with modern decor, plush
              amenities and high-tech features!
            </p>
          </div>
          <div>
            <div className="travel2-1">
              <h3>What to look for in a glamping spot, before you book</h3>
            </div>
            <p>
              steep yourself in nature without having to sacrifice modern
              aminities like running water and comfy beds.
            </p>
          </div>
          <div>
            <div className="travel3-1">
              <h3>9 road trip apps to download now</h3>
            </div>
            <p>
              before you hit the open road, we've got you coverd with the apps
              that will make road tripping even better.
            </p>
          </div>
        </div>
        <h1>Vacation your way</h1>
        <div className="vacation">
          <div className="vacation-1">
            <h3>Pet-friendly</h3>
          </div>
          <div className="vacation-2">
            <h3>Luxury</h3>
          </div>
          <div className="vacation-3">
            <h3>All-inclusive</h3>
          </div>
          <div className="vacation-4">
            <h3>Last minute</h3>
          </div>
          <div className="vacation-5">
            <h3>Beach</h3>
          </div>
          <div className="vacation-6">
            <h3>Romantic</h3>
          </div>
        </div>
        <div className="book-bgimg"></div>
        <div className="qr">
          <div>
            <img
              src="https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg"
              alt=""
            />
          </div>
          <div>
            <h2>Rewards are waiting for you in the Orbitz app</h2>
            <ul>
              <li>
                Earn 4% back when you book your hotel in app, vs. 3% on site
              </li>
              <li>Get flight status and gate number notifications</li>
              <li>
                Have questions about your stay? Message your hotel right in the
                app
              </li>
            </ul>
            <h3>Text yourself a download link</h3>
            <div className="flex">
              <div className="selectdiv">
                <label className="label">Country code</label>
                <select class="select">
                  <option value="+93,Afghanistan">Afghanistan +93</option>
                  <option value="+355,Albania">Albania +355</option>
                  <option value="+213,Algeria">Algeria +213</option>
                  <option value="+1,American_Samoa">American Samoa +1</option>
                  <option value="+376,Andorra">Andorra +376</option>
                  <option value="+244,Angola">Angola +244</option>
                  <option value="+1,Anguilla">Anguilla +1</option>
                  <option value="+672,Antarctica">Antarctica +672</option>
                  <option value="+1,Antigua_and_Barbuda">
                    Antigua and Barbuda +1
                  </option>
                  <option value="+54,Argentina">Argentina +54</option>
                  <option value="+374,Armenia">Armenia +374</option>
                  <option value="+297,Aruba">Aruba +297</option>
                  <option value="+61,Australia">Australia +61</option>
                  <option value="+43,Austria">Austria +43</option>
                  <option value="+994,Azerbaijan">Azerbaijan +994</option>
                  <option value="+1,Bahamas">Bahamas +1</option>
                  <option value="+973,Bahrain">Bahrain +973</option>
                  <option value="+880,Bangladesh">Bangladesh +880</option>
                  <option value="+1,Barbados">Barbados +1</option>
                  <option value="+375,Belarus">Belarus +375</option>
                  <option value="+32,Belgium">Belgium +32</option>
                  <option value="+501,Belize">Belize +501</option>
                  <option value="+229,Benin">Benin +229</option>
                  <option value="+1,Bermuda">Bermuda +1</option>
                  <option value="+975,Bhutan">Bhutan +975</option>
                  <option value="+591,Bolivia">Bolivia +591</option>
                  <option value="+387,Bosnia_and_Herzegovina">
                    Bosnia and Herzegovina +387
                  </option>
                  <option value="+267,Botswana">Botswana +267</option>
                  <option value="+55,Brazil">Brazil +55</option>
                  <option value="+1,British_Virgin_Islands">
                    British Virgin Islands +1
                  </option>
                  <option value="+673,Brunei">Brunei +673</option>
                  <option value="+359,Bulgaria">Bulgaria +359</option>
                  <option value="+226,Burkina_Faso">Burkina Faso +226</option>
                  <option value="+257,Burundi">Burundi +257</option>
                  <option value="+855,Cambodia">Cambodia +855</option>
                  <option value="+237,Cameroon">Cameroon +237</option>
                  <option value="+1,Canada">Canada +1</option>
                  <option value="+238,Cape_Verde">Cape Verde +238</option>
                  <option value="+1,Cayman_Islands">Cayman Islands +1</option>
                  <option value="+236,Central_African_Republic">
                    Central African Republic +236
                  </option>
                  <option value="+235,Chad">Chad +235</option>
                  <option value="+56,Chile">Chile +56</option>
                  <option value="+86,China">China +86</option>
                  <option value="+61,Christmas_Island">
                    Christmas Island +61
                  </option>
                  <option value="+61,Cocos_Islands">Cocos Islands +61</option>
                  <option value="+57,Colombia">Colombia +57</option>
                  <option value="+269,Comoros">Comoros +269</option>
                  <option value="+682,Cook_Islands">Cook Islands +682</option>
                  <option value="+506,Costa_Rica">Costa Rica +506</option>
                  <option value="+225,Cote_Divoire">Cote D'ivoire +225</option>
                  <option value="+385,Croatia">Croatia +385</option>
                  <option value="+599,Curacao">Curacao +599</option>
                  <option value="+357,Cyprus">Cyprus +357</option>
                  <option value="+420,Czech_Republic">
                    Czech Republic +420
                  </option>
                  <option value="+243,DROC">
                    Democratic Republic of the Congo +243
                  </option>
                  <option value="+45,Denmark">Denmark +45</option>
                  <option value="+253,Djibouti">Djibouti +253</option>
                  <option value="+1,Dominica">Dominica +1</option>
                  <option value="+1,Dominican_Republic">
                    Dominican Republic +1
                  </option>
                  <option value="+593,Ecuador">Ecuador +593</option>
                  <option value="+20,Egypt">Egypt +20</option>
                  <option value="+503,El_Salvador">El Salvador +503</option>
                  <option value="+224,Equatorial_Guinea">
                    Equatorial Guinea +224
                  </option>
                  <option value="+291,Eritrea">Eritrea +291</option>
                  <option value="+372,Estonia">Estonia +372</option>
                  <option value="+251,Ethiopia">Ethiopia +251</option>
                  <option value="+500,Falkland_Islands">
                    Falkland Islands +500
                  </option>
                  <option value="+298,Faroe_Islands">Faroe Islands +298</option>
                  <option value="+252,Somalia">
                    Federal Republic of Somalia +252
                  </option>
                  <option value="+691,Micronesia">
                    Federated States of Micronesia +691
                  </option>
                  <option value="+679,Fiji">Fiji +679</option>
                  <option value="+358,Finland">Finland +358</option>
                  <option value="+33,France">France +33</option>
                  <option value="+594,French_Guiana">French Guiana +594</option>
                  <option value="+689,French_Polynesia">
                    French Polynesia +689
                  </option>
                  <option value="+241,Gabon">Gabon +241</option>
                  <option value="+220,Gambia">Gambia +220</option>
                  <option value="+995,Georgia">Georgia +995</option>
                  <option value="+49,Germany">Germany +49</option>
                  <option value="+233,Ghana">Ghana +233</option>
                  <option value="+350,Gibraltar">Gibraltar +350</option>
                  <option value="+30,Greece">Greece +30</option>
                  <option value="+299,Greenland">Greenland +299</option>
                  <option value="+1,Grenada">Grenada +1</option>
                  <option value="+590,Guadeloupe">Guadeloupe +590</option>
                  <option value="+1,Guam">Guam +1</option>
                  <option value="+502,Guatemala">Guatemala +502</option>
                  <option value="+224,Guinea">Guinea +224</option>
                  <option value="+245,Guinea-Bissau">Guinea-Bissau +245</option>
                  <option value="+592,Guyana">Guyana +592</option>
                  <option value="+509,Haiti">Haiti +509</option>
                  <option value="+504,Honduras">Honduras +504</option>
                  <option value="+852,HongKong">Hong Kong SAR +852</option>
                  <option value="+36,Hungary">Hungary +36</option>
                  <option value="+354,Iceland">Iceland +354</option>
                  <option value="+91,India">India +91</option>
                  <option value="+62,Indonesia">Indonesia +62</option>
                  <option value="+98,Iran">Iran +98</option>
                  <option value="+964,Iraq">Iraq +964</option>
                  <option value="+353,Ireland">Ireland +353</option>
                  <option value="+972,Israel">Israel +972</option>
                  <option value="+39,Italy">Italy +39</option>
                  <option value="+1,Jamaica">Jamaica +1</option>
                  <option value="+81,Japan">Japan +81</option>
                  <option value="+962,Jordan">Jordan +962</option>
                  <option value="+7,Kazakhstan">Kazakhstan +7</option>
                  <option value="+254,Kenya">Kenya +254</option>
                  <option value="+686,Kiribati">Kiribati +686</option>
                  <option value="+965,Kuwait">Kuwait +965</option>
                  <option value="+996,Kyrgyzstan">Kyrgyzstan +996</option>
                  <option value="+856,Laos">Laos +856</option>
                  <option value="+371,Latvia">Latvia +371</option>
                  <option value="+961,Lebanon">Lebanon +961</option>
                  <option value="+266,Lesotho">Lesotho +266</option>
                  <option value="+231,Liberia">Liberia +231</option>
                  <option value="+218,Libya">Libya +218</option>
                  <option value="+423,Liechtenstein">Liechtenstein +423</option>
                  <option value="+370,Lithuania">Lithuania +370</option>
                  <option value="+352,Luxembourg">Luxembourg +352</option>
                  <option value="+853,Macau">Macau SAR +853</option>
                  <option value="+389,Macedonia">
                    Republic of North Macedonia +389
                  </option>
                  <option value="+261,Madagascar">Madagascar +261</option>
                  <option value="+265,Malawi">Malawi +265</option>
                  <option value="+60,Malaysia">Malaysia +60</option>
                  <option value="+960,Maldives">Maldives +960</option>
                  <option value="+223,Mali">Mali +223</option>
                  <option value="+356,Malta">Malta +356</option>
                  <option value="+692,Marshall_Islands">
                    Marshall Islands +692
                  </option>
                  <option value="+596,Martinique">Martinique +596</option>
                  <option value="+222,Mauritania">Mauritania +222</option>
                  <option value="+230,Mauritius">Mauritius +230</option>
                  <option value="+269,Mayotte">Mayotte +269</option>
                  <option value="+52,Mexico">Mexico +52</option>
                  <option value="+373,Moldova">Moldova +373</option>
                  <option value="+377,Monaco">Monaco +377</option>
                  <option value="+976,Mongolia">Mongolia +976</option>
                  <option value="+382,Montenegro">Montenegro +382</option>
                  <option value="+1,Montserrat">Montserrat +1</option>
                  <option value="+212,Morocco">Morocco +212</option>
                  <option value="+258,Mozambique">Mozambique +258</option>
                  <option value="+95,Myanmar">Myanmar +95</option>
                  <option value="+264,Namibia">Namibia +264</option>
                  <option value="+674,Nauru">Nauru +674</option>
                  <option value="+977,Nepal">Nepal +977</option>
                  <option value="+31,Netherlands">Netherlands +31</option>
                  <option value="+599,Netherlands_Antilles">
                    Netherlands Antilles +599
                  </option>
                  <option value="+687,New_Caledonia">New Caledonia +687</option>
                  <option value="+64,New_Zealand">New Zealand +64</option>
                  <option value="+505,Nicaragua">Nicaragua +505</option>
                  <option value="+227,Niger">Niger +227</option>
                  <option value="+234,Nigeria">Nigeria +234</option>
                  <option value="+683,Niue">Niue +683</option>
                  <option value="+672,Norfolk_Island">
                    Norfolk Island +672
                  </option>
                  <option value="+850,North_Korea">North Korea +850</option>
                  <option value="+1,Northern_Mariana_Islands">
                    Northern Mariana Islands +1
                  </option>
                  <option value="+47,Norway">Norway +47</option>
                  <option value="+968,Oman">Oman +968</option>
                  <option value="+92,Pakistan">Pakistan +92</option>
                  <option value="+680,Palau">Palau +680</option>
                  <option value="+972,Palestinian_Territories">
                    Palestinian Territories +972
                  </option>
                  <option value="+507,Panama">Panama +507</option>
                  <option value="+675,Papua_New_Guinea">
                    Papua New Guinea +675
                  </option>
                  <option value="+595,Paraguay">Paraguay +595</option>
                  <option value="+51,Peru">Peru +51</option>
                  <option value="+63,Philippines">Philippines +63</option>
                  <option value="+48,Poland">Poland +48</option>
                  <option value="+351,Portugal">Portugal +351</option>
                  <option value="+1,Puerto_Rico">Puerto Rico +1</option>
                  <option value="+974,Qatar">Qatar +974</option>
                  <option value="+242,Congo">Republic of the Congo +242</option>
                  <option value="+262,Reunion">Reunion +262</option>
                  <option value="+40,Romania">Romania +40</option>
                  <option value="+7,Russia">Russia +7</option>
                  <option value="+250,Rwanda">Rwanda +250</option>
                  <option value="+685,Samoa">Samoa +685</option>
                  <option value="+378,San_Marino">San Marino +378</option>
                  <option value="+239,Sao_Tome_and_Principe">
                    Sao Tome and Principe +239
                  </option>
                  <option value="+966,Saudi_Arabia">Saudi Arabia +966</option>
                  <option value="+221,Senegal">Senegal +221</option>
                  <option value="+381,Serbia">Serbia +381</option>
                  <option value="+248,Seychelles">Seychelles +248</option>
                  <option value="+232,Sierra_Leone">Sierra Leone +232</option>
                  <option value="+65,Singapore">Singapore +65</option>
                  <option value="+1,Sint_Maarten">Sint Maarten +1</option>
                  <option value="+421,Slovakia">Slovakia +421</option>
                  <option value="+386,Slovenia">Slovenia +386</option>
                  <option value="+677,Solomon_Islands">
                    Solomon Islands +677
                  </option>
                  <option value="+27,South_Africa">South Africa +27</option>
                  <option value="+82,South_Korea">South Korea +82</option>
                  <option value="+211,South_Sudan">South Sudan +211</option>
                  <option value="+34,Spain">Spain +34</option>
                  <option value="+94,Sri_Lanka">Sri Lanka +94</option>
                  <option value="+290,St_Helena">St. Helena +290</option>
                  <option value="+1,St_Kitts_and_Nevis">
                    St. Kitts and Nevis +1
                  </option>
                  <option value="+1,St_Lucia">St. Lucia +1</option>
                  <option value="+508,St_Pierre_and_Miquelon">
                    St. Pierre and Miquelon +508
                  </option>
                  <option value="+1,St_Vincent_and_the_Grenadines">
                    St. Vincent and the Grenadines +1
                  </option>
                  <option value="+249,Sudan">Sudan +249</option>
                  <option value="+597,Suriname">Suriname +597</option>
                  <option value="+268,Swaziland">Swaziland +268</option>
                  <option value="+46,Sweden">Sweden +46</option>
                  <option value="+41,Switzerland">Switzerland +41</option>
                  <option value="+963,Syria">Syria +963</option>
                  <option value="+886,Taiwan">Taiwan +886</option>
                  <option value="+992,Tajikistan">Tajikistan +992</option>
                  <option value="+255,Tanzania">Tanzania +255</option>
                  <option value="+66,Thailand">Thailand +66</option>
                  <option value="+228,Togo">Togo +228</option>
                  <option value="+690,Tokelau">Tokelau +690</option>
                  <option value="+676,Tonga">Tonga +676</option>
                  <option value="+1,Trinidad_and_Tobago">
                    Trinidad and Tobago +1
                  </option>
                  <option value="+216,Tunisia">Tunisia +216</option>
                  <option value="+90,Turkey">Turkey +90</option>
                  <option value="+993,Turkmenistan">Turkmenistan +993</option>
                  <option value="+1,Turks_and_Caicos">
                    Turks and Caicos +1
                  </option>
                  <option value="+688,Tuvalu">Tuvalu +688</option>
                  <option value="+1,US_Virgin_Islands">
                    U.S. Virgin Islands +1
                  </option>
                  <option value="+256,Uganda">Uganda +256</option>
                  <option value="+380,Ukraine">Ukraine +380</option>
                  <option value="+971,United_Arab_Emirates">
                    United Arab Emirates +971
                  </option>
                  <option value="+44,United_Kingdom">United Kingdom +44</option>
                  <option value="+1,USA">United States of America +1</option>
                  <option value="+598,Uruguay">Uruguay +598</option>
                  <option value="+998,Uzbekistan">Uzbekistan +998</option>
                  <option value="+678,Vanuatu">Vanuatu +678</option>
                  <option value="+39,Vatican_City">Vatican City +39</option>
                  <option value="+58,Venezuela">Venezuela +58</option>
                  <option value="+84,Vietnam">Vietnam +84</option>
                  <option value="+681,Wallis_and_Futuna">
                    Wallis and Futuna +681
                  </option>
                  <option value="+967,Yemen">Yemen +967</option>
                  <option value="+260,Zambia">Zambia +260</option>
                  <option value="+263,Zimbabwe">Zimbabwe +263</option>
                </select>
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
                <button>Get the app</button>
              </div>
            </div>

            <p>
              By providing your number, you agree to receive a one-time
              automated text message with a link to get the app. Standard text
              message rates may apply.
            </p>
          </div>
          <div>
            <img
              id="qrimg"
              src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_orbitz.png"
              alt=""
            />
            <p>Scan the QR code</p>
          </div>
        </div>
        <h1>More destinations</h1>
        <div className="destinations">
          <div>
            <h3>Beach Destinations </h3>
            <span>
              <GrDown />
            </span>
          </div>
          <div>
            <h3>Popular City Destinations </h3>
            <span>
              <GrDown />
            </span>
          </div>
          <div>
            <h3>Destinations Deals </h3>
            <span>
              <GrDown />
            </span>
          </div>
          <div>
            <h3>Popular Hotels in Chicago </h3>
            <span>
              <GrDown />
            </span>
          </div>
          <div>
            <h3>Popular Hotels in Las Vegas </h3>
            <span>
              <GrDown />
            </span>
          </div>
          <div>
            <h3>Popular Hotels in Miami </h3>
            <span>
              <GrDown />
            </span>
          </div>
          <div>
            <h3>Popular Hotels in New York </h3>
            <span>
              <GrDown />
            </span>
          </div>
          <div>
            <h3>Popular Hotels in San Francisco </h3>
            <span>
              <GrDown />
            </span>
          </div>
          <div>
            <h3>Top Destinations in Florida </h3>
            <span>
              <GrDown />
            </span>
          </div>
          <div>
            <h3>Mexico & the Caribbean Destinations </h3>
            <span>
              <GrDown />
            </span>
          </div>
          <div>
            <h3>East and West Coast Destinations </h3>
            <span>
              <GrDown />
            </span>
          </div>
          <div>
            <h3>Hotels near Top Ski Resorts </h3>
            <span>
              <GrDown />
            </span>
          </div>
          <div>
            <h3>International Destinations </h3>
            <span>
              <GrDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
