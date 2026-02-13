import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";
import Card from "@/components/ui/Card";

const collectionData = [
  {
    id: 1,
    title: "Online Shop",
    description: "Sell items online to optimize sales",
    icon: "/icons/Storefront.svg",
    badge: null,
    path: "#",
  },
  {
    id: 2,
    title: "Group Gifts",
    description: "Easily collect money for group gifts",
    icon: "/icons/Gift.svg",
    badge: null,
    path: "/group-gifts",
  },
  {
    id: 3,
    title: "Forms",
    description: "Sign ups, forms, and waivers without payments",
    icon: "/icons/Files.svg",
    badge: null,
    path: "#",
  },
  {
    id: 4,
    title: "Recurring Payments",
    description: "Membership registration or subscription dues",
    icon: "/icons/CurrencyArrowRight.svg",
    badge: null,
    path: "#",
  },
  {
    id: 5,
    title: "Event Tickets",
    description: "Sell tickets and accept payments ",
    icon: "/icons/Ticket.svg",
    badge: "Pro plan",
    path: "#",
  },
  {
    id: 6,
    title: "Custom All-in-One",
    description: "Sell or collect anything (items, tickets, forms, etc.)",
    icon: "/icons/SquaresFour.svg",
    badge: "Pro plan",
    path: "#",
  },
] as const;

const fundraiserData = [
  {
    id: 1,
    title: "Flat Donations",
    description: "Supporters to contribute a one-time donation",
    icon: "/icons/Donations.svg",
    badge: null,
    path: "#",
  },
  {
    id: 2,
    title: "Product Sales",
    description: "Supporters purchase from an online sales catalog",
    icon: "/icons/Product-Sales.svg",
    badge: null,
    path: "#",
  },
  {
    id: 3,
    title: "Activity-based “Athon”",
    description: "Supporters pledge amount per participant activity",
    icon: "/icons/Athon.svg",
    badge: null,
    path: "#",
  },
] as const;

export default function Home() {
  return (
    <section className="bg-backColor min-h-screen">
      <div className="pt-[16px] sm:pt-[30px] lg:pt-[53px] max-w-[1366px] w-[93%] mx-auto">
        <Heading
          title="What would you like to build today?"
          variant="main"
          className="text-[24px] sm:text-[30px] lg:text-[40px]"
        />

        <Label
          title="COLLECTION"
          className="mt-[25px] sm:mt-[39px] text-[14px] sm:text-[18px]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[12px] sm:gap-[24px] mt-[12px] mb-[30px] sm:mb-[62px]">
          {collectionData.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              badge={item.badge}
              path={item.path}
            />
          ))}
        </div>

        <div className="flex gap-[6px]">
          <Label title="FUNDRAISER" className="text-[14px] sm:text-[18px]" />
          <div className="flex gap-[3px] items-center">
            <Image
              src="/icons/Question.svg"
              alt="Question"
              width={20}
              height={20}
              className="h-[20px] w-[20px] sm:w-auto sm:h-auto m-auto"
            />
            <a
              href="#"
              className="text-[#257F91] font-avenir text-[14px] sm:text-[18px] font-400 cursor-pointer"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[12px] sm:gap-[24px] mt-[12px] sm:mt-[25px] mb-[62px]">
          {fundraiserData.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              badge={item.badge}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
