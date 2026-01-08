// // import React from 'react'
// // import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// // import Narbar from './component/Narbar'
// // import Home from './zoomstand/Home'
// // import ProductDetails from './zoomstand/ProductDetails'
// // import MensFashion from './zoomstand/MensFashion'
// // import WomanFasion from './zoomstand/WomanFasion'
// // import Electronics from './zoomstand/Electronics'
// // import Jewelery from './zoomstand/Jewelery'
// // import Footer from './component/Footer'
// // import ProductList from './component/ProductList'



// // const App = () => {
// //   return (
// //     <Router>
// //          <Narbar/>
// //       <Routes>
// //         <Route path='/' element={<Home/>}/>
// //           <Route path='/mensfashion' element={<MensFashion/>}/>
// //          <Route path='/womenfashion' element={<WomanFasion/>}/>
// //          <Route path='/electronics' element={<Electronics/>}/>
// //          <Route path='/jewelery' element={<Jewelery/>}/>
// //          <Route path='/product/:id' element={<ProductDetails/>}/>
// //          <Route path='/shop' element={<ProductList/>}/>
// //       </Routes>
// //       <Footer/>
// //     </Router>
// //   )
// // }

// // export default App

// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Homepage from './jobListing/Homepage'
// import JobDetails from './component/JobDetails'
// import PostJob from './component/PostJob'
// import CommunityPage from './component/CommunityPage'
// import NavBarJobListing from './component/NavBarJobListing'
// import FindWork from './component/FindWork'
// import FindTalent from './component/FindTalent'
// import TalentProfile from './component/TalentProfile'
// import JobSignIn from './component/JobSignIn'
// import JobSignUp from './component/JobSignUp'
// import SavedJob from './component/SavedJob'
// import EngineeringJob from './component/EngineeringJob'
// import DesignJob from './component/DesignJob'
// import MarketingJob from './component/MarketingJob'


// const App = () => {
//   return (
//     <Router>
//       <NavBarJobListing/>
//       <Routes>
//         <Route path='/' element={<Homepage/>}/>
//         <Route path="/job/:id" element={<JobDetails />} />
//           <Route path="/post-job" element={<PostJob />} />
//            <Route path="/community" element={<CommunityPage />} />
//           <Route path="/post-job" element={<PostJob />} />
//           <Route path='/find-work' element={<FindWork/>}/>
//           <Route path='/find-talent' element={<FindTalent/>}/>
//           <Route path='/talent/:id' element={<TalentProfile/>}/>
//           <Route path='signin' element={<JobSignIn/>}/>
//           <Route path='/signup' element={<JobSignUp/>}/>
//           <Route path='/saved-jobs' element={<SavedJob/>}/>
//           <Route path='/categories/engineering' element={<EngineeringJob/>}/>
//           <Route path='/categories/design' element={<DesignJob/>}/>
//           <Route path='/categories/marketing' element={<MarketingJob/>}/>
//       </Routes>
//     </Router>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './MyPortfolio/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App