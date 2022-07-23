import { useEffect, useState } from "react";
import "./Orbitz.css";
import { useNavigate } from "react-router-dom";

export const Data = ({ sort, filter, filterbyprice }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    Delhi: [
      {
        id: 1,
        name: "The Leela Palace New Delhi",
        area: "New Delhi",
        rating: 4.6,
        reviews: 745,
        price: 203,
        city: "Delhi",
        paymentType: "Fully Refundable",
        propertyType: "The Capital's Only Modern Palace Hotel",
        discription:
          "Discover rich diversity of cuisines, historic landmarks. International airport: 15 km, 10 mins drive from India Gate",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3860000/3851700/3851663/958ad657_b.jpg",
      },
      {
        id: 2,
        name: "Andaz Delhi - a concept by Hyatt",
        area: "South West",
        rating: 4.5,
        reviews: 434,
        price: 150,
        city: "Delhi",
        paymentType: "Fully Refundable",
        propertyType: "Business Suit offer",
        discription:
          "Luxury hotel by Hyatt, near Delhi airport offering Buffet Bfast, Both way airport transfer, Mininbar, Happy Hrs Bar, Dis SPA, F&SB",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/14000000/13240000/13235700/13235605/5be22f44_b.jpg",
      },
      {
        id: 3,
        name: "Pullman New Delhi Aerocity Hotel",
        area: "Aerocity",
        rating: 4.3,
        reviews: 214,
        price: 137,
        city: "Delhi",
        paymentType: "Reserve now Pay, Later",
        propertyType: "Book in Advance to Save 10%",
        discription:
          "Upscale Hotel Near Airport Metro, Business Hubs and shopping Malls of Delhi and Gurgaon. Book 3 days in Advance and Get 10% off.",
        image:
          "https://images.trvl-media.com/hotels/10000000/10000000/9994600/9994586/bf4110ec.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 4,
        name: "Hotel The Royal Plaza",
        area: "Connaught Place",
        rating: 3.2,
        reviews: 785,
        price: 79,
        city: "Delhi",
        paymentType: "Reserve now Pay, Later",
        propertyType: "Best Business Hotel in Connaught Place",
        discription:
          "Enjoy Close Proximity to International Trade Fair and Parliament House, 15 km from International Airport & 5 min from India GAte.",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/3000000/2390000/2386400/2386398/6b453970_b.jpg",
      },
      {
        id: 5,
        name: "The Leela Ambience Gurugram Hotel & Residences",
        area: "Rajokari",
        rating: 3.4,
        reviews: 471,
        price: 157,
        city: "Delhi",
        paymentType: "Reserve now Pay, Later",
        propertyType: "BUreau Veritas Platinum level hotel",
        discription:
          "15 mins Drive from IGI Airport. 5min drive from Cyber City, 10Min drive from World Mark & Golf Course Rd. Next to Ambience Mall",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/3000000/2280000/2270400/2270398/fb475959_b.jpg",
      },
      {
        id: 6,
        name: "Le Meridien Gurgaon, Delhi NCR",
        area: "Sikanderpuri Ghosi",
        rating: 4.2,
        reviews: 167,
        price: 136,
        city: "Delhi",
        paymentType: "Fully Refundable",
        propertyType: "Comifiest Beds, Delicious Breakfast",
        discription:
          "Stay at unbeatable rates with complimentary breakfast and wi-fi. Free stay for kids below 12 years of age.",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3850000/3844100/3844019/0d1c05a9_b.jpg",
      },
      {
        id: 7,
        name: "The Grand New Delhi",
        area: "Vasant Kunj",
        rating: 3.6,
        reviews: 463,
        price: 118,
        city: "Delhi",
        paymentType: "Reserve now Pay, Later",
        propertyType: "Relaxed stay in the heart of the city",
        discription:
          "Hotel with expansive gardens, close to shopping malls and the airport. Multi cuisine options, spa and a large swimming pool",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/530000/521100/521096/34773c63_b.jpg",
      },
      {
        id: 8,
        name: "The Roseate New Delhi",
        area: "South West",
        rating: 4.2,
        reviews: 161,
        price: 145,
        city: "Delhi",
        paymentType: "Reserve now Pay, Later",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/7000000/6450000/6441400/6441374/e255e840.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 9,
        name: "Roseate House",
        area: "Aerocity",
        rating: 4.2,
        reviews: 354,
        price: 115,
        city: "Delhi",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/11000000/10220000/10210200/10210101/532d599e.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 10,
        name: "The Oberoi, New Delhi",
        area: "New Delhi",
        rating: 4.9,
        reviews: 150,
        price: 197,
        city: "Delhi",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/21000000/20170000/20160800/20160759/e31ef8a9.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 11,
        name: "Shangri-La Eros, New Delhi",
        area: "Conaught Place",
        rating: 4.5,
        reviews: 998,
        price: 100,
        city: "Delhi",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/2000000/1310000/1304400/1304393/370d2f58.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 12,
        name: "The Lodhi - A member of The Leading Hotels of the World",
        area: "Conaught Place",
        rating: 4.6,
        reviews: 248,
        price: 278,
        city: "Delhi",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/3000000/2160000/2156400/2156310/eaf7ce30.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 13,
        name: "Vivanta New Delhi, Dwarka",
        area: "Dwarka",
        rating: 4.1,
        reviews: 383,
        price: 83,
        city: "Delhi",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/9000000/8740000/8738300/8738241/9fdc0ad2.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 14,
        name: "Radisson Blu Plaza Delhi Airport",
        area: "South west",
        rating: 4.1,
        reviews: 1002,
        price: 100,
        city: "Delhi",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/e1cfe61e.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 15,
        name: "Radisson Blu Hotel Noida",
        area: "Sector 18",
        rating: 4.4,
        reviews: 177,
        price: 131,
        city: "Delhi",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/2000000/1060000/1052500/1052412/33090d68.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
    ],

    Banglore: [
      {
        id: 1,
        name: "The Ritz-Carlton, Banglore",
        area: "AShok Nagar",
        rating: 3.7,
        reviews: 155,
        price: 247,
        city: "Banglore",
        paymentType: "Fully Refundable",
        propertyType: "City centre Hotel Near UB City & MG Road",
        discription:
          "Spacious Rooms & Suites with Bespoke Amenities, Dining Options, Roof-Top BAr, Wellness Retreate at Luxury Spa & Poolside Landscapes",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6470000/6468000/6467933/dcd3f8c3_b.jpg",
      },
      {
        id: 2,
        name: "SHeraton Grand Bengaluru Whitefield",
        area: "Bengaluru",
        rating: 4.7,
        reviews: 32,
        price: 141,
        city: "Bengaluru",
        paymentType: "Fully Refundable",
        propertyType: "Business with a break",
        discription:
          "Located near major IT parks & malls. Enjoy modern workspaces & wellness programs with exclusive offers on beverages and laundary.",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/24000000/23090000/23088600/23088585/728838fe_b.jpg",
      },
      {
        id: 3,
        name: "ITC Gardenia, a Luxury Collection Hotel, Bengaluru",
        area: "Ashok Nagar",
        rating: 2.6,
        reviews: 281,
        price: 206,
        city: "Bengaluru",
        paymentType: "Reserve now Pay, Later",
        propertyType: "Head for Responsible Luxury",
        discription:
          "Experience a luxury stay with scrumptious b'fast at Award winning restaurants with zero carbon footprints. Committed to WeAssure",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3120000/3114400/3114317/bcd4d43b_b.jpg",
      },
      {
        id: 4,
        name: "Sheraton Grand Banglore Hotel at Brigade Gateway",
        area: "Bengaluru",
        rating: 1.6,
        reviews: 241,
        price: 216,
        city: "Bengaluru",
        paymentType: "Reserve now Pay, Later",
        propertyType: "Indulgent safecation with MarriotBonvoy",
        discription:
          "Pamper your loved ones with inclusions like In-room movie experince, all meals, Kids stay for free, & you earn 5k Bonvoy points.",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/5000000/4300000/4290600/4290528/622d61f5_b.jpg",
      },
      {
        id: 5,
        name: "Conard Bengaluru",
        area: "Bengaluru",
        rating: 3.8,
        reviews: 43,
        price: 153,
        city: "Bengaluru",
        paymentType: "Fully Refundable",
        propertyType: "Bureau Veritas Platinum level hotel",
        discription:
          "Full prepayment upon booking. Free changes and cancellations up to 72 hrs before arrival",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/20000000/19220000/19217600/19217545/20591b57_b.jpg",
      },
      {
        id: 6,
        name: "Fairfiels By Marriott Bengaluru Outer Ring Road",
        area: "Bellandur",
        rating: 4.5,
        reviews: 50,
        price: 105,
        city: "Bengaluru",
        paymentType: "Fully Refundable",
        propertyType: "Comfiest Beds, Delicious Breakfast",
        discription:
          "Stay at unbeatable rates with complimentary breakfast and wi-fi. Free stay for kids below 12 years of age.",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/13000000/12610000/12605000/12604993/6ee202a0_b.jpg",
      },
      {
        id: 7,
        name: "Shangri-La Bengaluru",
        area: "Bengaluru",
        rating: 2.7,
        reviews: 203,
        price: 150,
        city: "Bengaluru",
        paymentType: "Reserve now Pay, Later",
        propertyType: "Linger longer in the Garden city",
        discription:
          "Perched high above the city, our light-filled spaces offer the perfect inspiration for exploring the city's sights.",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/13000000/12250000/12246300/12246261/646a4bee_b.jpg",
      },
      {
        id: 8,
        name: "Hyatt Centric MG Road Bangalore",
        area: "Bengaluru",
        rating: 4.1,
        reviews: 214,
        price: 137,
        city: "Bengaluru",
        paymentType: "fully refundable",
        propertyType: "Book Now to lock in Great Deals",
        discription:
          "Enjoy a safe stay in our accessible rooms with various packages and inclusions. High speed wifi, Relaxing Gym & SPA",
        image:
          "https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/798345b7.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 9,
        name: "Bengaluru Marriott Hotel Whitefield",
        area: "Whitefield",
        rating: 5.0,
        reviews: 54,
        price: 140,
        city: "Bengaluru",
        paymentType: "Fully refundable",
        propertyType: "The Longer you stay, the more your save.",
        discription:
          "Stay for 5 nights oe more to avail buffet breakfast, flexible check-in, deals on F&B, laundary and dry cleaning",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/6000000/5880000/5871900/5871814/3f83f2c9_b.jpg",
      },
      {
        id: 10,
        name: "JW Marriott Hotel Bengaluru",
        area: "AShok Nagar",
        rating: 1.6,
        reviews: 140,
        price: 250,
        city: "Bengaluru",
        paymentType: "Fully refundable",
        propertyType: "Monsoon Escape",
        discription:
          "Make the most of Bengaluru monsoon with our premium balcony rooms. Enjoy complimentary breakfast, evening chai and more.",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6360000/6356600/6356509/6b32cd1c_b.jpg",
      },
      {
        id: 11,
        name: "Taj MG Road, Bengaluru",
        area: "Bengaluru",
        rating: 4.3,
        reviews: 383,
        price: 164,
        city: "Bengaluru",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/1000000/530000/526400/526338/8ac86035.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 12,
        name: "Treebo Trip Omkar Inn",
        area: "Bengaluru",
        rating: 3.3,
        reviews: 153,
        price: 18,
        city: "Bengaluru",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/77000000/76700000/76697800/76697789/94375d14.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 13,
        name: "The Lalit Ashok Banglore",
        area: "Bengaluru",
        rating: 3.7,
        reviews: 123,
        price: 86,
        city: "Bengaluru",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/2000000/1150000/1149700/1149642/d9249df2.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 14,
        name: "Radisson Bengaluru City Centre",
        area: "Bengaluru",
        rating: 2.7,
        reviews: 177,
        price: 137,
        city: "Bengaluru",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/28000000/27410000/27401800/27401757/9d93e2fd.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 15,
        name: "Vivanta Bengaluru Residency Road",
        area: "Bengaluru",
        rating: 4.4,
        reviews: 217,
        price: 175,
        city: "Bengaluru",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/1000000/530000/526400/526359/9524e174.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
    ],
    Mumbai: [
      {
        id: 1,
        name: "The St. Regis Mumbai",
        area: "Mumbai",
        rating: 4.6,
        reviews: 455,
        price: 196,
        city: "Mumbai",
        paymentType: "Fully Refundable",
        propertyType: "Indulgent Staycation at the Best Address",
        discription:
          "Spacious Rooms & Suites with Bespoke Amenities, Dining Options, Roof-Top BAr, Wellness Retreate at Luxury Spa & Poolside Landscapes",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/6000000/5310000/5301700/5301691/000ae696_b.jpg",
      },
      {
        id: 2,
        name: "JW Marriot Mumbai Sahar",
        area: "Mumbai",
        rating: 4.5,
        reviews: 352,
        price: 157,
        city: "Mumbai",
        paymentType: "Fully Refundable",
        propertyType: "Comfiest Beds, Delicious Breakfast",
        discription:
          "Enjoy a safe stay in our accessible rooms with various packages and inclusions. High speed wifi, Relaxing Gym & SPA",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/10000000/9790000/9784600/9784580/2a61cd38_b.jpg",
      },
      {
        id: 3,
        name: "The Taj Mahal Palace Mumbai",
        area: "Mumbai",
        rating: 4.7,
        reviews: 201,
        price: 353,
        city: "Mumbai",
        paymentType: "Reserve now Pay, Later",
        propertyType: "Head for Responsible Luxury",
        discription:
          "Experience a luxury stay with scrumptious b'fast at Award winning restaurants with zero carbon footprints. Committed to WeAssure",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3120000/3114400/3114317/bcd4d43b_b.jpg",
      },
      {
        id: 4,
        name: "The Westin Mumbai Garden City",
        area: "Goregaon",
        rating: 4.6,
        reviews: 251,
        price: 183,
        city: "Mumbai",
        paymentType: "Reserve now Pay, Later",
        propertyType: "Handcrafted Urban Gateways within Mumbai",
        discription:
          "Free Pointsof Beer, INR 3000 Hotel Credit, Complimentary Breakfast, 20% discount on Spa, 15% off Food & Beverage, Laundary & more.",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3030000/3021000/3020992/286ff2c1_b.jpg",
      },
      {
        id: 5,
        name: "Sahara Star",
        area: "Mumbai",
        rating: 3.5,
        reviews: 669,
        price: 131,
        city: "Mumbai",
        paymentType: "Fully Refundable",
        propertyType: "Bureau Veritas Platinum level hotel",
        discription:
          "Full prepayment upon booking. Free changes and cancellations up to 72 hrs before arrival",
        image:
          "https://images.trvl-media.com/hotels/2000000/1790000/1781400/1781351/17948b3c.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 6,
        name: "Sofitel Mumbai BKC Hotel",
        area: "Bandra Kurla Complex",
        rating: 4.5,
        reviews: 550,
        price: 245,
        city: "Mumbai",
        paymentType: "Fully Refundable",
        propertyType: "Comfiest Beds, Delicious Breakfast",
        discription:
          "Stay at unbeatable rates with complimentary breakfast and wi-fi. Free stay for kids below 12 years of age.",
        image:
          "https://images.trvl-media.com/hotels/5000000/4260000/4253900/4253887/ed573636.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 7,
        name: "Hotel Sea Princess",
        area: "Mumbai",
        rating: 3.7,
        reviews: 221,
        price: 90,
        city: "Mumbai",
        paymentType: "Reserve now Pay, Later",
        propertyType: "Linger longer in the Garden city",
        discription:
          "Perched high above the city, our light-filled spaces offer the perfect inspiration for exploring the city's sights.",
        image:
          "https://images.trvl-media.com/hotels/3000000/2610000/2600800/2600773/df348763.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 8,
        name: "Orritel West",
        area: "Mumbai",
        rating: 4.0,
        reviews: 260,
        price: 62,
        city: "Bengaluru",
        paymentType: "fully refundable",
        propertyType: "Book Now to lock in Great Deals",
        discription:
          "Enjoy a safe stay in our accessible rooms with various packages and inclusions. High speed wifi, Relaxing Gym & SPA",
        image:
          "https://images.trvl-media.com/hotels/6000000/5260000/5258400/5258399/0efbf70f.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 9,
        name: "Hilton Mumbai International Airport",
        area: "Mumbai",
        rating: 4.2,
        reviews: 329,
        price: 170,
        city: "Mumbai",
        paymentType: "Fully refundable",
        propertyType: "Luxury Hotel at Intl Airport",
        discription:
          "Perfect for BUsines & Leisure Stays. Enjoy special offers like Great Small Breaks & top-grade cleanliness from Hilton CleanStay",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/540000/533200/533142/33a20a51_b.jpg",
      },
      {
        id: 10,
        name: "Hotel Crystal Inn",
        area: "Mumbai",
        rating: 3.8,
        reviews: 90,
        price: 26,
        city: "Mumbai",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/78000000/77950000/77946300/77946298/e4d39b5a.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 11,
        name: "Taj mahal Tower, Mumbai",
        area: "Mumbai",
        rating: 4.8,
        reviews: 990,
        price: 269,
        city: "Mumbai",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/2000000/1360000/1351900/1351876/1ac59945.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 11,
        name: "Four Seasons Hotel Mumbai",
        area: "Mumbai",
        rating: 4.5,
        reviews: 717,
        price: 219,
        city: "Mumbai",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/2000000/1620000/1619200/1619199/b8d2657d.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 12,
        name: "The Santacruz",
        area: "Vile Parle",
        rating: 4.6,
        reviews: 304,
        price: 190,
        city: "Mumbai",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/12000000/11550000/11544400/11544400/1b5ae2e3.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 13,
        name: "Grand Hyatt Mumbai Hotel and Serviced Apartments",
        area: "Vile Parle",
        rating: 4.5,
        reviews: 997,
        price: 183,
        city: "Mumbai",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/1000000/540000/533800/533762/ddde7a7c.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 14,
        name: "Taj Lands End",
        area: "Bandra West",
        rating: 4.5,
        reviews: 827,
        price: 291,
        city: "Mumbai",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/1000000/910000/905500/905407/076666ed.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 15,
        name: "Mirage Hotel",
        area: "Andheri",
        rating: 3.9,
        reviews: 517,
        price: 91,
        city: "Mumbai",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/3000000/2400000/2392900/2392880/a048c3dd.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
    ],
    Kolkata: [
      {
        id: 1,
        name: "JW Marriot Hotel Kolkata",
        area: "Kolkata",
        rating: 4.4,
        reviews: 146,
        price: 118,
        city: "Kolkata",
        paymentType: "Fully Refundable",
        propertyType: "Staycation Redefined",
        discription:
          "Indulge in inclusions like complimentary meals, bucket of beer, late checkout and more at JW Marriot Kolkata",
        image:
          "https://images.trvl-media.com/hotels/17000000/16480000/16474800/16474794/7443d80b.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 2,
        name: "Fairfield by Marriott Kolkata",
        area: "New Town",
        rating: 4.7,
        reviews: 32,
        price: 54,
        city: "Kolkata",
        paymentType: "Fully Refundable",
        propertyType: "Executive room Package",
        discription:
          "Buffet Breakast, cocktail hour from 18:30 hrs till 19:30 hrs",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/45000000/44400000/44399100/44399005/08a8b3a6_b.jpg",
      },
      {
        id: 3,
        name: "The Westin Kolkata Rajarhat",
        area: "New Town",
        rating: 4.4,
        reviews: 77,
        price: 72,
        city: "Kolkata",
        paymentType: "Reserve now Pay, Later",
        propertyType: "Head for Responsible Luxury",
        discription:
          "Experience a luxury stay with scrumptious b'fast at Award winning restaurants with zero carbon footprints. Committed to WeAssure",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/17000000/16720000/16714900/16714839/8f36c2ca_b.jpg",
      },
      {
        id: 4,
        name: "Taj Bengal",
        area: "Kolkata",
        rating: 4.4,
        reviews: 229,
        price: 92,
        city: "Kolkata",
        paymentType: "Reserve now Pay, Later",
        propertyType: "Indulgent safecation with Taj Bengal",
        discription:
          "Pamper your loved ones with inclusions like In-room movie experince, all meals, Kids stay for free.",
        image:
          "https://images.trvl-media.com/hotels/1000000/470000/465100/465007/c5556b6d.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 5,
        name: "The Oberoi Grand, Kolkata",
        area: "Kolkata",
        rating: 4.8,
        reviews: 43,
        price: 153,
        city: "Kolkata",
        paymentType: "Fully Refundable",
        propertyType: "Bureau Veritas Platinum level hotel",
        discription:
          "Full prepayment upon booking. Free changes and cancellations up to 72 hrs before arrival",
        image:
          "https://images.trvl-media.com/hotels/1000000/30000/20500/20421/41e24b81.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 6,
        name: "Holiday Inn Kolkata Airport, an IHG Hotel",
        area: "New Town",
        rating: 4.1,
        reviews: 520,
        price: 55,
        city: "Kolkata",
        paymentType: "Fully Refundable",
        propertyType: "Comfiest Beds, Delicious Breakfast",
        discription:
          "Stay at unbeatable rates with complimentary breakfast and wi-fi. Free stay for kids below 12 years of age.",
        image:
          "https://images.trvl-media.com/hotels/17000000/16160000/16159500/16159430/8a9cc8e1.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 7,
        name: "Novotel Kolkata Hotel & Residences Hotel",
        area: "New Town",
        rating: 4.2,
        reviews: 183,
        price: 87,
        city: "Kolkata",
        paymentType: "Reserve now Pay, Later",
        propertyType: "City escape offer",
        discription:
          "Come and experince the luxury of staycation. Enjoy Breakfast and meal of your choice, Lunch or Dinner and much more. Pet Friendly",
        image:
          "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/8000000/7900000/7897900/7897848/055e3de0_b.jpg",
      },
      {
        id: 8,
        name: "The Peerless Inn -Kolkata",
        area: "Kolkata",
        rating: 4.1,
        reviews: 214,
        price: 137,
        city: "Kolkata",
        paymentType: "fully refundable",
        propertyType: "Book Now to lock in Great Deals",
        discription:
          "Enjoy a safe stay in our accessible rooms with various packages and inclusions. High speed wifi, Relaxing Gym & SPA",
        image:
          "https://images.trvl-media.com/hotels/2000000/1070000/1066400/1066383/982d9491.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 9,
        name: "Pride Plaza Hotel, Kolkata",
        area: "New Town",
        rating: 4.5,
        reviews: 54,
        price: 140,
        city: "Kolkata",
        paymentType: "Fully refundable",
        propertyType: "The Longer you stay, the more your save.",
        discription:
          "Stay for 5 nights oe more to avail buffet breakfast, flexible check-in, deals on F&B, laundary and dry cleaning",
        image:
          "https://images.trvl-media.com/hotels/5000000/4940000/4934800/4934751/8b289576.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 10,
        name: "ITC Royal Bengal, a Luxury Collection Hotel, Kolkata",
        area: "Kolkata",
        rating: 4.6,
        reviews: 140,
        price: 250,
        city: "Kolkata",
        paymentType: "Fully refundable",
        propertyType: "Book Now to lock in Great Deals",
        discription:
          "Located near major IT parks & malls. Enjoy modern workspaces & wellness programs with exclusive offers on beverages and laundary.",
        image:
          "https://images.trvl-media.com/hotels/38000000/37600000/37590700/37590630/bfe26626.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 11,
        name: "ITC Sonar, a Luxury Collection Hotel,",
        area: "Kolkata",
        rating: 4.4,
        reviews: 190,
        price: 90,
        city: "Kolkata",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/1000000/930000/922100/922011/2fcb7d6e.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 12,
        name: "Kenilworth Hotel, Kolkata",
        area: "Park Street",
        rating: 4.2,
        reviews: 183,
        price: 87,
        city: "Kolkata",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/1000000/20000/12100/12075/e51f80ee.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 13,
        name: " ibis Kolkata Rajarhat Hotel",
        area: "New Town",
        rating: 4.1,
        reviews: 26,
        price: 43,
        city: "Kolkata",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/28000000/27710000/27706000/27705927/6c4f987c.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 14,
        name: " Vedic Village Spa Resort",
        area: "Vedic",
        rating: 3.9,
        reviews: 55,
        price: 72,
        city: "Kolkata",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/9000000/8120000/8119600/8119508/3653279e.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
      {
        id: 15,
        name: "The Claridale Ballygunge",
        area: "Kolkata",
        rating: 5.0,
        reviews: 5,
        price: 65,
        city: "Kolkata",
        paymentType: "Fully refundable",
        propertyType: "",
        discription: "",
        image:
          "https://images.trvl-media.com/hotels/75000000/74280000/74271900/74271853/dfd30f5d.jpg?impolicy=resizecrop&rw=455&ra=fit",
      },
    ],
  });

  useEffect(() => {
    sortData();
    filterData();
  }, [sort, filter]);
  const sortData = () => {
    if (sort == "price") {
      let arr = data.Banglore.sort((a, b) => {
        return a.price - b.price;
      });
      setData({ ...data, Banglore: arr });
    }
    if (sort == "rating") {
      let arr = data.Banglore.sort((a, b) => {
        return b.rating - a.rating;
      });
      setData({ ...data, Banglore: arr });
    }
  };
  const filterData = () => {
    if (filter == 1) {
      let arr = data.Banglore.filter((e) => {
        return e.rating < 2;
      });
      setData({ ...data, Banglore: arr });
    } else if (filter == 2) {
      let arr = data.Banglore.filter((e) => {
        return e.rating >= 2 && e.rating < 3;
      });
      setData({ ...data, Banglore: arr });
    } else if (filter == 3) {
      let arr = data.Banglore.filter((e) => {
        return e.rating >= 3 && e.rating < 4;
      });
      setData({ ...data, Banglore: arr });
    } else if (filter == 4) {
      let arr = data.Banglore.filter((e) => {
        return e.rating >= 4 && e.rating < 5;
      });
      setData({ ...data, Banglore: arr });
    } else if (filter == 5) {
      let arr = data.Banglore.filter((e) => {
        return e.rating >= 5;
      });
      setData({ ...data, Banglore: arr });
    }
  };
  const filterDatabyPrice = () => {
    console.log("filterDatabyPrice:", filterDatabyPrice);
  };

  return (
    <div>
      {data.Banglore.map((e) => (
        <div className="maindiv">
          <div className="imgdiv">
            <img src={e.image} alt="" />
          </div>
          <div className="descdiv">
            <h4>{e.name}</h4>
            <p className="grey">{e.area}</p>
            <p className="prop">{e.propertyType}</p>
            <p className="dis">{e.discription}</p>
            <p className="green">{e.paymentType}</p>
            <h5>
              {e.rating}/5 ({e.reviews}review)
            </h5>
          </div>
          <div className="pricediv">
            <h3>${e.price}</h3>
            <button
              onClick={() => {
                const selected = {
                  image: e.image,
                  name: e.name,
                  area: e.area,
                  propertyType: e.propertyType,
                  discription: e.discription,
                  paymentType: e.paymentType,
                  price: e.price,
                  rating: e.rating,
                  reviews: e.reviews,
                };
                localStorage.setItem("cartItems", JSON.stringify(selected));
                navigate("/payment");
              }}
              className="res"
            >
              Reserve
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
