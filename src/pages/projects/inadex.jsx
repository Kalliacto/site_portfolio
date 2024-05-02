import React from 'react';
import './style.css';
import img1 from '../../assets/images/projects/1.png';
import img2 from '../../assets/images/projects/2.png';
import img3 from '../../assets/images/projects/3.png';
import img4 from '../../assets/images/projects/4.png';
import img5 from '../../assets/images/projects/5.png';
import img6 from '../../assets/images/projects/6.png';

const Projects = (props) => {
    return (
        <main className='section'>
            <div className='container'>
                <h2 className='title-1'>Projects</h2>
                <ul className='projects'>
                    <li className='project'>
                        <a href='./project-page.html'>
                            <img src={img1} alt='Project img' className='project__img' />
                            <h3 className='project__title'>Video service of popular videos You Tube</h3>
                        </a>
                    </li>
                    <li className='project'>
                        <a href='./project-page.html'>
                            <img src={img2} alt='Project img' className='project__img' />
                            <h3 className='project__title'>Online Lingerie Store</h3>
                        </a>
                    </li>
                    <li className='project'>
                        <a href='./project-page.html'>
                            <img src={img3} alt='Project img' className='project__img' />
                            <h3 className='project__title'>Online Bird Goods Store</h3>
                        </a>
                    </li>
                    <li className='project'>
                        <img src={img4} alt='Project img' className='project__img' />
                        <h3 className='project__title'>
                            The website page dedicated to the series "Avatar: The Legend of Aang"
                        </h3>
                    </li>
                    <li className='project'>
                        <img src={img5} alt='Project img' className='project__img' />
                        <h3 className='project__title'>Landing NTF Marketplace</h3>
                    </li>
                    <li className='project'>
                        <img src={img6} alt='Project img' className='project__img' />
                        <h3 className='project__title'>Weather website</h3>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Projects;
