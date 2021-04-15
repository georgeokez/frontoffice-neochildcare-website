import React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function Questions() {
  let displayQuestions = [
    {
      id: '1.',
      title: 'WHAT IS JIFFIX?',
      content:
        'Jiffix is a digital automobile repair company with an online platform. This means everything you need to help maintain and repair your car is available at your fingertips. From scheduling a service, getting a quote, and approving  a job, to getting free expert advice to help you take care of your car.',
    },

    {
      id: '2.',
      title: 'CAN YOUR EXPERTS COME TO ME?',
      content:
        'Jiffix is a digital automobile repair company with an online platform. This means everything you need to help maintain and repair your car is available at your fingertips. From scheduling a service, getting a quote, and approving  a job, to getting free expert advice to help you take care of your car.',
    },

    {
      id: '3.',
      title: 'WHO ARE JIFFIX AUTO EXPERTS?',
      content:
        'Jiffix is a digital automobile repair company with an online platform. This means everything you need to help maintain and repair your car is available at your fingertips. From scheduling a service, getting a quote, and approving  a job, to getting free expert advice to help you take care of your car.',
    },

    {
      id: '4.',
      title: 'CAN I GET QUOTES FOR MY SERVICE AND REPAIRS?',
      content:
        'Jiffix is a digital automobile repair company with an online platform. This means everything you need to help maintain and repair your car is available at your fingertips. From scheduling a service, getting a quote, and approving  a job, to getting free expert advice to help you take care of your car.',
    },

    {
      id: '5.',
      title: 'IS THE PRICE QUOTED, THE PRICE I WILL PAY?',
      content:
        'Jiffix is a digital automobile repair company with an online platform. This means everything you need to help maintain and repair your car is available at your fingertips. From scheduling a service, getting a quote, and approving  a job, to getting free expert advice to help you take care of your car.',
    },

    {
      id: '6.',
      title: 'CAN I RESCHEDULE MY SERVICE DATE?',
      content:
        'Jiffix is a digital automobile repair company with an online platform. This means everything you need to help maintain and repair your car is available at your fingertips. From scheduling a service, getting a quote, and approving  a job, to getting free expert advice to help you take care of your car.',
    },
  ];
  return (
    <Box mx={{ base: '10%', md: '15%', xl: '10%' }} my='5%'>
      {displayQuestions.map((question) => {
        return (
          <Accordion
            allowToggle
            boxShadow='0px 2px 15px rgba(26, 151, 207, 0.1)'
            my='2%'
          >
            <AccordionItem>
              <AccordionButton _expanded={{ bg: 'white', color: '#1A97CF' }}>
                <Box fontSize='xs' fontWeight='500' flex='1' textAlign='left'>
                  {question.id} {question.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} fontSize='xs'>
                {question.content}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </Box>
  );
}

export default Questions;
