'use client'

import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip, Text, keyframes, color,
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiLink, FiShoppingCart } from 'react-icons/fi'
import Colors from './Colors'


// ##TODO:create title/name object for the cards
// ##TODO:create description for the cards 
const data = {
    isNew: true,
    imageURL:
        'https://images.unsplash.com/photo-1596489558661-7855a9e4b743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80',
    name: 'clone',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
}



const blink = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity:0.8;
  }
  100% {
   opacity:0.2;
  }
 `



function Discription({ rating, numReviews, body }) {
    return (
        <Box display="flex" alignItems="center">
            <Box as="span" color="gray.600" fontSize="md" fontWeight={"medium"}>
                <Text>
                    {/* ##TODO:map the description for different card */}
                    {/* {body} */}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, aut.
                </Text>
            </Box>
        </Box>
    )
}

function ProductAddToCart(props) {
    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center" data-aos="zoom-in"
            data-aos-duration={'1100'}
        >
            <Box
                overflow={'hidden'}
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                transition='box-shadow 0.3s ease'
                _hover={{
                    cursor: 'pointer',

                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                },

             



                }
            >

                {data.isNew && (
                    <Circle size="10px" position="absolute" top={2} right={2} bg="green.500"
                        animation={`${blink} 4s linear infinite`}
                    />

                )}

                <Image

                    src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop="lg" roundedBottom={'sm'}
                    transition={'transform 0.3s ease 0.2s'}
                    overflow={'hidden'}
                    _hover={{
                        transform: "scale(1.02)",
                        transition: 'ease-in-out 0.5s',
                        filter: 'grayscale(10%)',
                    }}

                />

                <Box p="6">
                    <Box display="flex" alignItems="baseline">
                        {data.isNew && (
                            // ##TODO:map the badge
                            <Badge Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                                {props.stack1}
                            </Badge>

                        )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {/* ##TODO:map the card title details */}
                            {/* {props.head1} */}
                            {data.name}

                        </Box>

                        <Tooltip
                            label="live"
                            bg="white"
                            placement={'top'}
                            color={'gray.800'}
                            fontSize={'1.2em'}>
                            <chakra.a href={'#'} display={'flex'}>
                                <Icon as={FiLink} h={7} w={7} alignSelf={'center'} />
                            </chakra.a>
                        </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        <Discription />
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.400'} fontSize="2xl" transitionDelay={'.2s'} _hover={{
                                color: 'gray.200',
                                transition: '.8s ease-in-out'
                            }}>
                                <a href="http://"><FaGithub /></a>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex >
    )
}

export default ProductAddToCart