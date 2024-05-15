import React from 'react';
import './style.css';
import projectsCards from '../../assets/data/projectsCard.json';
import PreviewCard from '../../components/previewCard';

const Projects = (props) => {
    return (
        <main className='section'>
            <div className='container'>
                <h2 className='title-1'>Projects</h2>
                <ul className='projects'>
                    {projectsCards.map((card) => (
                        <li key={card.id} className='project'>
                            <PreviewCard card={card} />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Projects;
