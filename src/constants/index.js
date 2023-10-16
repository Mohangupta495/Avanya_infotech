import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
import {AiFillHome} from 'react-icons/ai'
import {BsGlobe2,BsFillPeopleFill} from 'react-icons/bs'
import {BiSolidLayer} from "react-icons/bi"
import {IoSettingsSharp} from "react-icons/io5"
import {ImCart} from "react-icons/im"

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About US",
  },
  {
    id: "product",
    title: "Products",
  },
  {
    id: "service",
    title: "Service",
  },
  {
    id: "contact",
    title: "Contact US",
  },
];

export const linksForSideMenu = [
  {
    id: "home",
    title: "Home",
    link:"",
    icon:AiFillHome,
  },
  {
    id: "clients",
    title: "Services",
    link:"service",
    icon:BiSolidLayer,
  },
  {
    id: "features",
    title: "Company",
    link:"about",
    icon:BsGlobe2
  },
  // {
  //   id: "clients",
  //   title: "Technologies",
  //   link:"",
  //   icon:IoSettingsSharp
  // },
  {
    id: "product",
    title: "Products",
    link:"product",
    icon:ImCart
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Quality is our Motto",
    content:
      "The two job portals Avinya Infotech, leaders in their respective regions, belong to Avinya.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Experience is our Strength",
    content:
      "With our large variety of activities, our presence at numerous events, in advertising and online on your job offers.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "We are Versatile",
    content:
      "Publishing an ad is not the only way to reach executives and specialists; that is why we are constantly developing complementary solutions.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "quick implementation of cloud and cloud data services",
    name: "Mobile App Design",
    title: "App Development",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Ecommerce,B2B and B2C Webdesign and Development",
    name: "Web Design & Development",
    title: "Web Development",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Setting up your business for the future is the focal point of our IT Strategy and Architecture services",
    name: "IT Strategy & Architecture",
    title: "Management Development",
    img: people03,
  },
  {
    id: "feedback-4",
    content:
      "Our DevOps department specializes in ensuring high velocity and high quality software",
    name: "Devops",
    title: "Connecting Development",
    img: people03,
  },
  {
    id: "feedback-5",
    content:
      "Without much hassles on your to do list every day.",
    name: "On Site Staffing",
    title: "Management Development",
    img: people03,
  },
  {
    id: "feedback-6",
    content:
      "We can handle your outsourced work at our New Jersey as well Surat ODC",
    name: "Outsource",
    title: "Management Development",
    img: people03,
  },
  {
    id: "feedback-7",
    content:
      "Product,Customer,Financial, Asset, Human Resources and Manufacturing Analysis",
    name: "Data Analysis",
    title: "Data Management",
    img: people03,
  },
  {
    id: "feedback-8",
    content:
      "Without much hassles on your to do list every day",
    name: "Offshore Staffing",
    title: "Staffing Management",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
  {}
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  // {
  //   id: "social-media-1",
  //   icon: instagram,
  //   link: "https://www.instagram.com/",
  // },
  // {
  //   id: "social-media-2",
  //   icon: facebook,
  //   link: "https://www.facebook.com/",
  // },
  // {
  //   id: "social-media-3",
  //   icon: twitter,
  //   link: "https://www.twitter.com/",
  // },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  // {
  //   id: "client-1",
  //   logo: airbnb,
  // },
  // {
  //   id: "client-2",
  //   logo: binance,
  // },
  // {
  //   id: "client-3",
  //   logo: coinbase,
  // },
  // {
  //   id: "client-4",
  //   logo: dropbox,
  // },
  {}
];