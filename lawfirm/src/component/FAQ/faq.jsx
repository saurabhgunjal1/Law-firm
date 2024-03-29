import React from 'react'
import "./faq.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';


export default function Faq() {


    return (
        <div className='faqtopdiv'>
            <div className='faqleftdiv'>
                <h1 className='faqlefth1'>FAQ</h1>
                <p className='faqleftp'>Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint. </p>
            </div>
            <div className='faqrightdiv'>
                <Accordion defaultExpanded className='accordian'>
                    <AccordionSummary
                        expandIcon={<AddCircleRoundedIcon  className='addicon'/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography className='accordianhead'>Do I need a personal injury report?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='accordianbodytext'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion  className='accordian'>
                    <AccordionSummary
                        expandIcon={<AddCircleRoundedIcon  className='addicon'/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography className='accordianhead'>How much is my case worth?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='accordianbodytext'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion  className='accordian'>
                    <AccordionSummary
                        expandIcon={<AddCircleRoundedIcon  className='addicon'/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography className='accordianhead'>What should I do right after car accidect?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='accordianbodytext'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion  className='accordian'>
                    <AccordionSummary
                        expandIcon={<AddCircleRoundedIcon  className='addicon'/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography className='accordianhead'>How much is my case worth?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='accordianbodytext'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
               
            </div>
        </div>
    )
}
