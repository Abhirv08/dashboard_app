import Chats from "@/components/chats";
import Customers from "@/components/customers";
import Growth from "@/components/growth";
import Lost_deals from "@/components/lost_deals";

import Quarter_goal from "@/components/quarter_goal";
import Revenue from "@/components/revenue";
import Top_states from './../components/top_states';
import New_deals from "@/components/new_deals";
import Sidebar from "@/components/sidebar";

export default function Home() {

  return (
    <div className="relative md:flex gap-4 p-4 h-full md:h-screen w-full ">
      <div className="sidebar_container fixed md:static h-full  z-50"><Sidebar /></div>
      <div className="body_container flex flex-col gap-4 items-center overflow-y-auto overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <Revenue />
          <Lost_deals />
          <Quarter_goal />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <Customers />
          <Growth />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <Chats />
          <Top_states />
          <New_deals />
        </div>
      </div>
    </div>
  );
}
