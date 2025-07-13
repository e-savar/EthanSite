import { BriefcaseBusiness, FolderGit2, GraduationCap, Home, MessageSquareShare } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Education",
    url: "#education",
    icon: GraduationCap,
  },
  {
    title: "Experience",
    url: "#experience",
    icon: BriefcaseBusiness,
  }
]
const disabledItems = [
  {
    title: "Projects * (Coming Soon) *",
    url: "",
    icon: FolderGit2,
    disabled: true, // Placeholder for future projects page
  },
  {
    title: "Contact * (Coming Soon) *",
    url: "",
    icon: MessageSquareShare,
    disabled: true, // Placeholder for future projects page
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarMenu>
              {disabledItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a>
                      <item.icon className="text-gray-500"/>
                      <span className="text-gray-500">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}