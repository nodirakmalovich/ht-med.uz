'use client'
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import './ui/catalogModal.scss'
import useCatalogModalApi from './api/catalogApi';
import CatalogCard from '../Cards/CatalogCard/CatalogCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '8px',
    borderColor: 'white',
    boxShadow: 24,
    p: 4,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
};


export default function CatalogModal() {


    const { categories } = useCatalogModalApi()


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="catalog">
                <Button
                    onClick={handleOpen}
                    className="catalog_button"
                >
                    <img src="/catalog-menu.svg" alt="menu icon" />
                    <p>
                        Каталог
                    </p>
                </Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                    className="catalog_modal"
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            {categories?.map((category, index) => {
                                return (
                                    <div key={index}>

                                        <CatalogCard
                                            image={category.image}
                                            imageAlt={category.slug}
                                            text={category.name}
                                        />
                                    </div>
                                )
                            })}
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}