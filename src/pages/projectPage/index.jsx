import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router';
import projectsCards from '../../assets/data/projectsCard.json';
import projectsImg from '../../assets/images/projects';
import gitHub from '../../assets/images/icons/gitHub-black.svg';
import Slider from '../../components/slider';

const ProjectPage = ({}) => {
    const { id } = useParams();
    const [project, setProject] = useState('');

    useEffect(() => {
        setProject(projectsCards.find((el) => el.id === id));
    }, [id]);

    return (
        <main class='section'>
            <div class='container'>
                <div class='project-details'>
                    <h1 class='title-1'>{project.title}</h1>
                    {!!project.photos && project.photos.length ? (
                        <Slider photos={project.photos} />
                    ) : (
                        <img
                            src={projectsImg[project.mainImg]}
                            alt={project.title}
                            className='project-details__cover'
                        />
                    )}

                    <div class='project-details__desc'>
                        <p>Skills: {project.skills}</p>
                    </div>
                    <a href={project.gitHabLink} class='btn-outline' target='_blank' rel='noreferrer'>
                        <img src={gitHub} alt='gitHubImg' />
                        GitHub repo
                    </a>
                </div>
            </div>
        </main>
    );
};

export default ProjectPage;
