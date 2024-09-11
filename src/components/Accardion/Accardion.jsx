import './ui/Accordion.scss'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

export default function Accardion({ title, menuLink }) {
    return (
        <Accordion className='accardion'>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                className='accardion_header'
            >
                {title}
            </AccordionSummary>
            <AccordionDetails>
                <ul className="accardion_menu">
                    <li className='accardion_menu_item'>
                        {menuLink}
                    </li>
                </ul>
            </AccordionDetails>
        </Accordion>

    );
}
