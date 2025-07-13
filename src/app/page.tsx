import { ModeToggle } from "@/components/modetoggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Homepage from "./homepage/page";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-stretch w-full">
          <div className="sticky top-0 z-20 flex h-14 items-center justify-start pl-4 bg-white dark:bg-black/95 backdrop-blur border-b">
              <SidebarTrigger />
              <div className='ml-2 text-sm text-gray-500 dark:text-gray-400'>
                Click to toggle sidebar
              </div>
              <div className="ml-4"><ModeToggle /></div>
              
          </div>
      <Homepage/>
    </div>
    </div>
  );
}
