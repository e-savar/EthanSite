import Timeline from "@/components/timeline-01/timeline-01"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { ExternalLink } from "lucide-react"

function Homepage() {

  return (
    <div className="w-full">
        <Card className="pt-16 md:pt-20 pb-12 md:pb-16 px-4 sm:px-6 bg-white dark:bg-black min-h-[80vh] flex items-center justify-center w-full rounded-none">
            <div className="max-w-4xl mx-auto text-center w-full">
                <CardHeader className="flex flex-row items-center mb-2 md:mb-4">
                    <Avatar className="w-5/12 h-28 sm:w-36 sm:h-36 md:w-45 md:h-45 mx-auto mb-6 md:mb-8">
                        <AvatarImage alt="Ethan Savar" width="160" height="160" decoding="async" data-nimg="1" className="w-full h-full rounded-full object-cover shadow-2xl" src="/headshot.JPEG" />
                    </Avatar>
                    <CardTitle className="w-6/12 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-black dark:text-white">
                        Ethan Savar
                    </CardTitle>
                    <div className="w-1/12"></div>
                </CardHeader>
                
                <CardContent className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 leading-relaxed max-w-3xl mx-auto px-2">
                    Computer Science &amp; Mathematics Student @ Ohio State University
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-4 md:mb-6 px-2">
                    <span className="text-sm sm:text-base text-center">
                    <span className="font-medium">Current:</span> JPMorganChase </span><span className="hidden sm:inline">|</span><span className="text-sm sm:text-base text-center"><span className="font-medium">Previous:</span> Immuta</span>
                </CardFooter>
                <p className="text-base sm:text-lg mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto px-4">Aspiring PhD student interested in Complexity Theory, Algorithms, Machine Learning, Differential Equations, Applied Statistics and Randomness.</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                    { /*                     <a className=" inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full sm:w-auto min-w-[140px] " href="">View Projects</a><a href="/resume/Farhan_Sadeek_Website_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 w-full sm:w-auto min-w-[140px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>Download CV</a><a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 w-full sm:w-auto min-w-[140px]" href="/contact">Contact</a>
*/}
                    <a className=" inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-gray-300 text-primary-foreground  h-11 rounded-md px-8 w-full sm:w-auto min-w-[140px] ">
                        <Tooltip>
                            <TooltipTrigger>View Projects</TooltipTrigger>
                            <TooltipContent>
                                <p>Under Construction</p>
                            </TooltipContent>
                        </Tooltip></a>
                    <a href="/EthanSavarResume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background dark:bg-sidebar dark:hover:bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 w-full sm:w-auto min-w-[140px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>Download CV</a>
                    <a className=" inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-gray-300 text-primary-foreground  h-11 rounded-md px-8 w-full sm:w-auto min-w-[140px] "><Tooltip>
                            <TooltipTrigger>Contact</TooltipTrigger>
                            <TooltipContent>
                                <p>Under Construction</p>
                            </TooltipContent>
                        </Tooltip></a>
                    {/*<a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 w-full sm:w-auto min-w-[140px]" href="/contact">Contact</a> */}
                </div>
            </div>
        </Card>
        <Card id="education" className="py-12 md:py-16 px-4 sm:px-6 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 w-full rounded-none">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-row items-center justify-center mb-8 md:mb-12 gap-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white">Education</h2>
                    <Tooltip>
                            <TooltipTrigger><a href="/education" className="hover:text-sidebar"><ExternalLink /></a></TooltipTrigger>
                            <TooltipContent>
                                <p>View Page</p>
                            </TooltipContent>
                        </Tooltip>
                </div>
                <div className="rounded-lg border text-card-foreground shadow-sm hover:shadow-lg transition-shadow bg-white dark:bg-black border-gray-200 dark:border-gray-800">
                    <div className="p-4 md:p-6">
                        <div className="flex mb-4">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                <span className="text-red-600 dark:text-red-600 font-bold">O</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white">The Ohio State University</h3>
                                    <Badge variant="secondary" className="px-2.5 py-1 rounded-full">3.5 GPA</Badge>
                                </div>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">B.S. in CSE, Math • May 2026</p>
                                </div>
                            </div>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">Majoring in Computer Science Engineering, Theoretical Mathematics, and part of the Honors Integrated Business and Engineering Program. Teaching Assistant for CSE 2331: Data Structures and Algorithms, and Co-Founder/past VP of Quantitative Finance of student club Scarlet Investment Group.</p>
                            <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary"
                      className=" px-2.5 py-0.5 rounded-full">Computer Science</Badge>
                            <Badge variant="secondary"
                      className=" px-2.5 py-0.5 rounded-full">Theoretical Mathematics</Badge>
                            <Badge variant="secondary"
                      className=" px-2.5 py-0.5 rounded-full">Honors</Badge>
                            <Badge variant="secondary"
                      className=" px-2.5 py-0.5 rounded-full">Engineering</Badge>
                            <Badge variant="secondary"
                      className=" px-2.5 py-0.5 rounded-full">Business</Badge>
                            <Badge variant="secondary"
                      className=" px-2.5 py-0.5 rounded-full">Research</Badge>
                            <Badge variant="secondary"
                      className=" px-2.5 py-0.5 rounded-full">Quantitative Finance</Badge>
                        </div>
                    </div>
                </div>
            </div>       
        </Card>
        <Card id="experience" className="py-12 md:py-16 px-4 sm:px-6 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 w-full rounded-none">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-row items-center justify-center mb-8 md:mb-12 gap-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white">Experience</h2>
                    <Tooltip>
                            <TooltipTrigger><a href="/experience" className="hover:text-sidebar"><ExternalLink /></a></TooltipTrigger>
                            <TooltipContent>
                                <p>View Page</p>
                            </TooltipContent>
                        </Tooltip>
                </div>
                <Timeline />
            </div>       
        </Card>
    </div>
  )
}
export default Homepage