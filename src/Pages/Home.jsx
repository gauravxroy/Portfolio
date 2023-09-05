'use client'

import {
    Button,
    Flex,
    Heading,
    Image,
    IconButton,
    Stack,
    Text,
    useBreakpointValue,
    Box, Divider
} from '@chakra-ui/react'
// import { FaFile } from 'react-icons/fa'
// import AOS from 'aos';




import { DiGithubBadge } from 'react-icons/di'
import Resume from '../Assets/Resume.pdf'
import ImgGaurav from '../Assets/gaurav-profile.jpg'
import ColorModeSwitcher from '../ColorModeSwitcher';
import Card from '../Components/Card'

function Home() {

    // #TODO: create object for card details
    // const cardDetail = [{
    //     techStack: 'React',
    //     body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, minus?",
    // },
    // {
    //     techStack: 'Chakra UI',
    //     body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, minus?",

    // },
    // {
    //     techStack: 'Tailwind Css',
    //     body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, minus?",

    // },
    // {
    //     techStack: 'next.js',
    //     body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, minus?",

    // }


    // ]



    return (
        <>

            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}

                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'blue.400',
                                    zIndex: -1,


                                }}>

                                Hey!  I Am Gaurav Roy
                            </Text>
                            <br />{' '}
                            <Text color={'blue.400'} as={'span'} >
                                Software Developer
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} fontWeight={"medium"} color={'gray.500'} data-aos="fade-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quibusdam.
                        </Text>
                        <Stack direction={{ base: 'row', md: 'row' }} spacing={4}>
                            <a href={Resume}><Button
                                rounded={'full'}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Resume
                            </Button></a>
                            <a href="http://">
                                <IconButton
                                    isRound={true}
                                    variant='solid'
                                    _hover={{
                                        bg: 'blue.500',
                                        color: 'white'
                                    }}
                                    aria-label='Done'
                                    fontSize='20px'
                                    icon={<DiGithubBadge />}
                                />
                            </a>
                            <a href="http://">
                                <IconButton
                                    isRound={true}
                                    variant='solid'
                                    _hover={{
                                        bg: 'blue.500',
                                        color: 'white'
                                    }}
                                    aria-label='Done'
                                    fontSize='20px'
                                    icon={<DiGithubBadge />}
                                />
                            </a>

                            <a href="http://">
                                <IconButton
                                    isRound={true}
                                    variant='solid'
                                    _hover={{
                                        bg: 'blue.500',
                                        color: 'white'
                                    }}
                                    aria-label='Done'
                                    fontSize='20px'
                                    icon={<DiGithubBadge />}
                                />
                            </a>
                            <ColorModeSwitcher />
                        </Stack>
                    </Stack>
                </Flex>
                <Flex p={8} flex={1} align={'center'} justify={'center'} wrap={'wrap'}>
                    <Image
                        borderRadius='full'
                        boxSize='300px'
                        src={ImgGaurav}
                        alt='Gaurav'
                        boxShadow='2xl'
                        transitionDelay={'1s ease-in-out'}
                        transition={'ease-out 0.8s'}
                        // transitionProperty={' transform .2s;'}
                        _hover={{
                            transition: 'ease-in 0.8s',
                            filter: 'grayscale(40%)',
                            cursor: 'pointer',

                            // transform: 'scale(1.2)'
                        }}
                    />
                </Flex>
            </Stack>
            <Divider />
            <Heading as='h4' size='md'
                textAlign={'center'}
                mt={'2'}
            // textDecoration={'underline'}
            // color={'blue.500'}


            >
                <Text
                    as={'span'}
                    position={'relative'}
                    fontSize={'2xl'}
                    _after={{
                        content: "''",
                        width: 'full',
                        height: useBreakpointValue({ base: '20%', md: '30%' }),
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'blue.400',
                        zIndex: -1,
                    }}>
                    Projects
                </Text>
            </Heading>
            <Flex minH={'100vh'} flex={1} align={'center'} justify={'center'} wrap={'wrap'} justifyContent={'space-evenly'}>
                {/* ##TODO:map the card dynamically */}
                {/* <Box >
                    {cardDetail.map((data, index) => (
                        <Card key={index} header={data.techStack} body={data.body} />
                    ))}
                </Box> */}
                <Box >
                    <Card Head1='app' stack1="React.js" />
                </Box>
                <Box >
                    <Card Head1='app' stack1="Next.js" />
                </Box>
                <Box >
                    <Card Head1="Clone" stack1='Tailwind' />
                </Box>
                <Box >
                    <Card Head1="Clone" stack1='Chakra UI' />
                </Box>

            </Flex>
            <Divider />

        </>
    )
}

export default Home