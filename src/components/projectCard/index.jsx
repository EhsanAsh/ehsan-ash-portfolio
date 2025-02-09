// Desc: This file exports the ProjectCard component
// to be used in the Projects page
// ============================================================

// Import packages and utils
// ============================================================
import {
	GridItem,
	Box,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Text,
	Link as ChakraLink,
	Button,
	ButtonGroup,
	Image,
} from '@chakra-ui/react';
import { useRef } from 'react';
// ============================================================

// ProjectCard component
// ============================================================
const ProjectCard = ({ project, index }) => {
	const cardRef = useRef(null);

	return (
		<GridItem ref={cardRef} display={'flex'} height={'100%'}>
			<Card maxW={'sm'} maxH="700px" variant={'projects'}>
				<CardBody>
					<Image
						pt={8}
						pb={4}
						objectFit={'contain'}
						src={project.image}
						alt={project.name}
					/>
					<Box pb={4}>
						<Heading
							as={'h1'}
							fontSize={{ base: 'lg', lg: 'xl', xl: '2xl' }}
							fontWeight={'700'}
							color={'brand.darkBlue'}
							textAlign={'left'}
							mb={3}
							p={4}
							pb={0}
							fontFamily={'josefinSlabTitle'}
							borderLeft={'3px solid'}
							borderColor={'brand.orange'}>
							{project.name}
						</Heading>
						<Text
							color={'brand.darkBlue'}
							textAlign={'left'}
							fontFamily={'montserratBody'}>
							{project.description}
						</Text>
					</Box>
				</CardBody>
				<CardFooter>
					<ButtonGroup spacing={2} size={'sm'} variant={'solidProjectCard'}>
						{project.deployed && (
							<Button>
								<ChakraLink as={'a'} href={project.deployed} isExternal>
									<i
										className="fa-solid fa-rss fa-xl"
										style={{ marginRight: '5px' }}></i>
									Deployed Link
								</ChakraLink>
							</Button>
						)}
						<Button>
							<ChakraLink as={'a'} href={project.github} isExternal>
								<i
									className="fa-brands fa-github fa-xl"
									style={{ marginRight: '5px' }}></i>
								Github
							</ChakraLink>
						</Button>
					</ButtonGroup>
				</CardFooter>
			</Card>
		</GridItem>
	);
};
// ============================================================

// Exporting the ProjectCard component
// ============================================================
export default ProjectCard;
// ============================================================
