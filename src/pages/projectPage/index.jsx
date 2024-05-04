import React from 'react';
import { useParams } from 'react-router';

const ProjectPage = ({}) => {
    const { id } = useParams();

    return <div>ProjectPage id={id}</div>;
};

export default ProjectPage;
