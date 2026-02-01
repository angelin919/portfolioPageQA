import React from 'react';
import Skills from '../components/ui/skills/Skills';
import Educations from '../components/ui/educations/Educations';
import '../App.css'

const PortfolioPage = () => {
    return (
        <div>
            <div className='section_1'>
                <Educations />
                <Skills />

            </div>
        </div>

    );
};

export default PortfolioPage;