import React from 'react';
import type { Education } from '../../../types/types';
import './Educations.css'

interface Props {
    education: Education

}
const EducationCard = ({ education }: Props) => {
    const { id, title, date, desccription } = education
    // const formattedDate = new Date(date).toLocaleDateString('ru-RU');
    const yearOnly = new Date(date).getFullYear();


    return (
        <div className='education_card' key={id}>
            <h3>{title}</h3>
            <p>{desccription}</p>
            <p className='year'>{yearOnly}</p>
        </div>
    );
};

export default EducationCard;