import Storefront from "../assets/icons/Storefront.svg";
import Gift from "../assets/icons/Gift.svg";
import Files from "../assets/icons/Files.svg";
import CurrencyArrowRight from "../assets/icons/CurrencyArrowRight.svg";
import Ticket from "../assets/icons/Ticket.svg";
import SquaresFour from "../assets/icons/SquaresFour.svg";

const Categorydata = [
  {
    id: 1,
    title: "Online Shop",
    description: "Sell items online to optimize sales",
    icon: Storefront,
    badge: null,
    path: "#",
  },
  {
    id: 2,
    title: "Group Gifts",
    description: "Easily collect money for group gifts",
    icon: Gift,
    badge: null,
    path: "/group-gifts",
  },
  {
    id: 3,
    title: "Forms",
    description: "Sign ups, forms, and waivers without payments",
    icon: Files,
    badge: null,
    path: "#",
  },
  {
    id: 4,
    title: "Recurring Payments",
    description: "Membership registration or subscription dues",
    icon: CurrencyArrowRight,
    badge: null,
    path: "#",
  },
  {
    id: 5,
    title: "Event Tickets",
    description: "Sell tickets and accept payments ",
    icon: Ticket,
    badge: "Pro plan",
    path: "#",
  },
  {
    id: 6,
    title: "Custom All-in-One",
    description: "Sell or collect anything (items, tickets, forms, etc.)",
    icon: SquaresFour,
    badge: "Pro plan",
    path: "#",
  },
];

export default Categorydata;
