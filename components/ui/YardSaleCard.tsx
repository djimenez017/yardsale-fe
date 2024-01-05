import Image from "next/image";
import {
  IoLocationOutline,
  IoCalendarOutline,
  IoStopwatchOutline,
} from "react-icons/io5";

export default function YardSaleCard() {
  return (
    <div className="bg-white p-5 rounded-md flex flex-row items-center my-5 transition-colors duration-200 border-2 border-white hover:border-2 hover:border-purple box-border ">
      {/* image */}
      <div className="w-1/4">
        {" "}
        <Image
          src="https://cdn.apartmenttherapy.info/image/upload/v1654009408/at/living/2022-06/yard%20sales/yard_sale.jpg"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
      {/* info */}
      <div className="w-3/4">
        <h2 className="font-bold text-purple">Multi Family Sale</h2>
        <div className="flex items-center text-sm color-gray p-1">
          <IoLocationOutline />
          <address className="pl-1">
            808 S Magnolia Ave, Monrovia, CA 91016
          </address>
        </div>
        <div className="flex items-center text-sm color-gray p-1">
          <IoCalendarOutline />{" "}
          <p className="pl-1">Saturday, January 6, 2024</p>
        </div>
        <div className="flex items-center text-sm color-gray p-1">
          <IoStopwatchOutline />
          <p className="pl-1"> 8:00 am - 4:00 pm</p>
        </div>

        <div className="p-1">
          <i className="bg-purple text-white p-1 rounded-lg m-1 ">Tech</i>
          <i className="bg-purple text-white p-1 rounded-lg m-1">Furniture</i>
          <i className="bg-purple text-white p-1 rounded-lg m-1">Toys</i>
        </div>
      </div>
    </div>
  );
}
