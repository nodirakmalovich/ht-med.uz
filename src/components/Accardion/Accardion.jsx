
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Accardion({ title, menuLink, key }) {
    return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    {title}
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="accardion_menu">
                        <li className='accardion_menu_item'>
                            <Link className='accardion_menu_item_link' href={'#'}>
                                {menuLink}
                            </Link>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>

    );
}
