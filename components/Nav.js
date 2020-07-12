export default function Nav() {
  return (
    <nav className="w-screen mx-auto md:w-full h-24 shadow" style={{position: "sticky", top: 0, background: "#ffffff"}}>
    <div className="py-2 flex justify-between">
        <a className="" href="/"><img className="h-20 lg:xl:pl-16 xl:pl-16" src="/assets/logo.png" /></a>
        <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 mt-4 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        </button>
    </div>
    <div className="hidden lg:block">
      <ul className="inline-flex my-8 text-center">
      <div className="flex-none dropdown" style={{width: `160px`}}>
        <button className="px-4 hover:text-gray-800 text-base uppercase" href="#">Genesis</button>
          <div className="dropdown-content">
            <a className="p-2" href="/genesis/problem">Problem</a>
            <a className="p-2" href="/genesis/learning">Learning</a>
          </div>
      </div>

      <div className="flex-none dropdown" style={{width: `160px`}}>
        <button className="px-4 hover:text-gray-800 text-base uppercase" href="#">Methodology</button>
          <div className="dropdown-content">
            <a className="p-2" href="/methodology/approach">Approach</a>
            <a className="p-2" href="/methodology/solution">Solution</a>
            <a className="p-2" href="/methodology/platform">Platform</a>
          </div>
      </div>


      {/* <div className="flex-none dropdown hover:bg-green-500">
        <button className="px-4 hover:text-gray-800 text-base uppercase">Impact</button>
          <div className="dropdown-content">
            <a className="p-2" href="/impact/scale">Impact at Scale</a>
            <a className="p-2" href="/impact/projects">Current Projects</a>
            <a className="p-2" href="/impact/partners">Co-Creation Partners</a>
          </div>
      </div> */}

      <div className="flex-none dropdown" style={{width: `160px`}}>
        <button className="px-4 hover:text-gray-800 text-base uppercase">Collaboration</button>
          <div className="dropdown-content">
            {/* <a className="p-2" href="/collaboration/pie-chapter">PIE Chapter</a>
            <a className="p-2" href="/collaboration/license">PCL</a> */}
            <a className="p-2" href="/collaboration/partner">Partner with Us</a>
            {/* <a className="p-2" href="/contact">Contact</a> */}
          </div>
      </div>

      <div className="flex-none dropdown" style={{width: `160px`}}>
        <button className="px-4 hover:text-gray-800 text-base uppercase" href="#">About</button>
          <div className="dropdown-content">
            <a className="p-2" href="/about/mission">Vision & Mission</a>
            <a className="p-2" href="/about/creators">Co-creators</a>
            <a className="p-2" href="/about/team">Team</a>        
          </div>
      </div>

      </ul>
    </div>
    </div>
    </nav>
    )
  }