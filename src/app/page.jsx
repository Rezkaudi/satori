
// section
import Hero from "@/sections/Hero/Hero"
import Notice from "@/sections/Notice/Notice"
import Features from "@/sections/Features/Features"
import WhatIs from "@/sections/WhatIs/WhatIs"
import FunctionIntroduction from "@/sections/FunctionIntroduction/FunctionIntroduction"
import TopBlogs from "@/sections/TopBlogs/TopBlogs"


// components
import Brand from "@/components/Brand/Brand"

const Home = () => {

  return (
    <main>
      <Hero />
      <Notice />
      <Features />
      <WhatIs />
      <FunctionIntroduction />
      <TopBlogs/>
      
      <Brand/>
    </main>
  )
}
export default Home
