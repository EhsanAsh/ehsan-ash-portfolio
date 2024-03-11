// Desc: This is the Projects page of the website where the user
// can view the projects I have worked on.
// ===============================================================

// Importing packages and components
// ===============================================================
import { Grid } from '@chakra-ui/react';
import ProjectCard from '../components/projectCard';
// ===============================================================

// Creating the Projects component
// ===============================================================
const Projects = () => {

    return (

        <Grid
            templateColumns='repeat(3, 1fr)'
            gap={5}
            p={10}
            justifyContent='center'
            justifyItems='center'
            alignItems='flex-start'
        >
            <ProjectCard />
        </Grid>

    );
};
// ===============================================================

// Exporting the Projects component
// ===============================================================
export default Projects;
// ===============================================================