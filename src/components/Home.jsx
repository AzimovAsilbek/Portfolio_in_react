import React from 'react'
// import '../app/App.css'
// import car from '../imgs/car.jpg';
// import controller from '../imgs/controller.jpg';
// import whitebengaltiger from '../imgs/whitebengaltiger.jpg';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

function Home() {
    // const about = 'about';
    // const blog = 'blog';
    // const contact = 'contact';
    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </>
        // <div className="App">
        //     <header className="App-header">
        //         <div className="container-head">
        //             <h1>hello world</h1>
        //             <ul>
        //                 <li>
        //                     <a href="#about">{about}</a>
        //                     <a href="#blog">{blog}</a>
        //                     <a href="#contact">{contact}</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </header>
        //     {/* main ****************************************************************/}
        //     <main className='App-main'>
        //         <div className="about" id="about">
        //             <h1 className='h1'>About</h1><br />
        //             <p className='p1'>
        //                 <div className="p--1">Lorem ipsum dolor sit amet.</div>
        //                 <div className="p--2">Lorem ipsum dolor sit amet.</div>
        //                 <div className="p--3">Lorem ipsum dolor sit amet consec.</div>
        //                 <div className="p--4">Lorem ipsum dolor sit amet consecte.</div>
        //                 <div className="p--5">Lorem ipsum dolor sit amet.</div>
        //                 <div className="p--6">Lorem ipsum dolor sit amet.</div>
        //             </p>
        //         </div>
        //         <div className="blog" id="blog">
        //             <h1 className='h1B'>Blog</h1><br />
        //             <p className='p1'>
        //                 <div className="p--1">Lorem ipsum dolor sit amet.</div>
        //                 <div className="p--2">Lorem ipsum dolor sit amet.</div>
        //                 <div className="p--3">Lorem ipsum dolor sit amet consectetur.</div>
        //                 <div className="p--4">Lorem ipsum dolor sit amet consectetur.</div>
        //                 <div className="p--5">Lorem ipsum dolor sit amet.</div>
        //                 <div className="p--6">Lorem ipsum dolor sit amet.</div>
        //             </p>
        //         </div>
        //         <div className="contact" id="contact">
        //             <h1 className='h1'>Contact</h1><br />
        //             <div className="textsAndimgs">
        //                 <p className='p1'>
        //                     <div className="p--1">Lorem ipsum dolor sit amet.</div>
        //                     <div className="p--2">Lorem ipsum dolor sit amet.</div>
        //                     <div className="p--3">Lorem ipsum dolor sit amet consectetur.</div>
        //                     <div className="p--4">Lorem ipsum dolor sit amet consectetur.</div>
        //                     <div className="p--5">Lorem ipsum dolor sit amet.</div>
        //                     <div className="p--6">Lorem ipsum dolor sit amet.</div>
        //                 </p>
        //                 <div className="imgs">
        //                     <img id='img1' className='img1' src={car} />
        //                     <img id='img2' className='img2' src={controller} />
        //                     <img id='img3' className='img3' src={whitebengaltiger} />
        //                 </div>
        //             </div>
        //         </div>
        //     </main>
        // </div>
    )
}

export default Home