import { CiSearch } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

export const NAVBAR_LIST = [
  { 
    id: 0,
    name: "",
    link: "#",
    icon: FaApple 
  },

  { 
    id: 1,
    name: "Store",
    link: "store" 
  },
  { 
    id: 2,
    name: "Mac",
    link: "mac" 
  },

  {
    id: 3,
    name: "iPad",
    link: "ipad"
  },

  { id: 4,
    name: "iPhone",
    link: "iphone"
  },

  { 
    id: 5,
    name: "Watch",
    link: "watch"

  },

  { 
    id: 6,
    name: "Vision",
    link: "vision"
  },

  { 
    id: 7,
    name: "AirPods",
    link: "airpods"
  },

  { 
    id: 8,
    name: "TV & Home",
    link: "tv & home"
  },

  { 
    id: 9,
    name: "Entertaiment",
    link: "entertaiment"
  },

  { 
    id: 10,
    name: "Accessories",
    link: "accessories"
  },

  { 
    id: 11,
    name: "Support",
    link: "support"
  },

  { 
    id: 12,
    name: "",
    link: "search",
    icon: CiSearch
  },

  { 
    id: 13,
    name: "", 
    link: "#", 
    icon: IoBagOutline 
  },
];

export const PRODUCT_ITEMS = [
  {
    url: "https://www.apple.com/v/home/bv/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_small_2x.jpg",
    title: "AirPods4",
    desc1: "Iconic. Now supersonic.",
    desc2: "Available with Active Noise Cancellation.",
    buttons: ["Learn more", "Buy"],
    top: false,
    cl: "#fff",
  },

  {
    url: "https://www.apple.com/v/home/bv/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_small_2x.jpg",
    title: (
      <img
        src="https://www.apple.com/v/home/bv/images/logos/apple-watch-series-10/promo_logo_apple_watch_series_10__qk5vaa89vnm2_medium.png"
        alt=""
      />
    ),
    desc2: "Thinstant classic",
    buttons: ["Learn more", "Buy"],
    top: true,
    cl: "#000",
  },

  {
    url: "https://www.apple.com/v/home/bv/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_large.jpg",
    title: "MacBook Air",
    desc1: "Lean. Mean. M3 machine",
    desc2: "",
    buttons: ["Learn more", "Buy"],
    top: true,
    cl: "#000",
  },

  {
    url: "https://www.apple.com/v/home/bv/images/promos/apple-small-business/promo_asb__gajxkvbkiqie_small_2x.png",
    title: "Apple for Small Business",
    desc1: "Hardware, software, and expert",
    desc2: "help - all in one place",
    buttons: ["Learn more", "Buy"],
    top: true,
    cl: "#000",
  },

  {
    url: "https://www.apple.com/v/home/bv/images/promos/carriers/promo_carrier__e0izvxwqosgi_small_2x.jpg",
    title: "Carrier deals at Apple",
    desc1: "Get up to $1000 in credit on a new iPhone",
    desc2: "ATrade-in may be required.",
    buttons: ["Find your deal"],
    top: false,
    cl: "#000",
  },

  {
    url: "https://www.apple.com/v/home/bv/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_small_2x.jpg",
    title: (
      <img
        src="https://www.apple.com/v/home/bv/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_medium.png"
        alt=""
      />
    ),
    desc1: "Get $180 - $650 in credit when you",
    desc2: "trade in iPhone 12 or higher.",
    buttons: ["Get your estemate"],
    top: true,
    cl: "#000",
  },

];