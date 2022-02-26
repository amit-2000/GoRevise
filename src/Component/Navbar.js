import React from 'react'
import { Box, Flex, Heading, Text, Center } from '@chakra-ui/react';

function Navbar() {
    return (
        <Center>
            <Box bg={'white'} m={10} w={'70rem'} borderRadius={'25px'}>
                <Flex justifyContent={'space-around'} alignItems={'center'} height={'50px'}>
                    <Flex>
                        <Heading color={'black'}>Go<Text as={'span'} color={'teal.300'}>Revise</Text></Heading>
                    </Flex>
                    <Flex w={'200px'} justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontSize={'xl'}>Home</Text>
                        <Text fontSize={'xl'}>Contact</Text>
                    </Flex>
                </Flex>
            </Box>
        </Center>
    )
}

export default Navbar